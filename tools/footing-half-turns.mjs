import { Foot } from "../app/src/chart/stats/parity/ParityDataTypes"
import { STAGE_LAYOUTS } from "../app/src/chart/stats/parity/StageLayouts"
import {
  PANEL_SPACING,
  planFootwork,
  swingProgress,
  turnBetween,
} from "../app/src/gui/dancer/DancerFootwork"

const sides = ["left", "right"]
const pad = STAGE_LAYOUTS["dance-single"].layout
// Each shoe goes around a different side of the pad. Indices are Left, Down,
// Up, Right. In world coordinates, positive yaw turns the dancer to the left.
const routes = [
  {
    direction: "counterclockwise",
    angle: Math.PI,
    lanes: [
      [0, 1, 3],
      [3, 2, 0],
    ],
  },
  {
    direction: "clockwise",
    angle: -Math.PI,
    lanes: [
      [0, 2, 3],
      [3, 1, 0],
    ],
  },
]
// These are the practice motion limits at 1x. planFootwork checks translation.
const hipSpeed = 1.35
const bodyTurnSpeed = 4
const shoeTurnSpeed = 2 * Math.PI
const swingPeakSlope = 1.2

function chartRows(chart) {
  const rows = []
  let heldUntil = -Infinity
  for (const note of chart.getNotedata()) {
    if (note.fake || note.warped) continue
    let row = rows.at(-1)
    if (row?.beat !== note.beat) {
      row = {
        beat: note.beat,
        second: note.second,
        tapsOnly: note.second > heldUntil,
        mask: 0,
        overrides: [],
      }
      rows.push(row)
    }
    row.tapsOnly &&= note.type === "Tap"
    row.mask |= 1 << note.col
    row.overrides[note.col] = note.parity?.override
    if (note.hold > 0)
      heldUntil = Math.max(
        heldUntil,
        chart.getSecondsFromBeat(note.beat + note.hold)
      )
  }
  return rows
}

// In each plan's own frame the left shoe is on Left and the right on Right.
// Matching these endpoints after a half-turn exchanges the physical panels.
function plantedOnSides(pose) {
  return (
    Math.abs(pose.yaw) < 1e-6 &&
    Math.abs(pose.compression) < 1e-8 &&
    sides.every((side, index) => {
      const foot = pose[side]
      return (
        foot.contact &&
        !foot.holding &&
        foot.heel === (index === 0 ? 0 : 3) &&
        foot.toe < 0 &&
        foot.lift === 0 &&
        foot.pitch === 0 &&
        foot.unload === 0
      )
    })
  )
}

function permitsHeel(override, side) {
  if (!override) return true
  return side === 0
    ? override === "Left" || override === Foot.LEFT_HEEL
    : override === "Right" || override === Foot.RIGHT_HEEL
}

function* nextSteps(row, phases, lanes) {
  // A shoe can retap or advance to its next panel. Neither can finish while
  // the other still occupies the panel where the finishing shoe must land.
  for (let l = phases[0]; l <= Math.min(2, phases[0] + 1); l++) {
    for (let r = phases[1]; r <= Math.min(2, phases[1] + 1); r++) {
      const next = [l, r]
      const columns = [lanes[0][l], lanes[1][r]]
      if (columns[0] === columns[1]) continue
      const available = (1 << columns[0]) | (1 << columns[1])
      if (row.mask & ~available) continue
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

function shoeTrack(side, first, steps, start, end, angle) {
  const from = start[sides[side]],
    to = end[sides[side]]
  const origin = {
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
  const contacts = [origin]
  const targets = []
  for (const step of steps) {
    if (!step.hits[side]) continue
    const phase = step.phases[side],
      heel = step.columns[side]
    // Choose the exact join positions on the side panels. Up and Down can
    // use the ordinary within-panel landing search during the turn.
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

// A single-panel tap allows any shoe angle. When reaching 90 degrees on the
// middle panel is too fast, distribute the turn over actual airborne time.
function fitShoeTurns(shoes) {
  planFootwork(
    shoes.map(shoe => shoe.contacts),
    1
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
  for (const { contacts, totalTurn } of shoes) {
    const swings = contacts.slice(1)
    const seconds = swings.reduce(
      (sum, hit) => sum + (hit.second - hit.start),
      0
    )
    if (
      seconds <= 0 ||
      swingPeakSlope * Math.abs(totalTurn) > shoeTurnSpeed * seconds + 1e-8
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

function shoeAt(contacts, second) {
  let old = contacts[0]
  for (let i = 1; i < contacts.length; i++) {
    const next = contacts[i]
    if (second < next.second) {
      if (second <= next.start) return old
      const blend = swingProgress(
        (second - next.start) / (next.second - next.start)
      )
      return {
        x: old.x + (next.x - old.x) * blend,
        z: old.z + (next.z - old.z) * blend,
        yaw: old.yaw + turnBetween(old.yaw, next.yaw) * blend,
      }
    }
    old = next
  }
  return old
}

function canTurn(first, steps, start, end, angle) {
  const last = steps.at(-1).row
  const duration = last.second - first.second
  const turn = angle + end.yaw - start.yaw
  // Cubic smoothstep has a peak slope of 1.5.
  if (1.5 * Math.abs(turn) > bodyTurnSpeed * duration) return false
  const shoes = sides.map((_, side) =>
    shoeTrack(side, first, steps, start, end, angle)
  )
  if (!fitShoeTurns(shoes)) return false
  const feetAt = second => shoes.map(s => shoeAt(s.contacts, second))
  let hips = start.hips,
    second = first.second
  for (const { row } of steps) {
    const [l, r] = feetAt(row.second)
    const target =
      row === last
        ? { x: -end.hips.x, z: -end.hips.z }
        : { x: (l.x + r.x) / 2, z: (l.z + r.z) / 2 }
    if (
      1.5 * Math.hypot(target.x - hips.x, target.z - hips.z) >
      hipSpeed * (row.second - second)
    )
      return false
    hips = target
    second = row.second
  }
  // Check leg order relative to the turning hips throughout the swing. In
  // this experiment the shoes must also point within 90 degrees of the body.
  const samples = Math.ceil(duration * 240)
  for (let i = 0; i <= samples; i++) {
    const u = i / samples
    const yaw = start.yaw + turn * u * u * (3 - 2 * u)
    const [l, r] = feetAt(first.second + u * duration)
    const width = (r.x - l.x) * Math.cos(yaw) - (r.z - l.z) * Math.sin(yaw)
    if (
      width < 0.05 ||
      [l, r].some(f => Math.abs(turnBetween(yaw, f.yaw)) > Math.PI / 2)
    )
      return false
  }
  return true
}

// Join the actual front and back chart plans with one turn on up to twelve
// tap rows. Either order of footfalls and simultaneous jumps are allowed.
export function findChartedHalfTurns(chart, front, back) {
  const rows = chartRows(chart)
  const original = front.fastSteps.map(s => s.beat)
  const backward = back.fastSteps.map(s => s.beat)
  const result = { feasibleRoutes: 0, best: null }
  for (const [i, first] of rows.entries()) {
    if (!first.tapsOnly) continue
    const start = front.sample(first.second)
    if (!plantedOnSides(start)) continue
    for (const route of routes) {
      let paths = [[]]
      for (let j = i + 1; paths.length && j < rows.length && j <= i + 12; j++) {
        const row = rows[j]
        if (!row.tapsOnly || row.second <= rows[j - 1].second) break
        const pending = []
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
            const end = back.sample(row.second)
            if (
              !plantedOnSides(end) ||
              !canTurn(first, steps, start, end, route.angle)
            )
              continue
            result.feasibleRoutes++
            const fast = new Set([
              ...original.filter(b => b <= first.beat),
              ...backward.filter(b => b > row.beat),
            ])
            const added = [...fast].filter(b => !original.includes(b))
            if (
              result.best &&
              (fast.size > result.best.warningRows ||
                (fast.size === result.best.warningRows &&
                  added.length >= result.best.added.length))
            )
              continue
            result.best = {
              fromBeat: first.beat,
              toBeat: row.beat,
              seconds: row.second - first.second,
              direction: route.direction,
              warningRows: fast.size,
              removed: original.filter(b => !fast.has(b)),
              added,
              steps: steps.map(({ row, hits, columns }) => ({
                beat: row.beat,
                left: hits[0] ? columns[0] : null,
                right: hits[1] ? columns[1] : null,
              })),
            }
          }
        }
        paths = pending
      }
    }
  }
  return result
}
