import assert from "node:assert/strict"
import test from "node:test"
import { createServer } from "vite"

// Only the class declaration needs Web Audio. Each test records calls to play().
globalThis.AudioBufferSourceNode = class {}
const vite = await createServer({
  configFile: false,
  appType: "custom",
  logLevel: "error",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
})
const { SchedulableSoundEffect } = await vite.ssrLoadModule(
  "/app/src/util/SchedulableSoundEffect.ts"
)
await vite.close()

function schedule(cue, now, rate, end, endBehavior) {
  const calls = []
  SchedulableSoundEffect.prototype.playAt.call(
    { play: (delay, duration) => calls.push({ delay, duration }) },
    cue,
    now,
    rate,
    end,
    endBehavior
  )
  return calls
}

test("practice excludes cues outside the song, including queued and late ticks", () => {
  for (const endBehavior of ["clip", "ringOut"]) {
    assert.deepEqual(schedule(-0.125, -0.25, 1, 10, endBehavior), [])
    assert.deepEqual(schedule(10, 9.875, 1, 10, endBehavior), [])
    assert.deepEqual(schedule(10.125, 9.99, 1, 10, endBehavior), [])
    assert.deepEqual(schedule(9.875, 10, 1, 10, endBehavior), [])
    assert.deepEqual(schedule(9.875, 10.125, 1, 10, endBehavior), [])
    assert.deepEqual(schedule(0, -0.125, 1, 0, endBehavior), [])
  }
})

test("practice assist ticks can be queued during lead-in and end with the music at each rate", () => {
  for (const rate of [0.5, 1, 2]) {
    assert.deepEqual(schedule(0, -0.125, rate, 10), [
      { delay: 0.125 / rate, duration: 10 / rate },
    ])
    assert.deepEqual(schedule(9.875, 9.75, rate, 10), [
      { delay: 0.125 / rate, duration: 0.125 / rate },
    ])
    assert.deepEqual(schedule(9.75, 9.875, rate, 10), [
      { delay: 0, duration: 0.125 / rate },
    ])
  }
})

test("the last metronome beat plays its whole sample even just before the song ends", () => {
  const end = 10
  const beat = end - 1 / 128
  for (const rate of [0.5, 1, 2]) {
    assert.deepEqual(schedule(beat, beat - 1 / 32, rate, end, "ringOut"), [
      { delay: 1 / 32 / rate, duration: undefined },
    ])
    assert.deepEqual(schedule(beat, end - 1 / 256, rate, end, "ringOut"), [
      { delay: 0, duration: undefined },
    ])
  }
})

test("editor cues can use the whole chart timeline", () => {
  assert.deepEqual(schedule(-2, -2.25, 1), [
    { delay: 0.25, duration: undefined },
  ])
  assert.deepEqual(schedule(105, 104.75, 1), [
    { delay: 0.25, duration: undefined },
  ])
})
