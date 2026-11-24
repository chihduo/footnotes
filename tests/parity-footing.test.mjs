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
const { Foot, FOOTING_STYLES, TechCategory } = await vite.ssrLoadModule(
  "/app/src/chart/stats/parity/ParityDataTypes.ts"
)
const { getDancerTiming, FOOT_SPEED_LIMIT, FOOT_TURN_LIMIT, turnBetween } =
  await vite.ssrLoadModule("/app/src/gui/dancer/DancerFootwork.ts")
const { DancerMotion, BODY_TURN_LIMIT, HIP_SPEED_LIMIT } =
  await vite.ssrLoadModule("/app/src/gui/dancer/DancerMotion.ts")
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

const rotationEngine = () => new ParityInternals("dance-single", "Free style")

function playRotation(
  engine,
  notes,
  { rate = 1, lead = 0, beatLength = 0.43, from = 0, fixed = false } = {}
) {
  const chart = {
    getNotedata: () => notes,
    getSecondsFromBeat: beat => lead + beat * beatLength,
    getBeatFromSeconds: second => (second - lead) / beatLength,
  }
  const timing = getDancerTiming(chart, rate)
  const parity = engine[fixed ? "computeFixedFacing" : "compute"](
    from,
    notes.at(-1).beat,
    notes,
    timing
  )
  // The worker's Maps, Sets and timed contacts reach the stage by structured clone.
  const motion = new DancerMotion(
    { ...chart, stats: { parity: structuredClone(parity) } },
    STAGE_LAYOUTS["dance-single"],
    rate
  )
  return { parity, motion }
}

// Six chart rows take the feet from the side panels, around opposite ends
// of the pad, and back onto the same panels with the feet exchanged.
function halfTurnNotes(mirror = false) {
  return [
    [0, 2],
    [0.5, 2],
    [0.5, 3],
    [1.5, 0],
    [1.5, 3],
    [2, 0],
    [2, 1],
    [3, 2],
    [3.5, 3],
    [4, 1],
    [4, 3],
    [5, 0],
    [5, 3],
  ]
    .map(([beat, col]) => ({
      ...note(beat, mirror ? [3, 1, 2, 0][col] : col),
      second: beat * 0.43,
    }))
    .sort((a, b) => a.beat - b.beat || a.col - b.col)
}

function checkTurnMotion(motion, rate) {
  const { start, end } = motion.turn
  const n = Math.ceil(((end - start) * 300) / rate),
    dt = (end - start) / (rate * n)
  let prev = motion.sample(start)
  for (let i = 1; i <= n; i++) {
    const pose = motion.sample(start + ((end - start) * i) / n)
    assert.ok(
      Math.abs(turnBetween(prev.yaw, pose.yaw)) <= dt * BODY_TURN_LIMIT + 1e-8
    )
    assert.ok(
      Math.hypot(prev.hips.x - pose.hips.x, prev.hips.z - pose.hips.z) <=
        dt * HIP_SPEED_LIMIT + 1e-8
    )
    const { left, right, yaw } = pose
    assert.ok(
      (right.x - left.x) * Math.cos(yaw) - (right.z - left.z) * Math.sin(yaw) >=
        0.05 - 1e-8
    )
    for (const side of ["left", "right"]) {
      const a = prev[side],
        b = pose[side]
      assert.ok(
        Math.hypot(b.x - a.x, b.z - a.z, b.lift - a.lift) <=
          dt * FOOT_SPEED_LIMIT + 1e-8
      )
      assert.ok(
        Math.abs(turnBetween(a.yaw, b.yaw)) <= dt * FOOT_TURN_LIMIT + 1e-8
      )
      assert.ok(Math.abs(turnBetween(yaw, b.yaw)) <= Math.PI / 2 + 1e-8)
    }
    prev = pose
  }
}

test("only Free style changes heading during an intro or a charted half-turn", () => {
  for (const lead of [0, 4]) {
    const notes = halfTurnNotes().map(n => ({ ...n, second: lead + n.second }))
    assert.ok(playRotation(rotationEngine(), notes, { lead }).motion.turn)
    for (const style of ["Minimal effort", "Natural", "Alternating"]) {
      const actual = playRotation(
        new ParityInternals("dance-single", style),
        notes,
        { lead }
      )
      const fixed = playRotation(
        new ParityInternals("dance-single", style),
        notes,
        { lead, fixed: true }
      )
      assert.deepEqual(actual.parity, fixed.parity, style)
      assert.equal(actual.motion.turn, undefined, style)
      assert.deepEqual(actual.motion.fastSteps, fixed.motion.fastSteps, style)
      for (const { second } of notes)
        assert.equal(actual.motion.sample(second).heading, 0, style)
    }
  }
})

test("Free style scores the same fixed-facing path as Minimal effort", () => {
  const notes = halfTurnNotes()
  const free = rotationEngine()
  const minimal = new ParityInternals("dance-single", "Minimal effort")
  const fixed = playRotation(free, notes, { fixed: true })
  const baseline = playRotation(minimal, notes)
  assert.deepEqual(fixed.parity, baseline.parity)
  assert.equal(free.bestPathCost, minimal.bestPathCost)
})

test("a charted half-turn removes a fast row in either direction and lands the labeled feet", () => {
  for (const mirror of [false, true]) {
    const notes = halfTurnNotes(mirror),
      engine = rotationEngine()
    const fixed = playRotation(engine, notes, { fixed: true }).motion
    assert.deepEqual(
      fixed.fastSteps.map(s => s.beat),
      [4]
    )
    const { parity, motion } = playRotation(engine, notes)
    assert.deepEqual(motion.fastSteps, [])
    assert.equal(motion.turn.angle, mirror ? Math.PI : -Math.PI)
    checkTurnMotion(motion, 1)

    for (const n of notes) {
      const label = parity.parityLabels.get(n.beat.toFixed(3) + "-" + n.col)
      const foot = motion.sample(n.second)[label === left ? "left" : "right"]
      assert.ok(foot.contact && foot.heel === n.col)
    }
    const landing = motion.sample(5 * 0.43)
    assert.deepEqual([landing.left.heel, landing.right.heel], [3, 0])
    assert.equal(landing.yaw, motion.turn.angle)
    assert.ok(!parity.techRows.at(-1)?.has(TechCategory.Crossovers))
    assert.deepEqual(
      engine.bestPath.slice(1, -1),
      parity.states.slice(1, -1).map(s => s.toKey())
    )
    const home = motion.sample(motion.restTime)
    assert.deepEqual([home.heading, home.yaw], [0, 0])
    assert.ok(
      Math.abs(home.left.x + 0.1) < 1e-8 && Math.abs(home.right.x - 0.1) < 1e-8
    )
    assert.deepEqual(motion.sample(5 * 0.43), landing)
  }
})

test("Free style tucks both elbows into a half-turn and opens the arms to finish", () => {
  for (const mirror of [false, true]) {
    const { motion } = playRotation(rotationEngine(), halfTurnNotes(mirror))
    const { start, end } = motion.turn
    const rest = motion.sample(-1).arms
    const winding = motion.sample(start + 0.35 * (end - start)).arms
    const braking = motion.sample(end - 0.05).arms
    assert.deepEqual(motion.sample(start + 0.62 * (end - start)).arms, winding)
    assert.deepEqual(motion.sample(end + 0.025).arms, braking)
    for (const [i, arm] of winding.entries()) {
      assert.ok(Math.abs(arm.upper.x) > Math.abs(rest[i].upper.x) + 0.03)
      assert.ok(Math.abs(arm.upper.x) < Math.abs(braking[i].upper.x) - 0.05)
      assert.ok(arm.forearm.z < rest[i].forearm.z - 0.04)
      assert.ok(Math.abs(braking[i].upper.x) > Math.abs(rest[i].upper.x) + 0.07)
      assert.ok(
        Math.abs(braking[i].forearm.x) > Math.abs(rest[i].forearm.x) + 0.06
      )
    }
    assert.deepEqual(motion.sample(motion.restTime).arms, rest)
  }
})

test("a charted half-turn requires free panels, permitted feet, and enough real time", () => {
  const engine = rotationEngine(),
    notes = halfTurnNotes()
  for (const [rate, turned] of [
    [1, true],
    [1.5, false],
    [0.5, false],
    [1, true],
  ]) {
    const { parity, motion } = playRotation(engine, notes, { rate })
    assert.equal(Boolean(motion.turn), turned)
    assert.equal(parity.plannedRate, rate)
  }
  const mine = { ...note(2.5, 0), second: 2.5 * 0.43, type: "Mine" }
  const withMine = [...notes, mine].sort(
    (a, b) => a.beat - b.beat || a.col - b.col
  )
  assert.equal(
    playRotation(engine, withMine, { from: 2.5 }).motion.turn,
    undefined
  )
  assert.ok(
    playRotation(
      engine,
      withMine.map(n => (n === mine ? { ...n, fake: true } : n)),
      { from: 2.5 }
    ).motion.turn
  )
  const held = notes.map(n =>
    n.beat === 2 && n.col === 1 ? { ...n, type: "Hold", hold: 1.75 } : n
  )
  const withHold = playRotation(rotationEngine(), held).motion
  assert.equal(withHold.turn, undefined)
  assert.ok(
    ["left", "right"].some(side => withHold.sample(3.7 * 0.43)[side].holding)
  )
  const forced = notes.map(n =>
    n.beat === 3 ? { ...n, parity: { override: "Right" } } : n
  )
  const changed = playRotation(engine, forced, { from: 2.5 })
  const fresh = playRotation(rotationEngine(), forced)
  assert.equal(changed.motion.turn, undefined)
  assert.equal(changed.parity.parityLabels.get("3.000-2"), right)
  assert.deepEqual(changed.parity.parityLabels, fresh.parity.parityLabels)
})

test("an intro half-turn starts facing the screen and preserves physical foot overrides", () => {
  const notes = [
    [0, 3, "Right"],
    [1, 0, "Right"],
    [2, 0, "Left"],
    [3, 1, "Right"],
    [4, 0, "Left"],
    [4, 1],
    [5, 1, "Right"],
  ].map(([beat, col, foot]) => ({
    ...note(beat, col, foot),
    second: 4 + beat * 0.16,
  }))
  const options = { lead: 4, beatLength: 0.16 },
    engine = rotationEngine()
  const { motion, parity } = playRotation(engine, notes, options)
  assert.equal(motion.turn.angle, Math.PI)
  assert.ok(motion.turn.start >= 0 && motion.turn.end < notes[0].second)
  assert.equal(motion.sample(0).heading, 0)
  for (const n of notes.filter(n => n.parity)) {
    const part = parity.parityLabels.get(n.beat.toFixed(3) + "-" + n.col)
    assert.equal(
      part === left || part === Foot.LEFT_TOE,
      n.parity.override === "Left"
    )
  }
  checkTurnMotion(motion, 1)
  assert.ok(
    motion.fastSteps.length <
      playRotation(engine, notes, { ...options, fixed: true }).motion.fastSteps
        .length
  )
})

test("a rest permits a quarter-turn between planted shoes and keeps the chart landings", () => {
  const times = [0, 0.2, 2.7, 3.64, 3.83, 3.92, 4.01, 4.11]
  const notes = [0, 3, 3, 1, 2, 0, 1, 2].map((col, beat) => ({
    ...note(beat, col),
    second: times[beat],
  }))
  const engine = rotationEngine()
  const { motion } = playRotation(engine, notes)
  assert.equal(motion.turn.angle, Math.PI / 2)
  assert.ok(motion.turn.start > 0.2 && motion.turn.end < 2.7)
  checkTurnMotion(motion, 1)
  for (const side of ["left", "right"])
    assert.equal(
      motion.sample(motion.turn.start)[side].heel,
      motion.sample(motion.turn.end)[side].heel
    )
  assert.ok(
    motion.fastSteps.length <
      playRotation(engine, notes, { fixed: true }).motion.fastSteps.length
  )
})

test("a quarter-turn in a short intro leaves time for the first charted step", () => {
  for (const [lead, canTurn] of [
    [1.1, false],
    [1.4, true],
  ]) {
    const beatLength = 0.185
    const notes = [1, 2, 3, 1].map((col, beat) => ({
      ...note(beat, col),
      second: lead + beat * beatLength,
    }))
    const { motion, parity } = playRotation(rotationEngine(), notes, {
      lead,
      beatLength,
    })
    assert.equal(Boolean(motion.turn), canTurn)
    assert.equal(motion.fastSteps.length, canTurn ? 0 : 1)
    if (canTurn) {
      assert.equal(Math.abs(motion.turn.angle), Math.PI / 2)
      assert.ok(motion.turn.start >= 0)
      for (const track of motion.tracks) {
        const first = track.find(hit => Number.isFinite(hit.beat))
        assert.ok(first.start >= motion.turn.end)
      }
      const firstSide =
        parity.parityLabels.get("0.000-1") === left ? "left" : "right"
      assert.equal(motion.sample(lead)[firstSide].heel, 1)
    }
  }
})
