import type { Chart } from "../../chart/sm/Chart"
import { isHoldNote } from "../../chart/sm/NoteTypes"
import { clamp } from "../../util/Math"

export const PANEL_SPACING = 0.32 // metres between panel centres
const FOOT_SPEED_LIMIT = 2.5 // metres per real second, including lift
const FOOT_TURN_LIMIT = 2 * Math.PI // radians per real second
const COMFORT_SPEED = 1.85
const inset = 0.095 // metres from the panel centre toward an edge or corner
const offsets = [0, -inset, inset]
const panelLandings = offsets.flatMap(dx => offsets.map(dz => ({ dx, dz })))
const centreOnly = [{ dx: 0, dz: 0 }]

export interface DancerTiming {
  rate: number
  holds: Map<number, Map<number, number>>
}

// A hold can end between note rows, or after a tempo change or stop.
export function getDancerTiming(chart: Chart, rate: number): DancerTiming {
  const holds: DancerTiming["holds"] = new Map()
  for (const note of chart.getNotedata()) {
    if (!isHoldNote(note) || note.fake || note.warped) continue
    let row = holds.get(note.beat)
    if (!row) {
      row = new Map()
      holds.set(note.beat, row)
    }
    row.set(note.col, chart.getSecondsFromBeat(note.beat + note.hold))
  }
  return { rate, holds }
}

export interface Contact {
  second: number
  beat: number
  start: number
  x: number
  z: number
  yaw: number
  heel: number
  toe: number
  holdEnd: number
  height: number
  fixed: boolean
  pivot: boolean
  jump: boolean
  overLimit: boolean
}

// Accelerate for one sixth of a swing, coast, then brake. The peak slope is
// 1.2. The lift sin²(πt) reaches its peak slope during the coast, so the
// combined peak speed is exactly hypot(1.2 * distance, π * height) / duration.
const ramp = 1 / 6
const peakSlope = 1 / (1 - ramp)
export function swingProgress(t: number) {
  if (t < ramp) return (peakSlope * t * t) / (2 * ramp)
  if (t > 1 - ramp) return 1 - (peakSlope * (1 - t) ** 2) / (2 * ramp)
  return peakSlope * (t - ramp / 2)
}

export function turnBetween(from: number, to: number) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from))
}

function stepHeight(contact: Contact, distance: number, seconds: number) {
  if (contact.pivot) return 0
  const budget = FOOT_SPEED_LIMIT * seconds
  const verticalBudget =
    Math.sqrt(Math.max(0, budget ** 2 - (peakSlope * distance) ** 2)) / Math.PI
  // Flatten a hurried swing before flagging it. Even a retap has to lift off.
  return Math.max(
    contact.jump ? 0.025 : 0.012,
    Math.min(
      0.1,
      (contact.jump ? 0.085 : 0.023) + 0.065 * distance,
      0.17 * seconds,
      verticalBudget
    )
  )
}

function speedTimesDuration(distance: number, height: number) {
  return Math.hypot(peakSlope * distance, Math.PI * height)
}

export function comfortableSwingSeconds(
  distance: number,
  height: number,
  turn: number,
  jump = false
) {
  return Math.max(
    (jump ? 0.25 : 0.16) + 0.26 * distance,
    speedTimesDuration(distance, height) / COMFORT_SPEED,
    (peakSlope * Math.abs(turn)) / FOOT_TURN_LIMIT
  )
}

interface Landing {
  x: number
  z: number
  excess: number
  effort: number
  from?: Landing
}

function better(a: Landing, b: Landing) {
  return a.excess < b.excess || (a.excess === b.excess && a.effort < b.effort)
}

// Search the whole foot track. A landing near a corner can shorten both the
// incoming and outgoing swing. A retap must reuse the previous landing.
function chooseLandings(track: Contact[], rate: number) {
  let previous: Landing[] = [
    { x: track[0].x, z: track[0].z, excess: 0, effort: 0 },
  ]
  for (let i = 1; i < track.length; i++) {
    const old = track[i - 1],
      hit = track[i]
    const seconds = (hit.second - hit.start) / rate
    const retap =
      old.heel === hit.heel &&
      old.toe === hit.toe &&
      old.x === hit.x &&
      old.z === hit.z
    const next: Landing[] = []
    for (const { dx, dz } of hit.fixed ? centreOnly : panelLandings) {
      const x = hit.x + dx,
        z = hit.z + dz
      let best: Landing | undefined
      for (const from of previous) {
        if (retap && (from.x !== x || from.z !== z)) continue
        const distance = Math.hypot(x - from.x, z - from.z)
        const travel = speedTimesDuration(
          distance,
          stepHeight(hit, distance, seconds)
        )
        // Compare distances over the available time. This also ranks moves
        // when a hold tail and the next strike have the same timestamp.
        const candidate = {
          x,
          z,
          from,
          excess:
            from.excess + Math.max(0, travel - FOOT_SPEED_LIMIT * seconds) ** 2,
          effort:
            from.effort +
            Math.max(0, travel - COMFORT_SPEED * seconds) ** 2 +
            0.02 * (dx * dx + dz * dz),
        }
        if (!best || better(candidate, best)) best = candidate
      }
      if (best) next.push(best)
    }
    previous = next
  }
  let landing = previous.reduce((a, b) => (better(a, b) ? a : b))
  for (let i = track.length - 1; i > 0; i--) {
    track[i].x = landing.x
    track[i].z = landing.z
    landing = landing.from!
  }
}

export function planFootwork(tracks: Contact[][], rate: number) {
  for (const [side, track] of tracks.entries()) {
    const other = tracks[1 - side]
    let otherIndex = 1,
      support = -Infinity
    for (let i = 1; i < track.length; i++) {
      const hit = track[i],
        old = track[i - 1]
      // A grounded bracket pivot can support the moving foot. Simultaneous
      // landings are jumps or switches and can share a swing window.
      while (
        otherIndex < other.length &&
        other[otherIndex].second < hit.second
      ) {
        const landing = other[otherIndex++]
        if (!landing.pivot) support = landing.second
      }
      const dwell = Math.min(0.035 * rate, (hit.second - old.second) * 0.2)
      hit.start = Math.min(
        hit.second,
        Math.max(
          hit.start,
          old.second + dwell,
          hit.pivot ? -Infinity : Math.max(support, old.holdEnd),
          hit.second - 1.15 * rate
        )
      )
    }
    chooseLandings(track, rate)
    // Work back from each mandatory heel/toe orientation. A preceding tap
    // can already point toward the bracket while it lands on its own panel.
    let bracketYaw = 0
    let remainingTurn = Infinity
    for (let i = track.length - 1; i > 0; i--) {
      const hit = track[i]
      if (hit.toe >= 0) {
        bracketYaw = hit.yaw
        remainingTurn = 0
      } else if (remainingTurn < Math.PI) {
        hit.yaw =
          bracketYaw +
          clamp(turnBetween(bracketYaw, hit.yaw), -remainingTurn, remainingTurn)
      }
      remainingTurn +=
        ((hit.second - hit.start) * FOOT_TURN_LIMIT) / (rate * peakSlope)
    }
    for (let i = 1; i < track.length; i++) {
      const hit = track[i],
        old = track[i - 1]
      const window = (hit.second - hit.start) / rate
      const distance = Math.hypot(hit.x - old.x, hit.z - old.z)
      hit.height = stepHeight(hit, distance, window)
      const travel = speedTimesDuration(distance, hit.height)
      const turn = turnBetween(old.yaw, hit.yaw)
      const duration = Math.min(
        window,
        comfortableSwingSeconds(distance, hit.height, turn, hit.jump)
      )
      hit.start = hit.second - duration * rate
      // A single panel accepts any shoe angle. A bracket must reach both.
      const maxTurn = (duration * FOOT_TURN_LIMIT) / peakSlope
      if (hit.toe < 0) hit.yaw = old.yaw + clamp(turn, -maxTurn, maxTurn)
      hit.overLimit =
        travel > FOOT_SPEED_LIMIT * duration + 1e-8 ||
        (hit.toe >= 0 && Math.abs(turn) > maxTurn + 1e-8)
    }
  }
}
