import type { Chart } from "../../chart/sm/Chart"
import { isHoldNote } from "../../chart/sm/NoteTypes"
import {
  Foot,
  OTHER_PART_OF_FOOT,
  TechCategory,
} from "../../chart/stats/parity/ParityDataTypes"
import type { StageLayout } from "../../chart/stats/parity/StageLayouts"
import { clamp, lerp } from "../../util/Math"

export const PANEL_SPACING = 0.32

interface Contact {
  second: number
  start: number
  x: number
  z: number
  yaw: number
  heel: number
  toe: number
  holdEnd: number
  height: number
}

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
  yaw: number
  cue: string
  jump: boolean
  crossed: boolean
}

export interface DancerPose {
  left: FootPose
  right: FootPose
  yaw: number
  compression: number
  cue: string
  coaching: string
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
    start: -Infinity,
    heel: -1,
    toe: -1,
    x: side * 0.1,
    z: 0,
    yaw: -side * 0.09,
    holdEnd: -Infinity,
    height: 0,
  }
}

function sampleFoot(track: Contact[], second: number): FootPose {
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
  const lead = Math.min(0.11, (next.second - old.second) * 0.2)
  const duration = next.second - next.start
  if (duration <= 0 || second <= next.start - lead) return pose
  const phase = clamp((second - next.start) / duration, 0, 1)
  const blend = smooth(phase)
  const arc = Math.sin(Math.PI * phase)
  if (next.height > 0) {
    pose.unload =
      smooth((second - next.start + lead) / (lead + duration * 0.22)) *
      (1 - smooth((phase - 0.62) / 0.38))
  }
  pose.x = lerp(old.x, next.x, blend)
  pose.z = lerp(old.z, next.z, blend)
  const turn = Math.atan2(
    Math.sin(next.yaw - old.yaw),
    Math.cos(next.yaw - old.yaw)
  )
  pose.yaw += turn * blend
  pose.lift = arc * next.height
  pose.pitch = -Math.sin(2 * Math.PI * phase) * Math.min(0.22, next.height * 2)
  pose.contact = pose.contact && pose.lift < 0.002
  return pose
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
  previousRow: number,
  nextRow: number
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
  old.holdEnd = Math.min(old.holdEnd, second)
  rest.start = handoff
    ? second
    : Math.max(old.second, previousRow, second - 0.2)
  rest.second = handoff
    ? second + Math.min(0.16, (nextRow - second) / 2)
    : second
  rest.height = Math.min(0.08, (rest.second - rest.start) * 0.5)
  track.push(rest)
}

export class DancerMotion {
  private tracks = [[neutral(-1)], [neutral(1)]]
  private stances: Stance[] = [
    { second: -Infinity, yaw: 0, cue: "Ready", jump: false, crossed: false },
  ]

  constructor(chart: Chart, layout: StageLayout) {
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
      const yaw = bodyFacing(
        parity.facingRows[i - 1] ?? 0,
        row.frontFoot,
        previous.yaw
      )
      const steps: string[] = []
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
              previous.second,
              nextTime
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
        const distance = Math.hypot(x - old.x, z - old.z)
        const keepsHold =
          old.holdEnd >= row.second &&
          [heel, toe].some(
            col =>
              (heldTo.get(col) ?? -Infinity) >= row.second &&
              (col === old.heel || col === old.toe)
          )
        let start = Math.max(
          previous.second,
          old.second,
          row.second - Math.min(0.3, 0.18 + distance * 0.32)
        )
        if (!keepsHold)
          start = Math.min(row.second, Math.max(start, old.holdEnd))
        const height = keepsHold
          ? 0
          : Math.min(
              0.135,
              0.065 + distance * 0.13,
              (row.second - start) * 0.56
            )
        track.push({
          second: row.second,
          start,
          x,
          z,
          yaw: footYaw,
          heel,
          toe,
          holdEnd,
          height,
        })
        if (moved) {
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
      this.stances.push({ second: row.second, yaw, jump, cue, crossed })
    }
  }

  sample(second: number): DancerPose {
    const i = indexAt(this.stances, second)
    const old = this.stances[i]
    const next = this.stances[i + 1]
    const left = sampleFoot(this.tracks[0], second)
    const right = sampleFoot(this.tracks[1], second)
    let yaw = old.yaw
    let cue = old.cue
    let preparingJump = false
    let compression = 0
    if (next) {
      const duration = Math.min(0.34, next.second - old.second)
      const phase = duration > 0 ? 1 - (next.second - second) / duration : 0
      yaw = lerp(old.yaw, next.yaw, smooth(phase))
      if (
        phase > 0 &&
        (i === 0 || second - old.second > Math.min(0.1, duration * 0.35))
      )
        cue = next.cue
      if (next.jump) {
        preparingJump = phase > 0
        compression = 0.105 * Math.sin(Math.PI * clamp(phase * 2, 0, 1))
      }
    }
    compression +=
      (old.jump ? 0.085 : 0.022) *
      Math.sin(Math.PI * clamp((second - old.second) / 0.21, 0, 1))
    if (second - old.second > 0.55 && (!next || next.second - second > 0.34)) {
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
    else if (old.jump && second - old.second < 0.21)
      coaching = "Soften the landing"
    else if (left.unload - right.unload > 0.15)
      coaching = "Weight on right foot"
    else if (right.unload - left.unload > 0.15) coaching = "Weight on left foot"
    else if (left.holding && right.holding) coaching = "Keep both feet planted"
    else if (left.holding) coaching = "Keep left foot planted"
    else if (right.holding) coaching = "Keep right foot planted"
    else if (old.crossed) coaching = "Keep hips turned"
    else if (i === 0) coaching = "Face the screen"
    return { left, right, yaw, cue, coaching, compression }
  }
}
