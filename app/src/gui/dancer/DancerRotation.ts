import type { Notedata } from "../../chart/sm/NoteTypes"
import { Foot } from "../../chart/stats/parity/ParityDataTypes"
import type { ParityComputeData } from "../../chart/stats/parity/ParityWebWorkerTypes"
import { STAGE_LAYOUTS } from "../../chart/stats/parity/StageLayouts"
import {
  SINGLE_FACINGS,
  planFootwork,
  rotatePoint,
  turnBetween,
  worldContact,
  type Contact,
  type DancerTiming,
} from "./DancerFootwork"
import {
  findChartedHalfTurn,
  turnRows,
  fitsBodyFrame,
  type TurnBridge,
  type TurnRow,
} from "./DancerHalfTurn"
import {
  BODY_TURN_LIMIT,
  HIP_SPEED_LIMIT,
  DancerStepPlan,
  smooth,
  turnAtCenter,
  type DancerChoreography,
} from "./DancerMotion"

const sides = ["left", "right"] as const
const layout = STAGE_LAYOUTS["dance-single"]

// A rest can only join two plans once both shoes and the hips have settled.
function standing(
  plan: DancerStepPlan,
  start: number,
  end: number,
  direction: number,
  rate: number
) {
  const search = Math.min(end - start, 2 * rate)
  for (let offset = 0.015 * rate; offset < search; offset += 0.015 * rate) {
    const second = direction > 0 ? start + offset : end - offset
    const pose = plan.sample(second)
    if (
      pose.compression ||
      pose.left.heel === pose.right.heel ||
      sides.some(side => {
        const f = pose[side]
        return (
          !f.contact ||
          f.holding ||
          f.heel < 0 ||
          f.toe >= 0 ||
          f.lift ||
          f.unload ||
          f.pitch
        )
      })
    )
      continue
    const before = plan.sample(second - 0.005 * rate),
      after = plan.sample(second + 0.005 * rate)
    if (
      Math.abs(turnBetween(before.yaw, after.yaw)) <= 1e-6 &&
      Math.hypot(before.hips.x - after.hips.x, before.hips.z - after.hips.z) <=
        1e-6
    )
      return { second, pose }
  }
}

function restTurn(
  front: DancerStepPlan,
  turned: DancerStepPlan,
  rest: TurnRow,
  angle: number,
  columns: number[],
  rate: number
): TurnBridge | undefined {
  const a = standing(front, rest.busyUntil, rest.second, 1, rate)
  if (!a) return
  const b = standing(turned, a.second, rest.second, -1, rate)
  if (!b) return
  const start = a.second,
    end = b.second,
    duration = (end - start) / rate
  const fromYaw = a.pose.yaw,
    toYaw = b.pose.yaw + angle
  const hips = rotatePoint(b.pose.hips, angle)
  if (
    1.5 * Math.max(Math.abs(toYaw - fromYaw), Math.abs(angle)) >
      BODY_TURN_LIMIT * duration ||
    1.5 * Math.hypot(hips.x - a.pose.hips.x, hips.z - a.pose.hips.z) >
      HIP_SPEED_LIMIT * duration
  )
    return
  const tracks: Contact[][] = []
  for (const [i, side] of sides.entries()) {
    const old = a.pose[side],
      target = b.pose[side]
    if (columns[old.heel] !== target.heel) return
    const origin: Contact = {
      x: old.x,
      z: old.z,
      yaw: old.yaw,
      heel: old.heel,
      toe: -1,
      beat: -Infinity,
      second: start,
      start,
      holdEnd: -Infinity,
      height: 0,
      fixed: true,
      pivot: false,
      jump: false,
      overLimit: false,
    }
    const mid = (start + end) / 2
    tracks.push([
      origin,
      {
        ...origin,
        ...rotatePoint(target, angle),
        yaw: target.yaw + angle,
        start: i === 0 ? start : mid + 0.035 * rate,
        second: i === 0 ? mid : end,
      },
    ])
  }
  planFootwork(tracks, rate)
  if (
    tracks.some(
      ([, hit], i) =>
        hit.overLimit ||
        Math.abs(turnBetween(hit.yaw, b.pose[sides[i]].yaw + angle)) > 1e-7
    )
  )
    return
  const turn = { angle, start, end, fromYaw, toYaw }
  if (!fitsBodyFrame(tracks, turn, rate)) return
  return { tracks, turn, steps: [] }
}

interface Candidate {
  bridge: TurnBridge
  relative: ParityComputeData
  plan: DancerStepPlan
  columns: number[]
}

function assemble(
  front: DancerStepPlan,
  original: ParityComputeData,
  { bridge, relative, plan, columns }: Candidate,
  rate: number
) {
  const { turn } = bridge
  const tracks = front.tracks.map((track, side) => [
    ...track.filter(c => c.second <= turn.start),
    ...bridge.tracks[side].slice(1),
    ...plan.tracks[side]
      .filter(c => c.second > turn.end)
      .map(c => worldContact(c, turn.angle, columns)),
  ])
  const stances = front.stances.filter(s => s.second <= turn.start)
  const insert = (second: number, yaw: number) => {
    if (stances.at(-1)!.second < second)
      stances.push({
        second,
        beat: -Infinity,
        turnStart: second,
        yaw,
        jump: false,
        crossed: false,
      })
  }
  insert(turn.start, turn.fromYaw)
  const steps = new Map(bridge.steps.map(step => [step.beat, step]))
  const actions = original.rowTimestamps.map(({ beat, second }, i) => {
    if (second <= turn.start) return original.states[i + 1].action
    const step = steps.get(beat)
    if (!step) return columns.map(col => relative.states[i + 1].action[col])
    const action = new Array<Foot>(4).fill(Foot.NONE)
    if (step.left !== null) action[step.left] = Foot.LEFT_HEEL
    if (step.right !== null) action[step.right] = Foot.RIGHT_HEEL
    stances.push({
      beat,
      second,
      turnStart: turn.start,
      crossed: false,
      jump: step.left !== null && step.right !== null,
      yaw:
        turn.fromYaw +
        (turn.toYaw - turn.fromYaw) *
          smooth((second - turn.start) / (turn.end - turn.start)),
    })
    return action
  })
  insert(turn.end, turn.toYaw)
  for (const s of plan.stances)
    if (s.second > turn.end) stances.push({ ...s, yaw: s.yaw + turn.angle })
  const choreography: DancerChoreography = { rate, tracks, stances, turn }
  return { actions, choreography }
}

function relativeTiming(timing: DancerTiming, columns: number[]): DancerTiming {
  const holds: DancerTiming["holds"] = new Map()
  for (const [beat, heads] of timing.holds)
    holds.set(
      beat,
      new Map(Array.from(heads, ([col, end]) => [columns[col], end]))
    )
  return { rate: timing.rate, holds }
}

// One timed change of heading per chart. The fixed-facing solver retains its
// footing style and overrides in each body frame. Compare distinct fast rows
// at the actual playback rate and keep the original solution on ties.
export function selectDanceRotation(
  notes: Notedata,
  timing: DancerTiming,
  original: ParityComputeData,
  solve: (notes: Notedata, timing: DancerTiming) => ParityComputeData | null
) {
  const { rate } = timing
  const front = new DancerStepPlan(original, layout, timing)
  let bestCount = front.fastSteps.length
  if (!bestCount) return
  const rows = turnRows(notes, timing)
  if (!rows.length || rows.some(row => !Number.isFinite(row.second))) return
  const rests = rows.filter(
    r => Number.isFinite(r.busyUntil) && r.second - r.busyUntil >= 0.65 * rate
  )
  let best: Candidate | undefined
  for (const { angle, columns } of SINGLE_FACINGS) {
    const quarters = Math.round(Math.abs(angle) / (Math.PI / 2))
    const turnSeconds = quarters * rate
    if (
      !bestCount ||
      (rows[0].second < turnSeconds && quarters === 1 && !rests.length)
    )
      continue
    const local = notes
      .map(n => ({ ...n, col: columns[n.col] }))
      .sort((a, b) => a.beat - b.beat || a.col - b.col)
    const timingInFrame = relativeTiming(timing, columns)
    const relative = solve(local, timingInFrame)
    if (
      !relative ||
      relative.rowTimestamps.length !== original.rowTimestamps.length ||
      relative.rowTimestamps.some(
        (r, i) =>
          r.beat !== original.rowTimestamps[i].beat ||
          r.second !== original.rowTimestamps[i].second
      )
    )
      continue
    const plan = new DancerStepPlan(relative, layout, timingInFrame)
    const accept = (bridge: TurnBridge, count: number) => {
      best = { bridge, relative, plan, columns }
      bestCount = count
    }
    const fast = plan.fastSteps
    const introEnd = Math.min(plan.firstPreparation, rows[0].second)
    const introStart = introEnd - turnSeconds
    if (introStart >= 0 && fast.length < bestCount) {
      const turn = {
        start: introStart,
        end: introEnd,
        fromYaw: 0,
        toYaw: angle,
        angle,
      }
      const tracks = turnAtCenter(turn.start, 0, angle, rate)
      accept({ turn, tracks, steps: [] }, fast.length)
    }
    if (!bestCount) continue
    if (quarters === 2) {
      const bridge = findChartedHalfTurn(rows, front, plan, rate, bestCount)
      if (bridge) accept(bridge, bridge.warningRows)
    } else {
      let prefix = 0,
        suffix = 0
      for (const rest of rests) {
        while (
          prefix < front.fastSteps.length &&
          front.fastSteps[prefix].second <= rest.busyUntil
        )
          prefix++
        while (suffix < fast.length && fast[suffix].second < rest.second)
          suffix++
        const count = prefix + fast.length - suffix
        if (count >= bestCount) continue
        const bridge = restTurn(front, plan, rest, angle, columns, rate)
        if (bridge) accept(bridge, count)
      }
    }
  }
  if (!best) return
  const selected = assemble(front, original, best, rate)
  // A hold handoff can place a release between rows. Make the final comparison
  // on the joined shoe tracks that practice mode will actually display.
  const joined = new DancerStepPlan(
    { ...original, choreography: selected.choreography },
    layout,
    timing
  )
  if (joined.fastSteps.length < front.fastSteps.length) return selected
}
