import { lerp } from "../../util/Math"

// Distances are metres and times are real seconds.
const UPPER_ARM_LENGTH = 0.239
export const FOREARM_LENGTH = 0.203
const HAND_REACH = 0.17 // includes the fingertips beyond the wrist
const BRAKE_DISTANCE = 0.01
const ATTACK_SECONDS = 0.115
const HOLD_SECONDS = 0.085
const RETURN_SECONDS = 0.15
const radiansPerDegree = Math.PI / 180

interface ArmDrive {
  intensity: number
  lateral: number
  stride: number
  brace: number
  tuck: number
}

export interface ArmAccent {
  second: number
  holdUntil: number
  priority: number
  drive: ArmDrive
}

function jointAngles(side: number, drive: ArmDrive) {
  const reach = Math.max(0, -side * drive.lateral)
  const fold = Math.max(0, side * drive.lateral)
  // The active pose keeps the elbow clear of the ribs, including in a turn.
  const upperOut =
    35 + 43 * reach - 8 * fold + 34 * drive.brace - 11 * drive.tuck
  const upperPitch =
    -5 -
    19 * side * drive.stride +
    11 * fold +
    6 * drive.brace +
    18 * drive.tuck
  const forearmOut =
    13 + 64 * reach - 10 * fold + 42 * drive.brace - 12 * drive.tuck
  const bend = 43 - 9 * reach + 10 * fold + 4 * drive.brace + 15 * drive.tuck
  // At rest the hands hang beside the thighs, with a slight bend at the
  // elbows. Scale the whole silhouette, including the non-reaching arm.
  return {
    upperOut: side * lerp(8, upperOut, drive.intensity) * radiansPerDegree,
    upperPitch: lerp(-4, upperPitch, drive.intensity) * radiansPerDegree,
    forearmOut: side * lerp(3, forearmOut, drive.intensity) * radiansPerDegree,
    forearmPitch:
      lerp(9, upperPitch + bend, drive.intensity) * radiansPerDegree,
  }
}

type ArmAngles = ReturnType<typeof jointAngles>
type ArmPair = [ArmAngles, ArmAngles]
const relaxed: ArmDrive = {
  intensity: 0,
  lateral: 0,
  stride: 0,
  brace: 0,
  tuck: 0,
}

interface ArmKey {
  start: number
  second: number
  arms: ArmPair
  brakeFraction: number
}

// An arc-length bound from shoulder to fingertip. Multiplying it by the
// remaining angular fraction bounds every point on both arms, even in a turn
// of the forearm about the elbow. Both joints can therefore brake together.
function travelBound(a: ArmAngles, b: ArmAngles) {
  return (
    UPPER_ARM_LENGTH *
      Math.hypot(b.upperOut - a.upperOut, b.upperPitch - a.upperPitch) +
    (FOREARM_LENGTH + HAND_REACH) *
      Math.hypot(b.forearmOut - a.forearmOut, b.forearmPitch - a.forearmPitch)
  )
}

export function planArmGestures(accents: ArmAccent[], rate: number) {
  const selected: ArmAccent[] = []
  const spacing = (ATTACK_SECONDS + HOLD_SECONDS) * rate
  // Closely spaced notes share one accent. A turn or jump takes precedence
  // over an ordinary step, and an energetic, wide reach takes priority.
  for (const cue of accents.sort((a, b) => a.second - b.second)) {
    if (cue.drive.intensity === 0) continue
    const last = selected.at(-1)
    if (!last || cue.second - last.second >= spacing) selected.push(cue)
    else if (cue.priority > last.priority) selected[selected.length - 1] = cue
  }

  const keys: ArmKey[] = []
  function add(start: number, second: number, drive: ArmDrive) {
    const arms: ArmPair = [jointAngles(-1, drive), jointAngles(1, drive)]
    const old = keys.at(-1)?.arms ?? arms
    const travel = Math.max(
      travelBound(old[0], arms[0]),
      travelBound(old[1], arms[1])
    )
    keys.push({
      start,
      second,
      arms,
      brakeFraction:
        travel > 0 ? Math.min(0.15, BRAKE_DISTANCE / travel) : 0.15,
    })
  }
  add(-Infinity, -Infinity, relaxed)
  for (const [i, cue] of selected.entries()) {
    add(cue.second - ATTACK_SECONDS * rate, cue.second, cue.drive)
    const release = Math.max(cue.holdUntil, cue.second + HOLD_SECONDS * rate)
    const end = release + RETURN_SECONDS * rate
    // Go directly to the next pose in a run. Lowering the arms fully needs
    // sufficient quiet time for the recovery, a stop, and the next attack.
    if (end + spacing <= (selected[i + 1]?.second ?? Infinity))
      add(release, end, relaxed)
  }
  return keys
}

// Accelerate over the first 12% of the travel, carry that speed to the
// terminal centimetre, then brake to exactly zero with no overshoot.
function strokeProgress(phase: number, brake: number) {
  const launch = 0.12
  const speed = 1 + launch + brake
  const elapsed = phase * speed
  if (elapsed < 2 * launch) return elapsed ** 2 / (4 * launch)
  const remaining = speed - elapsed
  if (remaining < 2 * brake) return 1 - remaining ** 2 / (4 * brake)
  return elapsed - launch
}

function segment(length: number, out: number, pitch: number) {
  const plane = length * Math.cos(pitch)
  return {
    x: plane * Math.sin(out),
    y: -plane * Math.cos(out),
    z: -length * Math.sin(pitch),
  }
}

function sampleArm(from: ArmAngles, to: ArmAngles, t: number) {
  return {
    upper: segment(
      UPPER_ARM_LENGTH,
      lerp(from.upperOut, to.upperOut, t),
      lerp(from.upperPitch, to.upperPitch, t)
    ),
    forearm: segment(
      FOREARM_LENGTH,
      lerp(from.forearmOut, to.forearmOut, t),
      lerp(from.forearmPitch, to.forearmPitch, t)
    ),
  }
}

export function sampleArmGesture(
  current: ArmKey,
  next: ArmKey | undefined,
  second: number
) {
  const t =
    next && second > next.start
      ? strokeProgress(
          Math.min(1, (second - next.start) / (next.second - next.start)),
          next.brakeFraction
        )
      : 0
  const target = next?.arms ?? current.arms
  return [
    sampleArm(current.arms[0], target[0], t),
    sampleArm(current.arms[1], target[1], t),
  ] as const
}
