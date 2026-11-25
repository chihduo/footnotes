import type { TimingData } from "../sm/TimingData"

export interface SongLoop {
  start: number
  end: number
  lead: number
}

// Join two downbeats. Hand the clock back a little before the join, while
// both poses are at rest, so Web Audio can schedule the opening from sample 0.
export function planSongLoop(
  timing: TimingData,
  firstMotion: number,
  ready: number,
  lead: number
): SongLoop {
  const measureAt = (second: number) =>
    Math.floor(timing.getMeasure(timing.getBeatFromSeconds(second)))
  const barTime = (measure: number) =>
    timing.getSecondsFromBeat(timing.getBeatFromMeasure(measure))
  const start = barTime(measureAt(Math.min(0, firstMotion)))
  const lastMeasure = measureAt(ready + lead)
  let end = barTime(lastMeasure)
  if (end < ready + lead || end <= start) end = barTime(lastMeasure + 1)
  return { start, end, lead }
}

type Click = [second: number, downbeat: boolean]

// Yield each audible beat in [from, to) once, including when chart beats
// coincide in a warp. Only a repeating song counts through negative lead-in.
function* chartClicks(
  timing: TimingData,
  from: number,
  to: number,
  countIn: boolean
): Generator<Click> {
  const firstBeat = timing.getBeatFromSeconds(from)
  const lastBeat = timing.getBeatFromSeconds(to)
  if (countIn && firstBeat < 0) {
    const division = timing.getDivisionLength(0)
    const beatsPerBar = timing.getMeasureLength(0) / division
    for (let i = Math.floor(firstBeat / division); i < 0; i++) {
      const second = timing.getSecondsFromBeat(i * division)
      if (second >= to) break
      if (second >= from) yield [second, i % beatsPerBar === 0]
    }
  }
  if (lastBeat < 0) return
  const start = timing.getBeatFromMeasure(
    Math.floor(timing.getMeasure(Math.max(0, firstBeat)))
  )
  let previous = NaN
  for (const [beat, downbeat] of timing.getMeasureBeats(
    start,
    lastBeat + timing.getDivisionLength(lastBeat)
  )) {
    const second = timing.getSecondsFromBeat(beat)
    if (second < from || second >= to || second === previous) continue
    previous = second
    yield [second, downbeat]
  }
}

export function* metronomeClicks(
  timing: TimingData,
  from: number,
  to: number,
  loop?: SongLoop
): Generator<Click> {
  if (!Number.isFinite(from) || !Number.isFinite(to) || from >= to) return
  if (!loop) {
    yield* chartClicks(timing, from, to, false)
    return
  }
  const period = loop.end - loop.start
  if (!(period > 0)) return
  // The lookahead can straddle the repeat. The closing downbeat belongs to
  // the next pass, which supplies its own accent and opening tempo.
  for (let pass = Math.floor((from - loop.start) / period); ; pass++) {
    const shift = pass * period
    if (loop.start + shift >= to) break
    const lo = Math.max(loop.start, from - shift)
    const hi = Math.min(loop.end, to - shift)
    for (const [second, downbeat] of chartClicks(timing, lo, hi, true))
      yield [second + shift, downbeat]
  }
}
