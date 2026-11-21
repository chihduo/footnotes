import assert from "node:assert/strict"
import test from "node:test"
import { createServer } from "vite"

const vite = await createServer({
  configFile: false,
  appType: "custom",
  logLevel: "error",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true, hmr: false, watch: null },
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
  { notes = [], angles = [], techs = [], type = "dance-single" } = {}
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
  }
  return new DancerMotion(chart, STAGE_LAYOUTS[type])
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
  assert.match(landing.cue, /Cross.*Left/)
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
    const pose = clip.sample(0.99).left
    assert.equal(pose.z, -PANEL_SPACING)
    assert.equal(pose.x, 0)
    assert.equal(pose.lift, 0)
    assert.equal(pose.holding, true)
    assert.ok(clip.sample(1.06).left.lift > 0)
    assert.equal(clip.sample(1.12).left.x, -PANEL_SPACING)
  }
})

test("a jump has preparation, flight and landing, and a retap raises only its own foot", () => {
  const clip = motion([row(1, 0, 3, [L, R]), row(1.5, 0, 3, [R])])
  assert.ok(clip.sample(0.76).compression > 0.03)
  const flight = clip.sample(0.9)
  assert.ok(flight.left.lift > 0 && flight.right.lift > 0)
  assert.match(clip.sample(1).cue, /Jump/)
  assert.ok(clip.sample(1.07).compression > 0.03)
  assert.equal(clip.sample(1.07).coaching, "Soften the landing")
  const retap = clip.sample(1.41)
  assert.equal(retap.left.lift, 0)
  assert.ok(retap.right.lift > 0)
  assert.equal(retap.right.x, PANEL_SPACING)
  assert.match(clip.sample(1.5).cue, /Retap/)
})

test("a bracket pivots against a held panel and points its toe at the second panel", () => {
  const clip = motion(
    [row(0, 1, 0, [L, R]), row(0.8, 1, 0, [toe], { toe: 3, held: [L] })],
    {
      notes: [{ beat: 0, col: 1, type: "Hold", hold: 3 }],
    }
  )
  assert.equal(clip.sample(0.72).left.lift, 0)
  const { left, cue } = clip.sample(0.8)
  assert.equal(left.heel, 1)
  assert.equal(left.toe, 3)
  assert.equal(left.x, PANEL_SPACING / 2)
  assert.equal(left.z, PANEL_SPACING / 2)
  assert.equal(left.holding, true)
  assert.ok(Math.abs(left.yaw + Math.PI / 4) < 1e-8)
  assert.match(cue, /Bracket/)
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
  assert.match(transfer.cue, /Switch hold/)
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
    assert.equal(end.right.z, -columns[col].y * PANEL_SPACING)
    if (type.endsWith("double")) assert.match(end.cue, /Right 2/)
    assert.equal(clip.sample(9).cue, "Steps complete")
  }
  const empty = motion([]).sample(20)
  assert.equal(empty.cue, "Ready")
  assert.equal(empty.left.heel, -1)
  assert.equal(empty.right.heel, -1)
})
