import assert from "node:assert/strict"
import test from "node:test"
import { createServer } from "vite"

// Parse timing data in the same environment as the chart worker.
globalThis.WorkerGlobalScope = class {}
globalThis.self = new WorkerGlobalScope()
// Cue tests record calls to play() without starting a Web Audio device.
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
const { planSongLoop, metronomeClicks } = await vite.ssrLoadModule(
  "/app/src/chart/audio/Metronome.ts"
)
const { Simfile } = await vite.ssrLoadModule("/app/src/chart/sm/Simfile.ts")
const { ParityInternals } = await vite.ssrLoadModule(
  "/app/src/chart/stats/parity/ParityInternals.ts"
)
const { STAGE_LAYOUTS } = await vite.ssrLoadModule(
  "/app/src/chart/stats/parity/StageLayouts.ts"
)
const { DancerMotion } = await vite.ssrLoadModule(
  "/app/src/gui/dancer/DancerMotion.ts"
)
const { getDancerTiming } = await vite.ssrLoadModule(
  "/app/src/gui/dancer/DancerFootwork.ts"
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

async function songTiming(properties) {
  const simfile = new Simfile(
    new File(["#TITLE:Loop;\n" + properties], "loop.sm")
  )
  await simfile.loaded
  return simfile.timingData
}

test("a whole-song repeat waits for the dancer and joins exactly once on the opening downbeat", async () => {
  const timing = await songTiming("#OFFSET:0.125;#BPMS:0=120;")
  for (const rate of [0.5, 1, 2]) {
    const loop = planSongLoop(timing, -0.34, 2.37, 0.2 * rate)
    assert.ok(loop.start <= -0.34)
    assert.ok(loop.end - loop.lead >= 2.37)
    const period = loop.end - loop.start
    for (const end of [loop.end, loop.end + period, loop.end + 2 * period]) {
      const clicks = [...metronomeClicks(timing, end - 1, end + 0.75, loop)]
      assert.deepEqual(clicks, [
        [end - 1, false],
        [end - 0.5, false],
        [end, true],
        [end + 0.5, false],
      ])
      for (const offset of [-0.08, 0, 0.11]) {
        // A lookahead that crosses the seam, then the next scheduler tick on the rewound clock.
        const through = end + 0.0625
        const outgoing = [
          ...metronomeClicks(timing, end - 1 - offset, through - offset, loop),
        ]
        const incoming = [
          ...metronomeClicks(
            timing,
            through - period - offset,
            end + 0.75 - period - offset,
            loop
          ),
        ]
        assert.deepEqual(
          [
            ...outgoing,
            ...incoming.map(([second, accent]) => [second + period, accent]),
          ],
          [
            ...metronomeClicks(
              timing,
              end - 1 - offset,
              end + 0.75 - offset,
              loop
            ),
          ]
        )
      }
    }
  }
})

test("loop clicks keep the ending meter and tempo up to the opening accent, then use the intro tempo", async () => {
  const timing = await songTiming(
    "#OFFSET:-0.125;#BPMS:0=120,8=180;#TIMESIGNATURES:0=3=4,6=5=8;#STOPS:7=0.3;"
  )
  const loop = planSongLoop(timing, 0.6, 7.13, 0.2)
  const hits = [
    ...metronomeClicks(timing, loop.end - 0.4, loop.end + 0.7, loop),
  ]
  assert.deepEqual(
    hits.map(([, accent]) => accent),
    [false, false, true, false]
  )
  for (const [i, gap] of [1 / 6, 1 / 6, 1 / 2].entries())
    assert.ok(Math.abs(hits[i + 1][0] - hits[i][0] - gap) < 1e-7)
  assert.ok(Math.abs(hits[2][0] - loop.end) < 1e-8)
})

test("ordinary metronome windows include the first downbeat, respect stops and never double a warped beat", async () => {
  const timing = await songTiming(
    "#OFFSET:-0.125;#BPMS:0=120;#STOPS:2=0.25;#WARPS:4=2;"
  )
  const clicks = [...metronomeClicks(timing, -2, 4)]
  assert.deepEqual(clicks.slice(0, 4), [
    [0.125, true],
    [0.625, false],
    [1.125, false],
    [1.875, false],
  ])
  assert.equal(new Set(clicks.map(([s]) => s)).size, clicks.length)
  for (const boundary of [0.125, 1.125, 1.22, 2.375, 3.91])
    assert.deepEqual(
      [
        ...metronomeClicks(timing, -2, boundary),
        ...metronomeClicks(timing, boundary, 4),
      ],
      clicks
    )
})

test("a Free style repeat finishes a late hold and a half-turn before returning to the opening pose", async () => {
  const song = new Simfile(
    new File(
      [
        `#TITLE:Half turn;
#BPMS:0=139.53488372;
#NOTES:dance-single::Challenge:9:0,0,0,0,0:
0010
0011
0000
1001
1100
0000
0010
0001
,
0101
0000
1001
0000
0000
0000
0000
0000
,
0000
2001
0000
3000
;`,
      ],
      "half-turn.sm"
    )
  )
  await song.loaded
  const [chart] = song.getChartsByGameType("dance-single")
  const timing = getDancerTiming(chart, 1)
  chart.stats.parity = new ParityInternals(
    "dance-single",
    "Free style"
  ).compute(0, chart.getLastBeat(), chart.getNotedata(), timing)
  const musicEnd = chart.getSecondsFromBeat(9.75)
  const motion = new DancerMotion(
    chart,
    STAGE_LAYOUTS["dance-single"],
    1,
    musicEnd
  )
  assert.equal(Math.abs(motion.turn.angle), Math.PI)
  const lastHold = chart.getSecondsFromBeat(11)
  const holding = motion.sample(musicEnd)
  assert.ok(holding.left.holding || holding.right.holding)
  assert.ok(motion.restTime > lastHold)
  const first = Math.min(motion.firstPreparation, motion.turn.start)
  const loop = planSongLoop(chart.timingData, first, motion.restTime, 0.2)
  const end = motion.sample(loop.end - loop.lead)
  const start = motion.sample(loop.start - loop.lead)
  assert.equal(end.heading, 0)
  assert.equal(end.yaw, 0)
  assert.deepEqual(end.hips, { x: 0, z: 0 })
  assert.ok(Math.abs(start.heading) < 1e-8 && Math.abs(start.yaw) < 1e-8)
  assert.deepEqual(end.hips, start.hips)
  assert.deepEqual(end.arms, start.arms)
  for (const side of ["left", "right"])
    for (const key of ["x", "z", "lift", "yaw", "pitch"])
      assert.ok(Math.abs(end[side][key] - start[side][key]) < 1e-8)
})
