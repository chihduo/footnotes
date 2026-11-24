import type { Chart } from "../../chart/sm/Chart"
import type { ParityComputeData } from "../../chart/stats/parity/ParityWebWorkerTypes"
import {
  Foot,
  OTHER_PART_OF_FOOT,
  TechCategory,
} from "../../chart/stats/parity/ParityDataTypes"
import type { StageLayout } from "../../chart/stats/parity/StageLayouts"
import { clamp, lerp } from "../../util/Math"
import { planArmGestures, sampleArmGesture, type ArmAccent } from "./DancerArms"
import {
  PANEL_SPACING,
  rotatePoint,
  comfortableSwingSeconds,
  getDancerTiming,
  planFootwork,
  swingProgress,
  turnBetween,
  type Contact,
  type DancerTiming,
} from "./DancerFootwork"

export { PANEL_SPACING } from "./DancerFootwork"
export const HIP_SPEED_LIMIT = 1.35
export const BODY_TURN_LIMIT = 4 // radians per real second
const LANDING_SECONDS = 0.21
const WEIGHT_TRANSFER_LEAD = 0.11
const WEIGHT_SETTLE_SECONDS = 0.45
const BALANCE_SAMPLE_SECONDS = 0.075

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
  jump: boolean
  crossed: boolean
}

export interface BodyTurn {
  start: number
  end: number
  angle: number
  fromYaw: number
  toYaw: number
}

export interface DancerChoreography {
  rate: number
  tracks: Contact[][]
  stances: Stance[]
  turn: BodyTurn
}

export interface DancerPose {
  heading: number
  left: FootPose
  right: FootPose
  hips: { x: number; z: number }
  yaw: number
  compression: number
  coaching: string
  paceWarning: string
}

export interface DancerRenderPose extends DancerPose {
  arms: ReturnType<typeof sampleArmGesture>
}

export function chestFacing({ heading, yaw }: DancerPose) {
  return heading + (yaw - heading) * 0.69
}

export function smooth(t: number) {
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

function plantedFoot(old: Contact, second: number): FootPose {
  return {
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
}

export function sampleFoot(
  track: Contact[],
  second: number,
  rate: number
): FootPose {
  const i = indexAt(track, second)
  const old = track[i]
  const next = track[i + 1]
  const pose = plantedFoot(old, second)
  if (!next) return pose

  // Transfer weight before takeoff. A bracket can pivot with a heel or toe
  // still on a held panel, in which case it stays on the floor.
  const lead = Math.min(
    WEIGHT_TRANSFER_LEAD * rate,
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
      times.add(hit.start - WEIGHT_TRANSFER_LEAD * rate)
      times.add((hit.start + hit.second) / 2)
      times.add(hit.second)
      times.add(hit.second + WEIGHT_SETTLE_SECONDS * rate)
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

// Continue the last tempo at a comfortable walking cadence. Very fast beats
// can span several counts, and a slow beat can be subdivided.
function returnCadence(chart: Chart, start: number, rate: number) {
  const beat = Math.ceil(chart.getBeatFromSeconds(start))
  const origin = chart.getSecondsFromBeat(beat)
  const beatLength = chart.getSecondsFromBeat(beat + 1) - origin
  const walkingBeat = 0.46 * rate
  if (!Number.isFinite(beatLength) || beatLength <= 0)
    return { origin: start, period: walkingBeat }
  const subdivision = 2 ** Math.round(Math.log2(walkingBeat / beatLength))
  return { origin, period: beatLength * subdivision }
}

// Plan on separate tracks so returning home cannot change a chart landing.
// Split long walks across a double pad. In a crossover the feet pass on
// opposite sides, preserving the depth order of the final stance.
function planReturnSteps(
  tracks: Contact[][],
  chart: Chart,
  start: number,
  rate: number
) {
  const feet = tracks.map(track => track[track.length - 1])
  const home = [neutral(-1), neutral(1)]
  const distance = feet.map((foot, i) =>
    Math.hypot(home[i].x - foot.x, home[i].z - foot.z)
  )
  const crossed = feet[0].x > feet[1].x
  const shoesClose =
    Math.hypot(feet[0].x - feet[1].x, feet[0].z - feet[1].z) < 0.18
  const strides = Math.max(
    crossed ? 2 : 1,
    Math.ceil(Math.max(...distance) / 0.4)
  )
  const front = feet[0].z <= feet[1].z ? 0 : 1
  let first = feet[0].x + feet[1].x > 0 ? 0 : 1
  // When uncrossing, lead with the foot that can move away in depth.
  if (crossed) first = feet[0].z + feet[1].z < 0 ? 1 - front : front
  const returning = feet.map(foot => [foot])
  const { origin, period } = returnCadence(chart, start, rate)
  let lastLanding = start
  for (let stride = 1; stride <= strides; stride++) {
    const t = stride / strides
    for (const side of [first, 1 - first]) {
      const from = feet[side]
      const end = home[side]
      if (
        distance[side] < 1e-6 &&
        Math.abs(turnBetween(from.yaw, end.yaw)) < 1e-6 &&
        from.heel < 0
      )
        continue
      const next = { ...end }
      if (stride < strides) {
        let across = t
        if (crossed)
          across = shoesClose
            ? (stride - 1) / (strides - 1)
            : Math.sin((Math.PI * t) / 2)
        next.x = lerp(from.x, end.x, across)
        next.z = lerp(from.z, end.z, t)
        if (crossed)
          next.z += (side === front ? -0.23 : 0.23) * Math.sin(Math.PI * t)
        next.yaw = from.yaw + turnBetween(from.yaw, end.yaw) * t
      }
      const steps = returning[side]
      const old = steps[steps.length - 1]
      const travel = Math.hypot(next.x - old.x, next.z - old.z)
      const swing = comfortableSwingSeconds(
        travel,
        0.1,
        turnBetween(old.yaw, next.yaw)
      )
      // Leave time for double support and for the hips to shift before lift-off.
      next.start = lastLanding + 0.19 * rate
      const earliest = next.start + swing * rate
      next.second = origin + Math.ceil((earliest - origin) / period) * period
      steps.push(next)
      lastLanding = next.second
    }
  }
  planFootwork(returning, rate)
  for (const [side, steps] of returning.entries())
    tracks[side].push(...steps.slice(1))
  return lastLanding
}

// The footing solver and the renderer use the same timed contacts.
export class DancerStepPlan {
  readonly tracks = [[neutral(-1)], [neutral(1)]]
  protected readonly rate: number
  readonly stances: Stance[] = [
    {
      second: -Infinity,
      beat: -Infinity,
      turnStart: -Infinity,
      yaw: 0,
      jump: false,
      crossed: false,
    },
  ]

  readonly turn?: BodyTurn
  protected returnStart = Infinity
  protected unwindStart = Infinity
  restTime = Infinity
  private balance?: BalancePoint[]
  private warnings?: { second: number; beat: number; label: string }[]
  private readonly layout: StageLayout

  constructor(
    parity:
      | Pick<
          ParityComputeData,
          "states" | "techRows" | "facingRows" | "crossingPlan" | "choreography"
        >
      | undefined,
    layout: StageLayout,
    { rate, holds }: DancerTiming
  ) {
    this.rate = Number.isFinite(rate) && rate > 0 ? rate : 1
    this.layout = layout
    const prepared = parity?.choreography
    if (prepared && prepared.rate === this.rate) {
      this.tracks = prepared.tracks.map(track => track.slice())
      this.stances = prepared.stances.slice()
      this.turn = prepared.turn
      return
    }
    if (!parity || parity.states.length <= 2) return

    const flexiblePivot = parity.crossingPlan === "uncrossed"
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
      const arrivals: Contact[] = []
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
        if (!moved && heel === old.heel && toe === old.toe) continue
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
        const fixedHold = keepsHold && !flexiblePivot
        if (fixedHold) old.fixed = true
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
          // A bracket has a fixed midpoint. Its single-panel entry or exit
          // can use an inside corner while the planted shoe pivots.
          fixed: !!b || sharesPanel || fixedHold,
          pivot: keepsHold,
          jump: false,
          overLimit: false,
        }
        track.push(arrival)
        if (moved) arrivals.push(arrival)
      }
      const kinds = parity.techRows[i - 1]
      const crossed = kinds?.has(TechCategory.Crossovers) ?? false
      const jump = arrivals.length === 2 && !kinds?.has(TechCategory.Holdswitch)
      if (jump) for (const foot of arrivals) foot.jump = true
      this.stances.push({
        second: row.second,
        beat: row.beat,
        turnStart: row.second - turnWindow,
        yaw,
        jump,
        crossed,
      })
    }
    planFootwork(this.tracks, this.rate)
  }
  // An intro turn must finish before either shoe unloads or the body prepares
  // for the first chart row. Both times come from the chosen footing.
  get firstPreparation() {
    return Math.min(
      this.stances[1]?.turnStart ?? Infinity,
      ...this.tracks.map(
        track =>
          (track[1]?.start ?? Infinity) - WEIGHT_TRANSFER_LEAD * this.rate
      )
    )
  }

  get fastSteps() {
    if (this.warnings) return this.warnings
    const warnings: { second: number; beat: number; label: string }[] = []
    const flagged = new Map<number, string[]>()
    for (const [side, track] of this.tracks.entries())
      for (const step of track) {
        if (!step.overLimit || !Number.isFinite(step.beat)) continue
        const feet = flagged.get(step.beat) ?? []
        const target =
          step.heel < 0
            ? "release"
            : panelLabel(this.layout, step.heel) +
              (step.toe >= 0 ? panelLabel(this.layout, step.toe) : "")
        feet.push((side === 0 ? "Left " : "Right ") + target)
        flagged.set(step.beat, feet)
      }
    for (const { beat, second } of this.stances) {
      const feet = flagged.get(beat)
      if (feet)
        warnings.push({
          beat,
          second,
          label:
            "Over speed limit · " +
            feet.join(" + ") +
            " · beat " +
            Number(beat.toFixed(3)),
        })
    }

    this.warnings = warnings
    return warnings
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
    this.balance ??= planBalance(this.tracks, this.rate)
    const before = balanceAt(
      this.balance,
      second - BALANCE_SAMPLE_SECONDS * this.rate
    )
    const at = balanceAt(this.balance, second)
    const after = balanceAt(
      this.balance,
      second + BALANCE_SAMPLE_SECONDS * this.rate
    )
    const hips = {
      x: (before.x + 2 * at.x + after.x) / 4,
      z: (before.z + 2 * at.z + after.z) / 4,
    }
    let yaw = old.yaw
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
      if (next.jump) {
        preparingJump = phase > 0
        const depth = Math.min(
          0.105,
          (0.9 * duration) / (2 * Math.PI * this.rate)
        )
        compression = depth * Math.sin(Math.PI * clamp(phase * 2, 0, 1)) ** 2
      }
    }
    let heading = 0
    if (this.turn) {
      const turn = this.turn
      const progress = smooth((second - turn.start) / (turn.end - turn.start))
      heading = turn.angle * progress
      if (second >= turn.start && second <= turn.end)
        yaw = lerp(turn.fromYaw, turn.toYaw, progress)
      if (second >= this.unwindStart) {
        const finish = this.stances[this.stances.length - 1].second
        heading =
          second >= finish
            ? 0
            : heading *
              (1 -
                smooth(
                  (second - this.unwindStart) / (finish - this.unwindStart)
                ))
      }
    }
    const landing = Math.min(
      LANDING_SECONDS * this.rate,
      (next?.second ?? Infinity) - old.second
    )
    if (landing > 0 && second < old.second + landing)
      compression +=
        Math.min(
          old.jump ? 0.085 : 0.022,
          (0.9 * landing) / (Math.PI * this.rate)
        ) *
        Math.sin(Math.PI * clamp((second - old.second) / landing, 0, 1)) ** 2
    let coaching = ""
    if (this.turn && second >= this.turn.start && second < this.turn.end)
      coaching = this.turn.angle > 0 ? "Turn left" : "Turn right"
    else if (preparingJump)
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
    else if (second >= this.restTime || i === 0) coaching = "Face the screen"
    else if (second >= this.returnStart) coaching = "Step back to center"
    else if (old.crossed) coaching = "Keep hips turned"
    else if (Math.abs(heading) > 0.01)
      coaching =
        Math.abs(heading) > 2
          ? "Face away from the screen"
          : heading > 0
            ? "Face left"
            : "Face right"
    return {
      left,
      right,
      hips,
      yaw,
      heading,
      coaching,
      compression,
      paceWarning: this.warningAt(second),
    }
  }
}

// Two alternating steps per quarter-turn move between neutral stances. The
// same movement prepares the dancer during the intro and unwinds it at home.
export function turnAtCenter(
  start: number,
  from: number,
  to: number,
  rate: number
) {
  const quarters = Math.round(Math.abs(to - from) / (Math.PI / 2))
  const tracks = [-1, 1].map(side => {
    const foot = neutral(side)
    return [
      {
        ...foot,
        ...rotatePoint(foot, from),
        yaw: foot.yaw + from,
        second: start,
      },
    ]
  })
  for (let q = 1; q <= quarters; q++) {
    const angle = lerp(from, to, q / quarters)
    for (const [i, track] of tracks.entries()) {
      const foot = neutral(i === 0 ? -1 : 1)
      const takeoff = start + (q - 1 + i / 2) * rate
      track.push({
        ...foot,
        ...rotatePoint(foot, angle),
        yaw: foot.yaw + angle,
        start: takeoff,
        second: takeoff + 0.5 * rate,
      })
    }
  }
  planFootwork(tracks, rate)
  return tracks
}

export class DancerMotion extends DancerStepPlan {
  private armKeys?: ReturnType<typeof planArmGestures>

  constructor(chart: Chart, layout: StageLayout, rate = 1, songEnd = 0) {
    super(chart.stats.parity, layout, getDancerTiming(chart, rate))
    if (this.stances.length === 1) {
      this.restTime = 0
      return
    }
    const last = this.stances[this.stances.length - 1]
    this.returnStart = Math.max(
      songEnd,
      last.second + LANDING_SECONDS * this.rate
    )
    for (const track of this.tracks) {
      const foot = track[track.length - 1]
      this.returnStart = Math.max(this.returnStart, foot.second, foot.holdEnd)
    }
    const heading = this.turn?.angle ?? 0
    // Walk home in the dancer's current frame, then step around to face the screen.
    const returning = this.tracks.map(track => {
      const foot = track[track.length - 1]
      return [
        { ...foot, ...rotatePoint(foot, -heading), yaw: foot.yaw - heading },
      ]
    })
    let landing = planReturnSteps(returning, chart, this.returnStart, this.rate)
    for (const [i, track] of returning.entries()) {
      for (const foot of track.slice(1))
        this.tracks[i].push({
          ...foot,
          ...rotatePoint(foot, heading),
          yaw: foot.yaw + heading,
        })
    }
    const facingHome = Math.max(
      landing,
      this.returnStart +
        (1.5 * Math.abs(last.yaw - heading) * this.rate) / BODY_TURN_LIMIT
    )
    this.stances.push({
      second: facingHome,
      beat: Infinity,
      turnStart: this.returnStart,
      yaw: heading,
      jump: false,
      crossed: false,
    })
    if (heading) {
      this.unwindStart = facingHome + LANDING_SECONDS * this.rate
      const unwind = turnAtCenter(this.unwindStart, heading, 0, this.rate)
      for (const [i, track] of unwind.entries())
        this.tracks[i].push(...track.slice(1))
      landing = unwind[1][unwind[1].length - 1].second
      this.stances.push({
        second: landing,
        beat: Infinity,
        turnStart: this.unwindStart,
        yaw: 0,
        jump: false,
        crossed: false,
      })
    }
    this.restTime = Math.max(
      facingHome + LANDING_SECONDS * this.rate,
      landing + (WEIGHT_SETTLE_SECONDS + BALANCE_SAMPLE_SECONDS) * this.rate
    )
  }

  private armMotion(start: number, end: number) {
    const center = (start + end) / 2
    const seconds = clamp((end - start) / this.rate, 0.1, 0.32)
    const interval = (seconds * this.rate) / 4
    // Measure the path through the movement. A jump can land at its starting
    // position and a turn can move the shoulders with almost no hip travel.
    const poses = Array.from({ length: 5 }, (_, i) =>
      super.sample(center + (i - 2) * interval)
    )
    let bodyTravel = 0,
      shoeTravel = 0,
      turnTravel = 0
    for (let i = 1; i < poses.length; i++) {
      const a = poses[i - 1],
        b = poses[i]
      const angle = Math.abs(turnBetween(chestFacing(a), chestFacing(b)))
      const rise =
        Math.min(b.left.lift, b.right.lift) -
        b.compression -
        (Math.min(a.left.lift, a.right.lift) - a.compression)
      bodyTravel += Math.hypot(
        b.hips.x - a.hips.x,
        b.hips.z - a.hips.z,
        rise,
        0.24 * angle
      )
      shoeTravel += Math.hypot(
        b.left.x - a.left.x,
        b.left.z - a.left.z,
        b.left.lift - a.left.lift,
        b.right.x - a.right.x,
        b.right.z - a.right.z,
        b.right.lift - a.right.lift
      )
      turnTravel += angle
    }
    // Body speed in metres per real second sets the range. Brisk footwork
    // and rotation can use more of it, while a slow torso keeps the hands low.
    const bodySpeed = bodyTravel / seconds
    const shoeSpeed = shoeTravel / seconds
    const turnSpeed = turnTravel / seconds
    const moving = smooth((bodySpeed - 0.14) / (0.95 - 0.14))
    const effort = smooth(
      Math.max(shoeSpeed / 1.8, turnSpeed / BODY_TURN_LIMIT)
    )
    return { pose: poses[2], intensity: moving * (0.55 + 0.45 * effort) }
  }

  private planArms() {
    const rate = this.rate
    const cues: ArmAccent[] = []
    const turns: Pick<BodyTurn, "start" | "end" | "angle">[] = this.turn
      ? [this.turn]
      : []
    if (this.turn && Number.isFinite(this.unwindStart)) {
      turns.push({
        start: this.unwindStart,
        end: this.stances[this.stances.length - 1].second,
        angle: -this.turn.angle,
      })
    }
    for (const turn of turns) {
      const duration = turn.end - turn.start
      const strength = Math.min(
        1,
        (Math.abs(turn.angle) * rate) / (1.5 * duration)
      )
      const tuck = turn.start + Math.min(0.18 * rate, duration * 0.22)
      const open = turn.end - Math.min(0.055 * rate, duration * 0.12)
      // A short turn has one locked winding pose. In a longer turn, allow
      // the arms to lower or open again as the shoulders and feet change pace.
      const sections = Math.max(1, Math.floor((open - tuck) / (0.8 * rate)))
      for (let i = 0; i < sections; i++) {
        const second = lerp(tuck, open, i / sections)
        const holdUntil = lerp(tuck, open, (i + 1) / sections)
        const { intensity } = this.armMotion(second, holdUntil)
        cues.push({
          second,
          holdUntil,
          priority: 3,
          drive: { intensity, lateral: 0, stride: 0, brace: 0, tuck: strength },
        })
      }
      const brakeWindow = Math.min(duration / 2, 0.7 * rate)
      const { intensity } = this.armMotion(turn.end - brakeWindow, turn.end)
      cues.push({
        second: open,
        holdUntil: turn.end + 0.11 * rate,
        priority: 3,
        drive: { intensity, lateral: 0, stride: 0, brace: strength, tuck: 0 },
      })
    }

    for (const [i, track] of this.tracks.entries()) {
      const other = this.tracks[1 - i]
      for (let j = 1; j < track.length; j++) {
        const hit = track[j],
          old = track[j - 1]
        const duration = hit.second - hit.start
        if (hit.height <= 0 || duration <= 0) continue
        const partner = hit.jump ? other[indexAt(other, hit.second)] : undefined
        const jump =
          partner?.second === hit.second &&
          partner.jump &&
          partner.height > 0 &&
          partner.start < partner.second
        const second = jump
          ? hit.second
          : hit.start + Math.min(0.035 * rate, duration / 2)
        if (turns.some(turn => second >= turn.start && second <= turn.end))
          continue
        if (jump) {
          if (i === 0) {
            const brace = Math.min(1, hit.height / 0.08, partner.height / 0.08)
            const { intensity } = this.armMotion(
              Math.max(hit.start, partner.start),
              hit.second
            )
            cues.push({
              second,
              holdUntil: second + 0.11 * rate,
              priority: 2,
              drive: { intensity, lateral: 0, stride: 0, brace, tuck: 0 },
            })
          }
          continue
        }
        const dx = (hit.x - old.x) / PANEL_SPACING
        const dz = (hit.z - old.z) / PANEL_SPACING
        const distance = Math.hypot(dx, dz)
        if (distance < 0.18) continue // a retap or a small in-panel adjustment
        // Capture the body frame and the support lever once. A changing hip
        // position during the hold must not keep steering the wrist.
        const { pose, intensity } = this.armMotion(hit.start, hit.second)
        const yaw = chestFacing(pose),
          cos = Math.cos(yaw),
          sin = Math.sin(yaw)
        const support = i === 0 ? pose.right : pose.left
        const hipOffset =
          (pose.hips.x - support.x) * cos - (pose.hips.z - support.z) * sin
        const lean =
          clamp(hipOffset / PANEL_SPACING, -1, 1) * (1 - support.unload)
        const travel = Math.min(1, distance)
        const lateral = Math.tanh(
          1.2 * (dx * cos - dz * sin + 0.45 * travel * lean)
        )
        const stride = Math.tanh((i === 0 ? 1 : -1) * (dx * sin + dz * cos))
        cues.push({
          second,
          holdUntil: hit.second + 0.065 * rate,
          priority: (intensity * distance) / (1 + distance),
          drive: { intensity, lateral, stride, brace: 0.1 * travel, tuck: 0 },
        })
      }
    }
    return planArmGestures(cues, rate)
  }

  override sample(second: number): DancerRenderPose {
    this.armKeys ??= this.planArms()
    const i = indexAt(this.armKeys, second)
    return {
      ...super.sample(second),
      arms: sampleArmGesture(this.armKeys[i], this.armKeys[i + 1], second),
    }
  }
}
