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
const { DancerMotion, PANEL_SPACING } = await vite.ssrLoadModule(
  "/app/src/gui/dancer/DancerMotion.ts"
)
const { Foot, TechCategory } = await vite.ssrLoadModule(
  "/app/src/chart/stats/parity/ParityDataTypes.ts"
)
const { STAGE_LAYOUTS } = await vite.ssrLoadModule(
  "/app/src/chart/stats/parity/StageLayouts.ts"
)
await vite.close()

const L = Foot.LEFT_HEEL,
  R = Foot.RIGHT_HEEL,
  toe = Foot.LEFT_TOE

function row(second, left, right, moved, extra = {}) {
  const state = {
    beat: second * 2,
    second,
    footColumns: [-1, left, extra.toe ?? -1, right, -1],
    movedFeet: new Set(moved),
    holdFeet: new Set(extra.held),
    action: [],
    frontFoot: null,
  }
  for (const part of [...state.holdFeet, ...moved])
    state.action[state.footColumns[part]] = part
  return state
}

function motion(
  rows,
  {
    notes = [],
    angles = [],
    techs = [],
    type = "dance-single",
    rate = 1,
    songLength = 0,
  } = {}
) {
  const chart = {
    stats: {
      parity: {
        states: [{}, ...rows, {}],
        facingRows: angles,
        techRows: techs,
      },
    },
    getNotedata: () => notes,
    getSecondsFromBeat: beat => beat / 2,
    getBeatFromSeconds: second => second * 2,
  }
  return new DancerMotion(chart, STAGE_LAYOUTS[type], rate, songLength)
}

test("a crossover anticipates support, lands on the beat, and is reproducible after a seek", () => {
  const clip = motion([row(1, 2, 1, [L, R]), row(1.5, 3, 1, [L])], {
    angles: [Math.PI / 2, (3 * Math.PI) / 4],
    techs: [undefined, new Set([TechCategory.Crossovers])],
  })
  const preparation = clip.sample(1.18)
  assert.ok(preparation.left.unload > 0)
  assert.equal(preparation.left.lift, 0)
  const airborne = clip.sample(1.36)
  assert.equal(airborne.coaching, "Weight on right foot")
  assert.ok(airborne.left.lift > 0)
  assert.equal(airborne.right.lift, 0)
  const landing = clip.sample(1.5)
  assert.equal(landing.left.x, PANEL_SPACING)
  assert.equal(landing.right.z, PANEL_SPACING)
  assert.equal(landing.left.lift, 0)
  assert.ok(landing.yaw < -1)
  assert.equal(landing.left.heel, 3)
  assert.equal(landing.coaching, "Keep hips turned")
  clip.sample(0)
  clip.sample(8)
  assert.deepEqual(clip.sample(1.36), airborne)
})

test("a hold or roll stays planted through its actual tail between parity rows", () => {
  for (const type of ["Hold", "Roll"]) {
    const clip = motion(
      [
        row(0, 2, 3, [L, R]),
        row(0.8, 2, 3, [R], { held: [L] }),
        row(1.12, 0, 3, [L]),
      ],
      {
        notes: [{ beat: 0, col: 2, type, hold: 2 }],
      }
    )
    const planted = clip.sample(0).left
    assert.ok(Math.abs(planted.z + PANEL_SPACING) < PANEL_SPACING / 2)
    assert.ok(Math.abs(planted.x) < PANEL_SPACING / 2)
    for (const t of [0.79, 0.8, 0.99, 1]) {
      const pose = clip.sample(t).left
      assert.equal(pose.x, planted.x)
      assert.equal(pose.z, planted.z)
      assert.equal(pose.lift, 0)
      assert.equal(pose.holding, t < 1)
    }
    assert.ok(clip.sample(1.06).left.lift > 0)
    const landed = clip.sample(1.12).left
    assert.equal(landed.heel, 0)
    assert.ok(Math.abs(landed.x + PANEL_SPACING) < PANEL_SPACING / 2)
  }
})

test("a jump has preparation, flight and landing, and a retap raises only its own foot", () => {
  const clip = motion([row(1, 0, 3, [L, R]), row(1.5, 0, 3, [R])])
  assert.ok(clip.sample(0.76).compression > 0.03)
  const flight = clip.sample(0.9)
  assert.ok(flight.left.lift > 0 && flight.right.lift > 0)
  assert.equal(clip.sample(1).left.lift + clip.sample(1).right.lift, 0)
  assert.ok(clip.sample(1.07).compression > 0.03)
  assert.equal(clip.sample(1.07).coaching, "Soften the landing")
  const retap = clip.sample(1.41)
  assert.equal(retap.left.lift, 0)
  assert.ok(retap.right.lift > 0)
  assert.equal(retap.right.x, PANEL_SPACING)
  assert.equal(clip.sample(1.5).right.lift, 0)
  assert.equal(clip.sample(1.5).right.heel, 3)
})

test("a bracket pivots against a held panel and points its toe at the second panel", () => {
  const clip = motion(
    [row(0, 1, 0, [L, R]), row(0.8, 1, 0, [toe], { toe: 3, held: [L] })],
    {
      notes: [{ beat: 0, col: 1, type: "Hold", hold: 3 }],
    }
  )
  assert.equal(clip.sample(0.72).left.lift, 0)
  const { left } = clip.sample(0.8)
  assert.equal(left.heel, 1)
  assert.equal(left.toe, 3)
  assert.equal(left.x, PANEL_SPACING / 2)
  assert.equal(left.z, PANEL_SPACING / 2)
  assert.equal(left.holding, true)
  assert.ok(Math.abs(left.yaw + Math.PI / 4) < 1e-8)
})

test("a hold handoff makes space for the arriving shoe and keeps continuous contact", () => {
  const clip = motion(
    [row(0, 2, 3, [L, R]), row(1, 2, 2, [R], { held: [R] })],
    {
      notes: [{ beat: 0, col: 2, type: "Hold", hold: 4 }],
      techs: [undefined, new Set([TechCategory.Holdswitch])],
    }
  )
  assert.equal(clip.sample(0.99).left.lift, 0)
  const transfer = clip.sample(1)
  assert.ok(Math.abs(transfer.left.x - transfer.right.x) > 0.1)
  assert.equal(transfer.right.holding, true)
  assert.ok(clip.sample(1.08).left.lift > 0)
  assert.equal(clip.sample(1.08).right.lift, 0)
  assert.equal(clip.sample(1.3).left.heel, -1)
  assert.equal(transfer.left.holding, false)
})

test("pad geometry distinguishes both sides of a double layout and empty charts stay neutral", () => {
  for (const type of [
    "dance-single",
    "dance-double",
    "pump-single",
    "pump-double",
  ]) {
    const columns = STAGE_LAYOUTS[type].layout
    const col = columns.length - 1
    const clip = motion([row(1, -1, col, [R])], { type })
    const end = clip.sample(1)
    assert.equal(end.right.x, columns[col].x * PANEL_SPACING)
    assert.ok(Math.abs(end.right.z + columns[col].y * PANEL_SPACING) < 1e-9)
    assert.equal(clip.sample(9).coaching, "Face the screen")
  }
  const empty = motion([]).sample(20)
  assert.equal(empty.coaching, "Face the screen")
  assert.equal(empty.left.heel, -1)
  assert.equal(empty.right.heel, -1)
})

test("the dancer walks out of a crossed finish with support, bounded movement, and a centered landing", () => {
  for (const type of [
    "dance-single",
    "dance-double",
    "pump-single",
    "pump-double",
  ]) {
    for (const rate of [0.5, 1, 2]) {
      const last = STAGE_LAYOUTS[type].layout.length - 1
      const clip = motion([row(1, last, 0, [L, R])], {
        type,
        rate,
        songLength: 4,
        angles: [2.8],
        techs: [new Set([TechCategory.Crossovers])],
      })
      const lastStep = clip.sample(1)
      const end = clip.sample(4)
      assert.equal(end.yaw, lastStep.yaw)
      assert.equal(end.left.x, lastStep.left.x)
      assert.equal(end.right.x, lastStep.right.x)
      assert.deepEqual(clip.fastSteps, [])
      assert.ok(clip.restTime > 4 && clip.restTime < 4 + 6 * rate)

      const dt = 0.01,
        lifted = new Set(),
        coached = new Set()
      let previous = end
      for (
        let t = 4 + dt * rate;
        t < clip.restTime + dt * rate;
        t += dt * rate
      ) {
        const pose = clip.sample(t)
        assert.equal(Math.min(pose.left.lift, pose.right.lift), 0)
        assert.ok(
          Math.hypot(pose.left.x - pose.right.x, pose.left.z - pose.right.z) >
            0.13
        )
        assert.ok(
          Math.hypot(
            pose.hips.x - previous.hips.x,
            pose.hips.z - previous.hips.z
          ) <=
            1.35001 * dt
        )
        assert.ok(Math.abs(pose.yaw - previous.yaw) <= 4.00001 * dt)
        for (const side of ["left", "right"]) {
          const foot = pose[side],
            old = previous[side]
          if (foot.lift > 0) lifted.add(side)
          const travel = Math.hypot(
            foot.x - old.x,
            foot.z - old.z,
            foot.lift - old.lift
          )
          assert.ok(travel <= 2.50001 * dt)
          if (foot.lift === 0 && old.lift === 0) assert.ok(travel < 1e-9)
          const turn = foot.yaw - old.yaw
          assert.ok(
            Math.abs(Math.atan2(Math.sin(turn), Math.cos(turn))) <=
              (2 * Math.PI + 1e-5) * dt
          )
        }
        coached.add(pose.coaching)
        previous = pose
      }
      assert.deepEqual(lifted, new Set(["left", "right"]))
      assert.ok(
        coached.has("Weight on left foot") &&
          coached.has("Weight on right foot")
      )
      const ready = clip.sample(clip.restTime)
      const opening = clip.sample(-2)
      for (const side of ["left", "right"]) {
        assert.equal(ready[side].heel, -1)
        assert.equal(ready[side].toe, -1)
        for (const field of ["x", "z", "lift", "pitch", "yaw"])
          assert.ok(Math.abs(ready[side][field] - opening[side][field]) < 1e-9)
      }
      assert.deepEqual(ready.hips, { x: 0, z: 0 })
      assert.equal(ready.yaw, 0)
      assert.equal(ready.coaching, "Face the screen")
      assert.deepEqual(clip.sample(clip.restTime + 3), ready)
      assert.deepEqual(clip.sample(1), lastStep)
    }
  }
})

test("an unwind leaves room to pass the support shoe and lands on the continuing beat", () => {
  for (const [type, left, right] of [
    ["dance-double", 6, 2],
    ["dance-double", 4, -1],
    ["pump-single", 3, 1],
  ]) {
    const clip = motion([row(1, left, right, right < 0 ? [L] : [L, R])], {
      type,
      songLength: 3.83,
    })
    let old = clip.sample(3.83)
    const gap = pose =>
      Math.hypot(pose.left.x - pose.right.x, pose.left.z - pose.right.z)
    const clearance = Math.min(gap(old), 0.13)
    const dt = 0.005
    let landings = 0
    for (let t = 3.83 + dt; t <= clip.restTime; t += dt) {
      const pose = clip.sample(t)
      assert.ok(gap(pose) + 1e-6 >= clearance)
      for (const side of ["left", "right"]) {
        if (old[side].lift > 0 && pose[side].lift === 0) {
          assert.ok(Math.abs(t - Math.round(t * 2) / 2) <= dt + 1e-8)
          landings++
        }
      }
      old = pose
    }
    assert.ok(landings >= 2)
  }
})

test("the return respects a final hold beyond the audio, leaves the supporting foot in place, and can be scrubbed", () => {
  const rows = [row(1, 2, -1, [L])]
  const options = {
    notes: [{ beat: 2, col: 2, type: "Hold", hold: 6 }],
    songLength: 2,
  }
  const clip = motion(rows, options)
  const longer = motion(rows, { ...options, songLength: 10 })
  for (const time of [0.9, 1, 1.15, 2, 3.99, 4]) {
    assert.deepEqual(clip.sample(time).left, longer.sample(time).left)
    const hips = clip.sample(time).hips,
      other = longer.sample(time).hips
    assert.ok(Math.hypot(hips.x - other.x, hips.z - other.z) < 1e-9)
  }
  assert.equal(clip.sample(3.99).left.holding, true)
  const support = clip.sample(4).right
  let inFlight
  for (let t = 4; t <= clip.restTime; t += 0.01) {
    const pose = clip.sample(t)
    assert.deepEqual(pose.right, support)
    if (pose.left.lift > 0.01) inFlight = t
  }
  assert.ok(inFlight > 4)
  const pose = clip.sample(inFlight)
  clip.sample(1)
  clip.sample(100)
  assert.deepEqual(clip.sample(inFlight), pose)
  assert.equal(clip.sample(1).left.heel, 2)
})

test("YOU Hard's dense phrase lands every note at full tempo within the movement budget", () => {
  // Beats 151–157 at 130 BPM. Only 115 ms separate beats 154.5 and 154.75.
  const steps = [
    [151, 3, 1, L],
    [151.75, 3, 1, R],
    [152.5, 0, 1, L],
    [153, 0, 2, R],
    [154, 1, 2, L],
    [154.5, 1, 3, R],
    [154.75, 0, 3, L],
    [155.5, 0, 2, R],
    [156, 1, 2, L],
    [156.5, 1, 3, R],
    [157, 0, 3, L],
  ]
  const rows = steps.map(([beat, l, r, foot]) => ({
    ...row(((beat - 150) * 60) / 130, l, r, [foot]),
    beat,
  }))
  const clip = motion(rows, {
    angles: rows.map((_, i) => (i % 2 ? -1.3 : 1.3)),
  })
  assert.deepEqual(clip.fastSteps, [])
  for (const row of rows) {
    const pose = clip.sample(row.second)
    for (const part of row.movedFeet) {
      const foot = part === L ? pose.left : pose.right
      const col = row.footColumns[part],
        panel = STAGE_LAYOUTS["dance-single"].layout[col]
      assert.equal(foot.heel, col)
      assert.ok(foot.contact && foot.lift === 0)
      assert.ok(Math.abs(foot.x - panel.x * PANEL_SPACING) < PANEL_SPACING / 2)
      assert.ok(Math.abs(foot.z + panel.y * PANEL_SPACING) < PANEL_SPACING / 2)
    }
  }
  const dt = 0.001
  let previous = clip.sample(0)
  for (let t = dt; t <= rows.at(-1).second; t += dt) {
    const pose = clip.sample(t)
    assert.ok(Math.min(pose.left.lift, pose.right.lift) < 1e-10)
    for (const side of ["left", "right"]) {
      const foot = pose[side],
        old = previous[side]
      assert.ok(
        Math.hypot(foot.x - old.x, foot.z - old.z, foot.lift - old.lift) / dt <=
          2.50001
      )
    }
    assert.ok(
      Math.hypot(pose.hips.x - previous.hips.x, pose.hips.z - previous.hips.z) /
        dt <=
        1.35001
    )
    assert.ok(Math.abs(pose.yaw - previous.yaw) / dt <= 4.00001)
    previous = pose
  }
})

test("an over-budget double-pad step is flagged at its exact beat and still lands on time", () => {
  const rows = [row(1, 0, 5, [L, R]), row(1.08, 7, 5, [L])]
  const clip = motion(rows, { type: "dance-double" })
  assert.deepEqual(
    clip.fastSteps.map(step => step.beat),
    [2.16]
  )
  const landing = clip.sample(1.08)
  assert.match(landing.paceWarning, /Left 2→.*beat 2\.16/)
  assert.equal(clip.sample(1.04).paceWarning, landing.paceWarning)
  assert.equal(clip.sample(3).paceWarning, "")
  assert.equal(clip.sample(0).paceWarning, "")
  assert.equal(landing.left.heel, 7)
  assert.equal(landing.left.lift, 0)
  assert.equal(landing.right.heel, 5)
  assert.deepEqual(clip.sample(1.08), landing)
  const slow = motion(rows, { type: "dance-double", rate: 0.08 })
  assert.deepEqual(slow.fastSteps, [])
  assert.equal(slow.sample(1.08).left.heel, 7)
})

test("the free foot can start before a grounded bracket on the supporting foot", () => {
  const clip = motion(
    [
      row(1, 2, 1, [L, R]),
      row(1.56, 2, 1, [toe], { toe: 0, held: [L] }),
      row(1.7, 2, 3, [R], { toe: 0, held: [L] }),
    ],
    { notes: [{ beat: 2, col: 2, type: "Hold", hold: 3 }] }
  )
  assert.deepEqual(clip.fastSteps, [])
  assert.ok(clip.sample(1.53).right.lift > 0)
  for (const t of [1.53, 1.56, 1.65, 1.7]) {
    assert.equal(clip.sample(t).left.lift, 0)
    assert.equal(clip.sample(t).left.holding, true)
  }
  assert.equal(clip.sample(1.7).right.heel, 3)
})

test("a transfer due exactly at a hold tail is flagged and later swings remain feasible", () => {
  const clip = motion(
    [
      row(0, 0, 1, [L, R]),
      row(1, 3, 1, [L]),
      row(1.5, 3, 2, [R]),
      row(1.75, 0, 2, [L]),
    ],
    { notes: [{ beat: 0, col: 0, type: "Hold", hold: 2 }] }
  )
  assert.deepEqual(
    clip.fastSteps.map(step => step.beat),
    [2]
  )
  assert.equal(clip.sample(0.999).left.heel, 0)
  assert.equal(clip.sample(0.999).left.lift, 0)
  assert.equal(clip.sample(1).left.heel, 3)
  assert.equal(clip.sample(1.75).left.heel, 0)
  assert.equal(clip.sample(1.75).paceWarning, "")
})

test("a tap can arrive turned toward an upcoming bracket", () => {
  const clip = motion([row(1, 0, 3, [L, R]), row(1.2, 0, 3, [toe], { toe: 1 })])
  assert.deepEqual(clip.fastSteps, [])
  assert.ok(clip.sample(1).left.yaw < -1)
  const bracket = clip.sample(1.2).left
  assert.equal(bracket.heel, 0)
  assert.equal(bracket.toe, 1)
  assert.ok(Math.abs(bracket.yaw + (3 * Math.PI) / 4) < 1e-8)
})
