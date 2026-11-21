import type { Chart } from "../../chart/sm/Chart"
import { isHoldNote } from "../../chart/sm/NoteTypes"
import {
  Foot,
  OTHER_PART_OF_FOOT,
  TechCategory,
} from "../../chart/stats/parity/ParityDataTypes"
import type { StageLayout } from "../../chart/stats/parity/StageLayouts"
import { clamp, lerp } from "../../util/Math"
import {
  PANEL_SPACING,
  planFootwork,
  swingProgress,
  turnBetween,
  type Contact,
} from "./DancerFootwork"

export { PANEL_SPACING } from "./DancerFootwork"
const HIP_SPEED_LIMIT = 1.35
const BODY_TURN_LIMIT = 4 // radians per real second

export interface FootPose {
  x: number
  z: number
  lift: number
  yaw: number
  pitch: number
  unload: number
  heel: number
  toe: number
  contact: boolean
  holding: boolean
}

interface Stance {
  second: number
  beat: number
  turnStart: number
  yaw: number
  cue: string
  jump: boolean
  crossed: boolean
}

export interface DancerPose {
  left: FootPose
  right: FootPose
  hips: { x: number; z: number }
  yaw: number
  compression: number
  cue: string
  coaching: string
  paceWarning: string
}

function smooth(t: number) {
  const u = clamp(t, 0, 1)
  return u * u * (3 - 2 * u)
}

// The first item is the neutral stance. Looking up song time makes a seek or
// loop produce exactly the same pose as uninterrupted playback.
function indexAt<T extends { second: number }>(items: T[], second: number) {
  let low = 0
  let high = items.length
  while (low + 1 < high) {
    const mid = (low + high) >>> 1
    if (items[mid].second <= second) low = mid
    else high = mid
  }
  return low
}

function neutral(side: number): Contact {
  return {
    second: -Infinity,
    beat: -Infinity,
    start: -Infinity,
    heel: -1,
    toe: -1,
    x: side * 0.1,
    z: 0,
    yaw: -side * 0.09,
    holdEnd: -Infinity,
    height: 0,
    fixed: true,
    pivot: false,
    jump: false,
    overLimit: false,
  }
}

function sampleFoot(track: Contact[], second: number, rate: number): FootPose {
  const i = indexAt(track, second)
  const old = track[i]
  const next = track[i + 1]
  const pose = {
    x: old.x,
    z: old.z,
    yaw: old.yaw,
    heel: old.heel,
    toe: old.toe,
    lift: 0,
    pitch: 0,
    unload: 0,
    contact: old.heel >= 0,
    holding: old.holdEnd > second,
  }
  if (!next) return pose

  // Transfer weight before takeoff. A bracket can pivot with a heel or toe
  // still on a held panel, in which case it stays on the floor.
  const lead = Math.min(
    0.11 * rate,
    (next.second - old.second) * 0.2,
    next.start - old.second
  )
  const duration = next.second - next.start
  if (duration <= 0 || second <= next.start - lead) return pose
  const phase = clamp((second - next.start) / duration, 0, 1)
  const blend = swingProgress(phase)
  if (next.height > 0) {
    pose.unload =
      smooth((second - next.start + lead) / (lead + duration * 0.22)) *
      (1 - smooth((phase - 0.62) / 0.38))
  }
  pose.x += (next.x - old.x) * blend
  pose.z += (next.z - old.z) * blend
  const turn = turnBetween(old.yaw, next.yaw)
  pose.yaw += turn * blend
  pose.lift = Math.sin(Math.PI * phase) ** 2 * next.height
  pose.pitch = -Math.sin(2 * Math.PI * phase) * Math.min(0.22, next.height * 2)
  pose.contact = pose.contact && pose.lift < 0.002
  return pose
}

interface BalancePoint {
  second: number
  x: number
  z: number
}

function planBalance(tracks: Contact[][], rate: number) {
  const times = new Set<number>()
  for (const track of tracks)
    for (const hit of track.slice(1)) {
      times.add(hit.start - 0.11 * rate)
      times.add((hit.start + hit.second) / 2)
      times.add(hit.second)
      times.add(hit.second + 0.45 * rate)
    }
  const points: BalancePoint[] = [{ second: -Infinity, x: 0, z: 0 }]
  for (const second of [...times].sort((a, b) => a - b)) {
    const left = sampleFoot(tracks[0], second, rate)
    const right = sampleFoot(tracks[1], second, rate)
    const weight = 0.5 + 0.2 * (left.unload - right.unload)
    const old = points[points.length - 1]
    const dx = lerp(left.x, right.x, weight) - old.x
    const dz = lerp(left.z, right.z, weight) - old.z
    const distance = Math.hypot(dx, dz)
    const reach = (HIP_SPEED_LIMIT * (second - old.second)) / rate
    const fraction = distance > reach ? reach / distance : 1
    points.push({ second, x: old.x + dx * fraction, z: old.z + dz * fraction })
  }
  return points
}

function balanceAt(points: BalancePoint[], second: number) {
  const i = indexAt(points, second),
    old = points[i],
    next = points[i + 1]
  if (!next || i === 0) return old
  const t = (second - old.second) / (next.second - old.second)
  return { x: lerp(old.x, next.x, t), z: lerp(old.z, next.z, t) }
}

function panelLabel(layout: StageLayout, column: number) {
  const arrows = layout.name.startsWith("pump")
    ? ["↙", "↖", "●", "↗", "↘"]
    : ["←", "↓", "↑", "→"]
  const pad = layout.name.endsWith("double")
    ? Math.floor(column / arrows.length) + 1
    : ""
  return pad + arrows[column % arrows.length]
}

function bodyFacing(angle: number, front: Foot | null, previous: number) {
  // At a fully crossed stance the same angle can be written as +π or -π.
  if (Math.abs(angle) > Math.PI - 0.01) {
    if (front === Foot.LEFT_HEEL) angle = Math.PI
    else if (front === Foot.RIGHT_HEEL) angle = -Math.PI
    else return previous
  }
  return clamp(-angle * 0.74, -1.65, 1.65)
}

// A footswitch can leave both heel columns pointing at the same panel in the
// parity state. Only one foot actually pressed it. Give the outgoing foot a
// resting spot on its pad, and hand off a sustained note before lifting it.
function leavePanel(
  track: Contact[],
  side: number,
  layout: StageLayout,
  second: number,
  beat: number,
  nextRow: number,
  rate: number
) {
  const old = track[track.length - 1]
  const sign = side === 0 ? -1 : 1
  const rest = neutral(sign)
  const padCenter = layout.name.endsWith("double")
    ? (old.x < 0 ? -1.5 : 1.5) * PANEL_SPACING
    : 0
  rest.x += padCenter
  if (Math.hypot(rest.x - old.x, rest.z - old.z) < 0.16)
    rest.x = padCenter + sign * 0.2
  const handoff = old.holdEnd >= second
  old.fixed = true
  old.holdEnd = Math.min(old.holdEnd, second)
  rest.beat = beat
  rest.start = handoff ? second : -Infinity
  rest.second = handoff
    ? second + Math.min(0.16 * rate, (nextRow - second) / 2)
    : second
  track.push(rest)
}

export class DancerMotion {
  private tracks = [[neutral(-1)], [neutral(1)]]
  private balance: BalancePoint[] = [{ second: -Infinity, x: 0, z: 0 }]
  readonly fastSteps: { second: number; beat: number; label: string }[] = []
  private stances: Stance[] = [
    {
      second: -Infinity,
      beat: -Infinity,
      turnStart: -Infinity,
      yaw: 0,
      cue: "Ready",
      jump: false,
      crossed: false,
    },
  ]

  constructor(
    chart: Chart,
    layout: StageLayout,
    private rate = 1
  ) {
    if (!Number.isFinite(rate) || rate <= 0) this.rate = 1
    const parity = chart.stats.parity
    if (!parity) return

    // A hold tail may occur between parity rows. Use the timed tail in the
    // simfile so a swing can never start in the middle of a sustained note.
    const holds = new Map<number, Map<number, number>>()
    for (const note of chart.getNotedata()) {
      if (!isHoldNote(note) || note.fake || note.warped) continue
      let row = holds.get(note.beat)
      if (!row) {
        row = new Map()
        holds.set(note.beat, row)
      }
      row.set(note.col, chart.getSecondsFromBeat(note.beat + note.hold))
    }
    const heldTo = new Map<number, number>()
    // The worker returns a start node and an end node around the playable rows.
    for (let i = 1; i < parity.states.length - 1; i++) {
      const row = parity.states[i]
      const holdHeads = holds.get(row.beat)
      for (const [col, end] of holdHeads ?? []) heldTo.set(col, end)
      const previous = this.stances[this.stances.length - 1]
      const facing = bodyFacing(
        parity.facingRows[i - 1] ?? 0,
        row.frontFoot,
        previous.yaw
      )
      const turn = facing - previous.yaw
      const turnWindow = Math.min(
        row.second - previous.second,
        Math.max(0.34, (1.5 * Math.abs(turn)) / BODY_TURN_LIMIT) * this.rate
      )
      const maxTurn = (BODY_TURN_LIMIT * turnWindow) / (1.5 * this.rate)
      const yaw = previous.yaw + clamp(turn, -maxTurn, maxTurn)
      const steps: string[] = []
      const arrivals: Contact[] = []
      let bracket = false
      let repeated = false
      let support = ""
      for (const [side, heelPart] of [
        Foot.LEFT_HEEL,
        Foot.RIGHT_HEEL,
      ].entries()) {
        const toePart = OTHER_PART_OF_FOOT[heelPart]
        const heel = row.footColumns[heelPart] ?? -1
        const toe = row.footColumns[toePart] ?? -1
        const a = layout.layout[heel]
        if (!a) continue
        const b = layout.layout[toe]
        const track = this.tracks[side]
        const old = track[track.length - 1]
        const name = side === 0 ? "Left" : "Right"
        const holdEnd = Math.max(
          heldTo.get(heel) ?? -Infinity,
          heldTo.get(toe) ?? -Infinity
        )
        const moved = row.movedFeet.has(heelPart) || row.movedFeet.has(toePart)
        if (
          !moved &&
          !row.holdFeet.has(heelPart) &&
          !row.holdFeet.has(toePart)
        ) {
          if (old.heel < 0) continue
          if (
            [old.heel, old.toe].some(
              col =>
                row.action[col] > Foot.NONE &&
                row.action[col] !== heelPart &&
                row.action[col] !== toePart
            )
          ) {
            const nextTime =
              i + 1 < parity.states.length - 1
                ? parity.states[i + 1].second
                : Infinity
            leavePanel(
              track,
              side,
              layout,
              row.second,
              row.beat,
              nextTime,
              this.rate
            )
            continue
          }
        }
        if (!moved && heel === old.heel && toe === old.toe) {
          if (holdEnd > row.second) support = name.toLowerCase()
          continue
        }
        const otherHeel = side === 0 ? Foot.RIGHT_HEEL : Foot.LEFT_HEEL
        const sharesPanel = moved && !b && row.footColumns[otherHeel] === heel
        // Use the free edge of the panel during a same-panel handoff.
        const edge = sharesPanel ? (side === 0 ? -0.114 : 0.114) : 0
        const x = (b ? (a.x + b.x) / 2 : a.x) * PANEL_SPACING + edge
        const z = -(b ? (a.y + b.y) / 2 : a.y) * PANEL_SPACING
        const footYaw = b
          ? Math.atan2(a.x - b.x, b.y - a.y)
          : yaw * 0.78 + (side === 0 ? 0.09 : -0.09)
        const keepsHold =
          old.holdEnd >= row.second &&
          [heel, toe].some(
            col =>
              (heldTo.get(col) ?? -Infinity) >= row.second &&
              (col === old.heel || col === old.toe)
          )
        if (keepsHold) old.fixed = true
        const arrival = {
          second: row.second,
          beat: row.beat,
          start: -Infinity,
          x,
          z,
          yaw: footYaw,
          heel,
          toe,
          holdEnd,
          height: 0,
          fixed: !!b || sharesPanel || keepsHold,
          pivot: keepsHold,
          jump: false,
          overLimit: false,
        }
        track.push(arrival)
        if (moved) {
          arrivals.push(arrival)
          steps.push(
            name +
              " " +
              panelLabel(layout, heel) +
              (b ? panelLabel(layout, toe) : "")
          )
          repeated = old.heel === heel && old.toe === toe
          bracket ||= !!b
        }
      }
      const kinds = parity.techRows[i - 1]
      const crossed = kinds?.has(TechCategory.Crossovers) ?? false
      const jump = steps.length === 2 && !kinds?.has(TechCategory.Holdswitch)
      if (jump) for (const foot of arrivals) foot.jump = true
      let cue = steps.join(" + ") || "Stay planted"
      if (kinds?.has(TechCategory.Holdswitch)) cue = "Switch hold · " + cue
      else if (jump && bracket) cue = "Bracket jump · " + cue
      else if (jump && crossed) cue = "Cross jump · " + cue
      else if (jump) cue = "Jump · " + cue
      else if (bracket) cue = "Bracket · " + cue
      else if (crossed && !previous.crossed) cue = "Cross · " + cue
      else if (!crossed && previous.crossed) cue = "Unwind · " + cue
      else if (
        kinds?.has(TechCategory.Footswitches) ||
        kinds?.has(TechCategory.Sideswitches)
      )
        cue = "Switch · " + cue
      else if (support) cue = "Hold " + support + " · " + cue
      else if (holdHeads?.size) cue = "Hold · " + cue
      else if (repeated) cue = "Retap · " + cue
      this.stances.push({
        second: row.second,
        beat: row.beat,
        turnStart: row.second - turnWindow,
        yaw,
        jump,
        cue,
        crossed,
      })
    }
    planFootwork(this.tracks, this.rate)
    this.balance = planBalance(this.tracks, this.rate)
    const flagged = new Map<number, string[]>()
    for (const [side, track] of this.tracks.entries())
      for (const step of track) {
        if (!step.overLimit) continue
        const feet = flagged.get(step.beat) ?? []
        const target =
          step.heel < 0
            ? "release"
            : panelLabel(layout, step.heel) +
              (step.toe >= 0 ? panelLabel(layout, step.toe) : "")
        feet.push((side === 0 ? "Left " : "Right ") + target)
        flagged.set(step.beat, feet)
      }
    for (const { beat, second } of this.stances) {
      const feet = flagged.get(beat)
      if (feet)
        this.fastSteps.push({
          beat,
          second,
          label:
            "Over speed limit · " +
            feet.join(" + ") +
            " · beat " +
            Number(beat.toFixed(3)),
        })
    }
  }

  private warningAt(second: number) {
    const i = indexAt(this.fastSteps, second),
      last = this.fastSteps[i]
    if (!last) return ""
    if (last.second <= second && second - last.second <= 0.3 * this.rate)
      return last.label
    const next = last.second > second ? last : this.fastSteps[i + 1]
    return next && next.second - second <= 0.35 * this.rate ? next.label : ""
  }

  sample(second: number): DancerPose {
    const i = indexAt(this.stances, second)
    const old = this.stances[i]
    const next = this.stances[i + 1]
    const left = sampleFoot(this.tracks[0], second, this.rate)
    const right = sampleFoot(this.tracks[1], second, this.rate)
    // Average nearby points on the speed-limited weight-transfer path. This
    // rounds the change of direction and anticipates the next support foot.
    const before = balanceAt(this.balance, second - 0.075 * this.rate)
    const at = balanceAt(this.balance, second)
    const after = balanceAt(this.balance, second + 0.075 * this.rate)
    const hips = {
      x: (before.x + 2 * at.x + after.x) / 4,
      z: (before.z + 2 * at.z + after.z) / 4,
    }
    let yaw = old.yaw
    let cue = old.cue
    let preparingJump = false
    let compression = 0
    if (next) {
      const duration = Math.min(0.34 * this.rate, next.second - old.second)
      const phase = duration > 0 ? 1 - (next.second - second) / duration : 0
      const turnDuration = next.second - next.turnStart
      if (turnDuration > 0)
        yaw = lerp(
          old.yaw,
          next.yaw,
          smooth((second - next.turnStart) / turnDuration)
        )
      if (
        phase > 0 &&
        (i === 0 ||
          second - old.second > Math.min(0.1 * this.rate, duration * 0.35))
      )
        cue = next.cue
      if (next.jump) {
        preparingJump = phase > 0
        const depth = Math.min(
          0.105,
          (0.9 * duration) / (2 * Math.PI * this.rate)
        )
        compression = depth * Math.sin(Math.PI * clamp(phase * 2, 0, 1)) ** 2
      }
    }
    const landing = Math.min(
      0.21 * this.rate,
      (next?.second ?? Infinity) - old.second
    )
    if (landing > 0)
      compression +=
        Math.min(
          old.jump ? 0.085 : 0.022,
          (0.9 * landing) / (Math.PI * this.rate)
        ) *
        Math.sin(Math.PI * clamp((second - old.second) / landing, 0, 1)) ** 2
    if (
      second - old.second > 0.55 * this.rate &&
      (!next || next.second - second > 0.34 * this.rate)
    ) {
      if (left.holding && right.holding) cue = "Hold both feet"
      else if (left.holding) cue = "Hold left"
      else if (right.holding) cue = "Hold right"
      else cue = next || i === 0 ? "Ready" : "Steps complete"
    }
    let coaching = ""
    if (preparingJump)
      coaching =
        Math.min(left.lift, right.lift) > 0.02
          ? "Bring both feet down together"
          : "Bend both knees to push off"
    else if (old.jump && second - old.second < landing)
      coaching = "Soften the landing"
    else if (left.unload - right.unload > 0.15)
      coaching = "Weight on right foot"
    else if (right.unload - left.unload > 0.15) coaching = "Weight on left foot"
    else if (left.holding && right.holding) coaching = "Keep both feet planted"
    else if (left.holding) coaching = "Keep left foot planted"
    else if (right.holding) coaching = "Keep right foot planted"
    else if (old.crossed) coaching = "Keep hips turned"
    else if (i === 0) coaching = "Face the screen"
    return {
      left,
      right,
      hips,
      yaw,
      cue,
      coaching,
      compression,
      paceWarning: this.warningAt(second),
    }
  }
}
