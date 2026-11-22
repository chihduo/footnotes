import assert from "node:assert/strict"
import test from "node:test"
import { createServer } from "vite"

const vite = await createServer({
  configFile: false,
  appType: "custom",
  logLevel: "error",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
})
// The module normally registers its message handler in a Web Worker.
globalThis.self = {}
const { ParityInternals } = await vite.ssrLoadModule(
  "/app/src/chart/stats/parity/ParityInternals.ts"
)
const { Foot, FOOTING_STYLES } = await vite.ssrLoadModule(
  "/app/src/chart/stats/parity/ParityDataTypes.ts"
)
const { getDancerTiming } = await vite.ssrLoadModule(
  "/app/src/gui/dancer/DancerFootwork.ts"
)
const { DancerMotion } = await vite.ssrLoadModule(
  "/app/src/gui/dancer/DancerMotion.ts"
)
const { STAGE_LAYOUTS } = await vite.ssrLoadModule(
  "/app/src/chart/stats/parity/StageLayouts.ts"
)
delete globalThis.self
await vite.close()

const left = Foot.LEFT_HEEL,
  right = Foot.RIGHT_HEEL
function note(beat, col, override, hold = 0) {
  return {
    beat,
    second: beat * 0.12,
    col,
    type: hold ? "Hold" : "Tap",
    hold,
    parity: override ? { override } : undefined,
  }
}
function solve(engine, notes, first = 0, last = notes.at(-1).beat) {
  const { states, parityLabels } = engine.compute(first, last, notes)
  assert.equal(parityLabels.size, notes.length)
  for (const n of notes) {
    const part = parityLabels.get(n.beat.toFixed(3) + "-" + n.col)
    assert.ok(part > Foot.NONE)
    if (n.parity) assert.equal(part, n.parity.override)
  }
  return states.slice(1, -1)
}

// Check the returned physical stance independently of the solver's edge tags.
function swingCount(states, anchor, a, b) {
  let count = 0
  for (let i = 1; i < states.length; i++) {
    const prev = states[i - 1].footColumns,
      next = states[i].footColumns
    for (const [moving, support] of [
      [left, right],
      [right, left],
    ]) {
      if (prev[support] !== anchor || next[support] !== anchor) continue
      if (
        (prev[moving] === a && next[moving] === b) ||
        (prev[moving] === b && next[moving] === a)
      )
        count++
    }
  }
  return count
}

for (const style of FOOTING_STYLES) {
  test(
    style +
      " releases a tapped Up or Down before the other foot swings across it",
    () => {
      for (const [type, offset] of [
        ["dance-single", 0],
        ["dance-double", 0],
        ["dance-double", 4],
      ]) {
        for (const center of [1, 2]) {
          for (const [start, end, moving, support] of [
            [0, 3, left, right],
            [3, 0, right, left],
          ]) {
            const a = start + offset,
              b = end + offset,
              anchor = center + offset
            const notes = [
              note(0, a, moving),
              note(0, anchor, support),
              ...[anchor, anchor, b, anchor, a, anchor, b].map((col, i) =>
                note(i + 1, col)
              ),
            ].sort((x, y) => x.beat - y.beat || x.col - y.col)
            const states = solve(new ParityInternals(type, style), notes)
            assert.equal(swingCount(states, anchor, a, b), 0)
          }
        }
      }
    }
  )

  test(
    style + " keeps a sustained Up pressed through forced side steps",
    () => {
      const notes = [
        note(0, 0, left),
        note(0, 2, right, 4),
        note(1, 3),
        note(2, 0),
        note(3, 3),
      ]
      const states = solve(new ParityInternals("dance-single", style), notes)
      assert.ok(
        states.every(
          s =>
            s.combinedColumns[2] === right &&
            s.footColumns[Foot.LEFT_TOE] === -1
        )
      )
      assert.equal(swingCount(states, 2, 0, 3), 3)
    }
  )

  test(
    style + " plans the hold entry again when a later foot override changes",
    () => {
      const engine = new ParityInternals("dance-single", style)
      const notes = [note(0, 0), note(1, 1, undefined, 3), note(2, 3, left)]
      solve(engine, notes)
      for (const finalFoot of [right, left]) {
        notes[2] = note(2, 3, finalFoot)
        const states = solve(engine, notes, 2, 2)
        const fresh = solve(new ParityInternals("dance-single", style), notes)
        assert.deepEqual(
          states.map(s => s.footColumns),
          fresh.map(s => s.footColumns)
        )
        assert.equal(
          states[1].combinedColumns[1],
          finalFoot === left ? right : left
        )
        assert.equal(states[2].combinedColumns[1], states[1].combinedColumns[1])
        assert.equal(swingCount(states, 1, 0, 3), 0)
      }
    }
  )
}

test("a forced swing still allows the rest of the chart to be replanned", () => {
  const notes = [
    note(0, 0, left),
    note(0, 1, right),
    note(1, 3, left),
    note(2, 1),
    note(3, 0),
    note(4, 1),
    note(5, 3),
  ]
  for (const style of FOOTING_STYLES) {
    const states = solve(new ParityInternals("dance-single", style), notes)
    assert.equal(swingCount(states.slice(0, 2), 1, 0, 3), 1)
    assert.equal(swingCount(states, 1, 0, 3), 1)
  }
})

test("the rule recognizes actual occupied panels, including the toes of a bracket", () => {
  function flagged(type, start, end) {
    const notes = [start, end].flatMap((row, beat) =>
      row.map(([col, foot]) => note(beat, col, foot))
    )
    const engine = new ParityInternals(type)
    solve(engine, notes)
    const [, before, after] = engine.bestPath
    return !!engine.nodeMap.get(before).children.get(after).ANCHORED_SWING
  }
  // The same support foot keeps Up, changing from its toe to its heel.
  assert.ok(
    flagged(
      "dance-single",
      [
        [0, right],
        [2, Foot.RIGHT_TOE],
        [3, left],
      ],
      [
        [0, left],
        [2, right],
      ]
    )
  )
  // An actual transfer of support and a vertical swing are different steps.
  assert.equal(
    flagged(
      "dance-single",
      [
        [0, left],
        [2, right],
      ],
      [
        [1, right],
        [3, left],
      ]
    ),
    false
  )
  assert.equal(
    flagged(
      "dance-single",
      [
        [0, left],
        [1, right],
      ],
      [[2, right]]
    ),
    false
  )
  assert.equal(flagged("dance-single", [[0, left]], [[3, left]]), false)
  assert.equal(
    flagged(
      "dance-double",
      [
        [2, right],
        [3, left],
      ],
      [[4, left]]
    ),
    false
  )
  assert.ok(
    flagged(
      "dance-double",
      [
        [0, left],
        [6, right],
      ],
      [[7, left]]
    )
  )
  assert.equal(
    flagged(
      "pump-single",
      [
        [0, left],
        [2, right],
      ],
      [[4, left]]
    ),
    false
  )
  assert.equal(
    flagged(
      "pump-double",
      [
        [0, left],
        [3, right],
      ],
      [[9, left]]
    ),
    false
  )
})

// The holds meet exactly at their tails. A run of sixteenth notes follows.
function holdSequence() {
  return [
    [4, 3],
    [4.5, 0, 1],
    [4.5, 3],
    [5.5, 2, 0.75],
    [6.25, 3, 0.75],
    [7, 1, 0.25],
    [7.5, 0],
    [7.75, 2],
    [8, 1],
    [8.25, 3],
    [8.5, 0],
  ].map(([beat, col, hold]) => ({
    ...note(beat, col, undefined, hold),
    second: beat * 0.375,
  }))
}

function playSequence(engine, notes, rate, checkSpeed = true) {
  const chart = {
    getNotedata: () => notes,
    getSecondsFromBeat: beat => beat * 0.375,
    getBeatFromSeconds: second => second / 0.375,
  }
  const timing = checkSpeed ? getDancerTiming(chart, rate) : undefined
  const parity = engine.compute(0, notes.at(-1).beat, notes, timing)
  const motion = new DancerMotion(
    { ...chart, stats: { parity } },
    STAGE_LAYOUTS["dance-single"],
    rate
  )
  return { parity, motion }
}

test("uncrosses a side jump with a grounded hold pivot and no new fast steps", () => {
  for (const style of FOOTING_STYLES) {
    const engine = new ParityInternals("dance-single", style)
    const notes = holdSequence()
    const old = playSequence(engine, notes, 1, false)
    assert.deepEqual(
      old.motion.fastSteps.map(s => s.beat),
      [4.5]
    )
    for (const [rate, pivotBeat, side, heel, toe] of [
      [1, 5.5, "left", 0, 2],
      [1.25, 6.25, "right", 3, 2],
      [1, 5.5, "left", 0, 2],
    ]) {
      const { parity, motion } = playSequence(engine, notes, rate)
      const jump = motion.sample(4.5 * 0.375)
      assert.equal(jump.left.heel, 0)
      assert.equal(jump.right.heel, 3)
      assert.equal(parity.parityLabels.get("4.500-0"), left)
      assert.equal(parity.parityLabels.get("4.500-3"), right)
      assert.ok(parity.states.every(s => s.leftHeel !== 3 || s.rightHeel !== 0))
      const pivot = motion.sample(pivotBeat * 0.375)[side]
      assert.deepEqual([pivot.heel, pivot.toe], [heel, toe])
      for (const delta of [-0.02, 0, 0.02]) {
        const foot = motion.sample(pivotBeat * 0.375 + delta)[side]
        assert.ok(foot.holding && foot.contact && foot.lift === 0)
      }
      const original = playSequence(engine, notes, rate, false).motion
      for (const fast of motion.fastSteps) {
        assert.ok(
          original.fastSteps.some(
            s => s.beat === fast.beat && s.label === fast.label
          )
        )
      }
      if (rate === 1) assert.deepEqual(motion.fastSteps, [])
    }
  }
})

test("retains the original footing when the alternative adds a fast step", () => {
  const engine = new ParityInternals("dance-single", "Minimal effort")
  const notes = holdSequence().slice(0, -1)
  const original = playSequence(engine, notes, 1.25, false)
  const checked = playSequence(engine, notes, 1.25)
  assert.equal(checked.parity.crossingPlan, "original")
  assert.deepEqual(checked.parity.parityLabels, original.parity.parityLabels)
  assert.deepEqual(checked.motion.fastSteps, original.motion.fastSteps)
})

test("a side-panel jump with explicit foot assignments keeps those assignments", () => {
  const engine = new ParityInternals("dance-single", "Minimal effort")
  const notes = holdSequence()
  notes[1].parity = { override: right }
  notes[2].parity = { override: left }
  const { parity } = playSequence(engine, notes, 1)
  assert.equal(parity.parityLabels.get("4.500-0"), right)
  assert.equal(parity.parityLabels.get("4.500-3"), left)
})

test("retimes a hold pivot after a chart edit just as a fresh solve would", () => {
  const engine = new ParityInternals("dance-single", "Minimal effort")
  const notes = holdSequence()
  playSequence(engine, notes, 1)
  const seconds = beat => beat * 0.375 + (beat >= 5.5 ? 0.2 : 0)
  const edited = notes.map(n => ({ ...n, second: seconds(n.beat) }))
  const timing = getDancerTiming(
    { getNotedata: () => edited, getSecondsFromBeat: seconds },
    1
  )
  const end = edited.at(-1).beat
  const result = engine.compute(5.5, end, edited, timing)
  const fresh = new ParityInternals("dance-single", "Minimal effort").compute(
    0,
    end,
    edited,
    timing
  )
  assert.deepEqual(result.rowTimestamps, fresh.rowTimestamps)
  assert.deepEqual(
    result.states.map(s => [s.second, s.footColumns]),
    fresh.states.map(s => [s.second, s.footColumns])
  )
})
