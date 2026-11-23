// From the project root: node tools/compare-footing-rotation.mjs pack/*/*.sm
// The Mintmania CSV uses the simfiles listed at
// https://chihduo.github.io/footnotes-packs/mintmania/index.json.
// --runtime compares Free style and its rendered contacts to screen-facing Minimal effort.
// --beats includes the beats shown in the practice warnings.
// --pivots also tries a single timed quarter-turn during a rest, starting front.
// --half-turns tries a full turn of 180 degrees on charted taps and jumps.
import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { basename } from "node:path"
import { fileURLToPath } from "node:url"
import { createServer } from "vite"

const runtime = process.argv.includes("--runtime")
const withBeats = process.argv.includes("--beats")
const withPivots = process.argv.includes("--pivots")
const withHalfTurns = process.argv.includes("--half-turns")
const files = process.argv
  .slice(2)
  .filter(
    arg => !["--runtime", "--beats", "--pivots", "--half-turns"].includes(arg)
  )
if (!files.length) throw new Error("Pass one or more .sm or .ssc files")

// The parity module normally runs in a Web Worker.
globalThis.WorkerGlobalScope = class WorkerGlobalScope {}
globalThis.self = new WorkerGlobalScope()
const vite = await createServer({
  root: fileURLToPath(new URL("../", import.meta.url)),
  configFile: false,
  appType: "custom",
  logLevel: "error",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true, ws: false, hmr: false, watch: null },
})
const load = name => vite.ssrLoadModule("/app/src/" + name + ".ts")
const { Simfile } = await load("chart/sm/Simfile")
const { ParityInternals } = await load("chart/stats/parity/ParityInternals")
const { STAGE_LAYOUTS } = await load("chart/stats/parity/StageLayouts")
const { getDancerTiming, planFootwork, turnBetween } = await load(
  "gui/dancer/DancerFootwork"
)
const { DancerMotion } = await load("gui/dancer/DancerMotion")
const halfTurnStudy = withHalfTurns
  ? await vite.ssrLoadModule("/tools/footing-half-turns.mjs")
  : undefined
await vite.close()

// Physical chart columns (Left, Down, Up, Right) in the dancer's frame.
// A heading is held for the whole chart. The existing crossover and hip-turn
// logic still operates around that heading. The dancer starts already turned.
const headings = {
  front: [0, 1, 2, 3],
  left: [2, 0, 3, 1],
  right: [1, 3, 0, 2],
  back: [3, 2, 1, 0],
}
const layout = STAGE_LAYOUTS["dance-single"]
const rate = 1

function solve(chart, columns, useRotation = false) {
  const notes = chart.getNotedata()
  const relativeNotes =
    columns === headings.front
      ? notes
      : notes
          .map(note => ({ ...note, col: columns[note.col] }))
          .sort((a, b) => a.beat - b.beat || a.col - b.col)
  const view = {
    getNotedata: () => relativeNotes,
    getSecondsFromBeat: beat => chart.getSecondsFromBeat(beat),
    getBeatFromSeconds: second => chart.getBeatFromSeconds(second),
  }
  const solver = new ParityInternals(
    layout.name,
    useRotation ? "Free style" : "Minimal effort"
  )
  const parity = solver[useRotation ? "compute" : "computeFixedFacing"](
    0,
    chart.getLastBeat(),
    relativeNotes,
    getDancerTiming(view, rate)
  )
  if (!parity) throw new Error("No footing for " + chart.toString())
  for (const note of relativeNotes) {
    if (note.fake || note.warped || note.type === "Mine") continue
    const key = note.beat.toFixed(3) + "-" + note.col
    assert.ok(parity.parityLabels.get(key) > 0, "Missing foot for " + key)
  }
  const motion = new DancerMotion({ ...view, stats: { parity } }, layout, rate)
  return { rows: parity.rowTimestamps, motion, parity }
}

// Try one optional turn in a chart rest. Both plans must already have the
// same physical shoe on each occupied panel at the join. Replant one shoe at
// a time and preserve every chart contact outside the rest.
function standingPose(motion, second) {
  const pose = motion.sample(second)
  if (pose.left.heel === pose.right.heel || pose.compression !== 0) return
  for (const side of ["left", "right"]) {
    const foot = pose[side]
    if (
      !foot.contact ||
      foot.holding ||
      foot.heel < 0 ||
      foot.toe >= 0 ||
      foot.lift !== 0 ||
      foot.unload !== 0 ||
      foot.pitch !== 0
    )
      return
  }
  const before = motion.sample(second - 0.005)
  const after = motion.sample(second + 0.005)
  if (
    Math.abs(turnBetween(before.yaw, after.yaw)) > 1e-6 ||
    Math.hypot(after.hips.x - before.hips.x, after.hips.z - before.hips.z) >
      1e-6
  )
    return
  return pose
}

function firstStanding(motion, start, end, direction) {
  for (let i = 1; i * 0.015 < end - start; i++) {
    const second = direction === 1 ? start + i * 0.015 : end - i * 0.015
    const pose = standingPose(motion, second)
    if (pose) return { second, pose }
  }
}

function rotatePoint(point, angle) {
  return {
    x: Math.cos(angle) * point.x + Math.sin(angle) * point.z,
    z: Math.cos(angle) * point.z - Math.sin(angle) * point.x,
  }
}

function canPivot(start, end, columns, angle) {
  const seconds = end.second - start.second
  const hips = rotatePoint(end.pose.hips, angle)
  // Smoothstep's peak slope is 1.5. Use the renderer's hip and body limits.
  const hipDistance = Math.hypot(
    hips.x - start.pose.hips.x,
    hips.z - start.pose.hips.z
  )
  const bodyTurn = turnBetween(start.pose.yaw, end.pose.yaw + angle)
  if (
    1.5 * hipDistance > 1.35 * seconds ||
    1.5 * Math.abs(bodyTurn) > 4 * seconds
  )
    return false

  const tracks = []
  const targets = []
  for (const [i, side] of ["left", "right"].entries()) {
    const a = start.pose[side],
      b = end.pose[side]
    if (columns[a.heel] !== b.heel) return false
    const old = {
      x: a.x,
      z: a.z,
      yaw: a.yaw,
      heel: a.heel,
      toe: -1,
      second: start.second,
      beat: 0,
      start: start.second,
      holdEnd: -Infinity,
      height: 0,
      fixed: true,
      pivot: false,
      jump: false,
      overLimit: false,
    }
    const midpoint = start.second + seconds / 2
    const targetYaw = b.yaw + angle
    targets.push(targetYaw)
    tracks.push([
      old,
      {
        ...old,
        ...rotatePoint(b, angle),
        yaw: targetYaw,
        beat: i + 1,
        start: i === 0 ? start.second : midpoint + 0.035,
        second: i === 0 ? midpoint : end.second,
      },
    ])
  }
  planFootwork(tracks, rate)
  return tracks.every(
    ([, hit], i) =>
      !hit.overLimit && Math.abs(turnBetween(hit.yaw, targets[i])) < 1e-7
  )
}

// Consider only hold-free gaps of at least 0.65 s, including mine events.
function availableRests(chart) {
  const rests = []
  let busyUntil = -Infinity
  for (const note of chart.getNotedata()) {
    if (note.fake || note.warped) continue
    if (Number.isFinite(busyUntil) && note.second - busyUntil >= 0.65) {
      rests.push({ start: busyUntil, end: note.second, nextBeat: note.beat })
    }
    busyUntil = Math.max(busyUntil, note.second)
    if (note.hold > 0)
      busyUntil = Math.max(
        busyUntil,
        chart.getSecondsFromBeat(note.beat + note.hold)
      )
  }
  return rests
}

function findPivot(rests, front, turned, heading, columns, best) {
  const angle = heading === "left" ? Math.PI / 2 : -Math.PI / 2
  for (const rest of rests) {
    const warnings =
      front.fastSteps.filter(step => step.second <= rest.start).length +
      turned.fastSteps.filter(step => step.second >= rest.end).length
    if (warnings >= (best?.warnings ?? front.fastSteps.length)) continue
    const start = firstStanding(front, rest.start, rest.end, 1)
    if (!start) continue
    const end = firstStanding(turned, start.second, rest.end, -1)
    if (!end || !canPivot(start, end, columns, angle)) continue
    best = {
      heading,
      beforeBeat: rest.nextBeat,
      startSecond: start.second,
      endSecond: end.second,
      warnings,
    }
  }
  return best
}

for (const path of files) {
  const song = new Simfile(new File([await readFile(path)], basename(path)))
  await song.loaded
  const charts = song.getChartsByGameType(layout.name)
  for (const [chartIndex, chart] of charts.entries()) {
    if (!["Hard", "Challenge", "Edit"].includes(chart.difficulty)) continue
    const firstEvent = chart
      .getNotedata()
      .find(note => !note.fake && !note.warped)
    const front = solve(chart, headings.front)
    const result = {
      file: path,
      chartIndex,
      song: song.properties.TITLE,
      difficulty: chart.difficulty,
      meter: chart.meter,
      description: chart.description,
      firstEventSecond: firstEvent?.second ?? null,
      rows: front.rows.length,
      warnings: {},
    }
    if (runtime) {
      const chosen = solve(chart, headings.front, true)
      assert.deepEqual(chosen.rows, front.rows)
      const before = front.motion.fastSteps.length,
        after = chosen.motion.fastSteps.length
      const turn = chosen.motion.turn
      assert.ok(turn ? after < before : after === before)
      if (turn) {
        for (const n of chart.getNotedata()) {
          if (n.fake || n.warped || n.type === "Mine") continue
          const part = chosen.parity.parityLabels.get(
            n.beat.toFixed(3) + "-" + n.col
          )
          const pose = chosen.motion.sample(n.second)
          const shoe = part <= 2 ? pose.left : pose.right
          assert.ok(
            shoe.contact &&
              (part === 1 || part === 3 ? shoe.heel : shoe.toe) === n.col,
            chart.toString() + " at " + n.beat
          )
        }
      }
      if (withBeats)
        result.beats = {
          front: front.motion.fastSteps.map(s => s.beat),
          selected: chosen.motion.fastSteps.map(s => s.beat),
        }
      const mode = !turn
        ? "front"
        : turn.end < firstEvent.second
          ? "intro"
          : Math.abs(turn.angle) > 2
            ? "charted"
            : "rest"
      console.log(
        JSON.stringify({
          ...result,
          warnings: { front: before, selected: after },
          mode,
          turn,
        })
      )
      continue
    }
    if (withBeats) result.beats = {}
    const rests = withPivots ? availableRests(chart) : []
    if (withPivots) result.pivot = null
    for (const [heading, columns] of Object.entries(headings)) {
      const { rows, motion } =
        heading === "front" ? front : solve(chart, columns)
      assert.deepEqual(rows, front.rows, "All headings must hit the same rows")
      result.warnings[heading] = motion.fastSteps.length
      if (withBeats)
        result.beats[heading] = motion.fastSteps.map(step => step.beat)
      if (halfTurnStudy && heading === "back")
        result.halfTurns = halfTurnStudy.findChartedHalfTurns(
          chart,
          front.motion,
          motion
        )
      if (withPivots && (heading === "left" || heading === "right"))
        result.pivot = findPivot(
          rests,
          front.motion,
          motion,
          heading,
          columns,
          result.pivot
        )
    }
    // Model a screen-facing start at audio time zero. Budget one second per
    // quarter-turn, then reserve 1.35 seconds for the first planned motion.
    const allowed = [result.warnings.front]
    if (firstEvent?.second >= 2.35)
      allowed.push(result.warnings.left, result.warnings.right)
    if (firstEvent?.second >= 3.35) allowed.push(result.warnings.back)
    result.warningsWithLeadIn = Math.min(...allowed)
    console.log(JSON.stringify(result))
  }
  song.destroy()
}
