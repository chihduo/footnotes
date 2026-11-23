import type { Notedata } from "../../chart/sm/NoteTypes"
import { isHoldNote } from "../../chart/sm/NoteTypes"
import {
  Foot,
  type FootOverride,
} from "../../chart/stats/parity/ParityDataTypes"
import { STAGE_LAYOUTS } from "../../chart/stats/parity/StageLayouts"
import {
  FOOT_TURN_LIMIT,
  PANEL_SPACING,
  peakSlope,
  planFootwork,
  turnBetween,
  type Contact,
  type DancerTiming,
} from "./DancerFootwork"
import {
  BODY_TURN_LIMIT,
  HIP_SPEED_LIMIT,
  sampleFoot,
  smooth,
  type BodyTurn,
  type DancerPose,
  type DancerStepPlan,
} from "./DancerMotion"

export interface TurnRow {
  beat: number
  second: number
  tapsOnly: boolean
  mask: number
  overrides: FootOverride[]
  busyUntil: number
}

// Include mines and hold tails when deciding whether an interval is free.
export function turnRows(notes: Notedata, timing: DancerTiming) {
  const rows: TurnRow[] = []
  let busyUntil = -Infinity
  for (const note of notes) {
    if (note.fake || note.warped) continue
    let row = rows.at(-1)
    if (row?.beat !== note.beat) {
      row = {
        beat: note.beat,
        second: note.second,
        tapsOnly: note.second > busyUntil,
        mask: 0,
        overrides: [],
        busyUntil,
      }
      rows.push(row)
    }
    row.tapsOnly &&= note.type === "Tap"
    row.mask |= 1 << note.col
    if (note.parity?.override) row.overrides[note.col] = note.parity.override
    busyUntil = Math.max(busyUntil, note.second)
    if (isHoldNote(note))
      busyUntil = Math.max(
        busyUntil,
        timing.holds.get(note.beat)?.get(note.col) ?? Infinity
      )
  }
  return rows
}

export interface TurnBridge {
  turn: BodyTurn
  tracks: Contact[][]
  steps: { beat: number; left: number | null; right: number | null }[]
}

const sides = ["left", "right"] as const
const lanesByDirection = [
  {
    angle: Math.PI,
    lanes: [
      [0, 1, 3],
      [3, 2, 0],
    ],
  },
  {
    angle: -Math.PI,
    lanes: [
      [0, 2, 3],
      [3, 1, 0],
    ],
  },
]
const pad = STAGE_LAYOUTS["dance-single"].layout

function plantedOnSides(pose: DancerPose) {
  return (
    Math.abs(pose.yaw) < 1e-6 &&
    Math.abs(pose.compression) < 1e-8 &&
    sides.every((side, i) => {
      const f = pose[side]
      return (
        f.contact &&
        !f.holding &&
        f.heel === (i === 0 ? 0 : 3) &&
        f.toe < 0 &&
        f.lift === 0 &&
        f.pitch === 0 &&
        f.unload === 0
      )
    })
  )
}

function permitsHeel(override: FootOverride | undefined, i: number) {
  return (
    !override ||
    (i === 0
      ? override === "Left" || override === Foot.LEFT_HEEL
      : override === "Right" || override === Foot.RIGHT_HEEL)
  )
}

interface TurnStep {
  row: TurnRow
  phases: number[]
  columns: number[]
  hits: boolean[]
}

function* nextSteps(row: TurnRow, phases: number[], lanes: number[][]) {
  // Each shoe retaps or advances to its next panel around the opposite side
  // of the pad. Only charted taps can move a shoe.
  for (let l = phases[0]; l <= Math.min(2, phases[0] + 1); l++) {
    for (let r = phases[1]; r <= Math.min(2, phases[1] + 1); r++) {
      const next = [l, r],
        columns = [lanes[0][l], lanes[1][r]]
      if (
        columns[0] === columns[1] ||
        row.mask & ~((1 << columns[0]) | (1 << columns[1]))
      )
        continue
      const hits = columns.map(col => Boolean(row.mask & (1 << col)))
      if (
        hits.some((hit, i) =>
          hit
            ? !permitsHeel(row.overrides[columns[i]], i)
            : next[i] !== phases[i]
        )
      )
        continue
      yield { row, phases: next, columns, hits }
    }
  }
}

function shoeTrack(
  side: number,
  first: TurnRow,
  steps: TurnStep[],
  start: DancerPose,
  end: DancerPose,
  angle: number
) {
  const from = start[sides[side]],
    to = end[sides[side]]
  const origin: Contact = {
    second: first.second,
    beat: first.beat,
    start: first.second,
    x: from.x,
    z: from.z,
    yaw: from.yaw,
    heel: from.heel,
    toe: -1,
    holdEnd: -Infinity,
    height: 0,
    fixed: true,
    pivot: false,
    jump: false,
    overLimit: false,
  }
  const totalTurn = angle + turnBetween(from.yaw, to.yaw)
  const contacts = [origin],
    targets: number[] = []
  for (const step of steps) {
    if (!step.hits[side]) continue
    const phase = step.phases[side],
      heel = step.columns[side]
    const x = [from.x, pad[heel].x * PANEL_SPACING, -to.x][phase]
    const z = [from.z, -pad[heel].y * PANEL_SPACING, -to.z][phase]
    const yaw = from.yaw + (totalTurn * phase) / 2
    contacts.push({
      ...origin,
      x,
      z,
      yaw,
      heel,
      fixed: phase !== 1,
      start: -Infinity,
      second: step.row.second,
      beat: step.row.beat,
      jump: step.hits.every(Boolean),
    })
    targets.push(yaw)
  }
  return { contacts, targets, totalTurn }
}

function fitShoeTurns(shoes: ReturnType<typeof shoeTrack>[], rate: number) {
  planFootwork(
    shoes.map(s => s.contacts),
    rate
  )
  if (shoes.some(s => s.contacts.some(c => c.overLimit))) return false
  if (
    shoes.every(s =>
      s.contacts
        .slice(1)
        .every((c, i) => Math.abs(turnBetween(c.yaw, s.targets[i])) < 1e-7)
    )
  )
    return true
  // Single-panel taps accept any angle. Spread the required turn over the
  // time the shoes actually spend in the air, preserving both endpoint yaws.
  for (const { contacts, totalTurn } of shoes) {
    const swings = contacts.slice(1)
    const seconds = swings.reduce(
      (sum, hit) => sum + (hit.second - hit.start),
      0
    )
    if (
      seconds <= 0 ||
      peakSlope * Math.abs(totalTurn) * rate > FOOT_TURN_LIMIT * seconds + 1e-8
    )
      return false
    let elapsed = 0
    for (const hit of swings) {
      const duration = hit.second - hit.start
      if (Math.abs((totalTurn * duration) / seconds) > Math.PI) return false
      elapsed += duration
      hit.yaw = contacts[0].yaw + (totalTurn * elapsed) / seconds
    }
  }
  return true
}

function bridgeTurn(
  first: TurnRow,
  steps: TurnStep[],
  start: DancerPose,
  end: DancerPose,
  angle: number,
  rate: number
): TurnBridge | undefined {
  const last = steps[steps.length - 1].row,
    duration = last.second - first.second
  const fromYaw = start.yaw,
    toYaw = angle + end.yaw
  if (1.5 * Math.abs(toYaw - fromYaw) * rate > BODY_TURN_LIMIT * duration)
    return
  const shoes = sides.map((_, side) =>
    shoeTrack(side, first, steps, start, end, angle)
  )
  if (!fitShoeTurns(shoes, rate)) return
  const tracks = shoes.map(s => s.contacts)
  const feetAt = (second: number) =>
    tracks.map(track => sampleFoot(track, second, rate))
  let hips = start.hips,
    previous = first.second
  for (const { row } of steps) {
    const [l, r] = feetAt(row.second)
    const target =
      row === last
        ? { x: -end.hips.x, z: -end.hips.z }
        : { x: (l.x + r.x) / 2, z: (l.z + r.z) / 2 }
    if (
      1.5 * Math.hypot(target.x - hips.x, target.z - hips.z) * rate >
      HIP_SPEED_LIMIT * (row.second - previous)
    )
      return
    hips = target
    previous = row.second
  }
  const turn = { start: first.second, end: last.second, angle, fromYaw, toYaw }
  if (!fitsBodyFrame(tracks, turn, rate)) return
  return {
    tracks,
    turn,
    steps: steps.map(({ row, hits, columns }) => ({
      beat: row.beat,
      left: hits[0] ? columns[0] : null,
      right: hits[1] ? columns[1] : null,
    })),
  }
}

// Test body-relative width and shoe angle throughout the turn. Between swings
// only the body moves. Subdivide its angle there and use 240 Hz in the air so
// long rests do not make the search proportional to the song's duration.
export function fitsBodyFrame(
  tracks: Contact[][],
  turn: BodyTurn,
  rate: number
) {
  const { start, end, fromYaw, toYaw } = turn
  const times = new Set<number>([start, end])
  const addInterval = (a: number, b: number, n: number) => {
    for (let i = 0; i <= n; i++) times.add(a + ((b - a) * i) / n)
  }
  addInterval(
    start,
    end,
    Math.max(1, Math.ceil(Math.abs(toYaw - fromYaw) * 80))
  )
  for (const track of tracks)
    for (const hit of track.slice(1)) {
      addInterval(
        hit.start,
        hit.second,
        Math.max(1, Math.ceil(((hit.second - hit.start) * 240) / rate))
      )
    }
  for (const second of times) {
    const yaw =
      fromYaw + (toYaw - fromYaw) * smooth((second - start) / (end - start))
    const l = sampleFoot(tracks[0], second, rate),
      r = sampleFoot(tracks[1], second, rate)
    const width = (r.x - l.x) * Math.cos(yaw) - (r.z - l.z) * Math.sin(yaw)
    if (
      width < 0.05 ||
      Math.abs(turnBetween(yaw, l.yaw)) > Math.PI / 2 ||
      Math.abs(turnBetween(yaw, r.yaw)) > Math.PI / 2
    )
      return false
  }
  return true
}

export function findChartedHalfTurn(
  rows: TurnRow[],
  front: DancerStepPlan,
  back: DancerStepPlan,
  rate: number,
  warningCeiling: number
) {
  const original = front.fastSteps,
    backward = back.fastSteps
  let best: (TurnBridge & { warningRows: number }) | undefined
  let prefixWarnings = 0,
    suffixIndex = 0
  for (const [i, first] of rows.entries()) {
    while (
      prefixWarnings < original.length &&
      original[prefixWarnings].beat <= first.beat
    )
      prefixWarnings++
    if (prefixWarnings >= warningCeiling) break
    if (!first.tapsOnly || !(first.mask & 9)) continue
    const start = front.sample(first.second)
    if (!plantedOnSides(start)) continue
    while (
      suffixIndex < backward.length &&
      backward[suffixIndex].beat <= first.beat
    )
      suffixIndex++
    for (const route of lanesByDirection) {
      let paths: TurnStep[][] = [[]],
        after = suffixIndex
      for (let j = i + 1; paths.length && j < rows.length && j <= i + 12; j++) {
        const row = rows[j]
        if (!row.tapsOnly || row.second <= rows[j - 1].second) break
        while (after < backward.length && backward[after].beat <= row.beat)
          after++
        const warnings = prefixWarnings + backward.length - after
        const pending: TurnStep[][] = []
        for (const path of paths) {
          for (const step of nextSteps(
            row,
            path.at(-1)?.phases ?? [0, 0],
            route.lanes
          )) {
            const steps = [...path, step]
            if (step.phases.some(phase => phase < 2)) {
              pending.push(steps)
              continue
            }
            if (warnings >= warningCeiling) continue
            const end = back.sample(row.second)
            if (!plantedOnSides(end)) continue
            const bridge = bridgeTurn(
              first,
              steps,
              start,
              end,
              route.angle,
              rate
            )
            if (!bridge) continue
            best = { ...bridge, warningRows: warnings }
            warningCeiling = warnings
            if (!warnings) return best
          }
        }
        paths = pending
      }
    }
  }
  return best
}
