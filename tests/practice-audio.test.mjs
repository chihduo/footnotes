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

function schedule(cue, now, rate, end) {
  const calls = []
  SchedulableSoundEffect.prototype.playAt.call(
    { play: (delay, duration) => calls.push({ delay, duration }) },
    cue,
    now,
    rate,
    end
  )
  return calls
}

test("practice excludes cues outside the song, including queued and late ticks", () => {
  assert.deepEqual(schedule(-0.125, -0.25, 1, 10), [])
  assert.deepEqual(schedule(10, 9.875, 1, 10), [])
  assert.deepEqual(schedule(10.125, 9.99, 1, 10), [])
  assert.deepEqual(schedule(9.875, 10.125, 1, 10), [])
  assert.deepEqual(schedule(0, -0.125, 1, 0), [])
})

test("the first cue can be queued during lead-in and the last cue ends with the music at each rate", () => {
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

test("editor cues can use the whole chart timeline", () => {
  assert.deepEqual(schedule(-2, -2.25, 1), [
    { delay: 0.25, duration: undefined },
  ])
  assert.deepEqual(schedule(105, 104.75, 1), [
    { delay: 0.25, duration: undefined },
  ])
})
