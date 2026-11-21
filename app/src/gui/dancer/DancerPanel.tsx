import { Ticker, UPDATE_PRIORITY } from "pixi.js"
import { useEffect, useLayoutEffect, useRef } from "react"
import type { App } from "../../App"
import type { Chart } from "../../chart/sm/Chart"
import type { ParityState } from "../../chart/stats/parity/ParityDataTypes"
import { STAGE_LAYOUTS } from "../../chart/stats/parity/StageLayouts"
import { EventHandler } from "../../util/EventHandler"
import { clamp } from "../../util/Math"
import { Options } from "../../util/Options"
import { getPracticeDancerRoom } from "../../util/PracticeLayout"
import { DancerMotion } from "./DancerMotion"
import { DancerScene } from "./DancerScene"
import "./dancer.css"

function positionPanel(
  app: App,
  panel: HTMLElement,
  handle: HTMLElement,
  reset: HTMLButtonElement
) {
  let x = 0,
    y = 0,
    travelX = 0,
    travelY = 0,
    margin = 0
  let pointer: { id: number; offsetX: number; offsetY: number } | undefined
  function move(left: number, top: number) {
    x = clamp(left, 0, travelX)
    y = clamp(top, 0, travelY)
    panel.style.transform =
      "translate(" + (x + margin) + "px," + (y + margin) + "px)"
  }
  function layout() {
    const bounds = app.view.getBoundingClientRect()
    const room = getPracticeDancerRoom(bounds.width, bounds.height)
    margin = room.margin
    panel.style.left = bounds.left + "px"
    panel.style.top = bounds.top + "px"
    panel.style.width = room.panelWidth + "px"
    panel.style.height = room.panelHeight + "px"
    travelX = Math.max(0, bounds.width - room.panelWidth - margin * 2)
    travelY = Math.max(0, room.usableHeight - room.panelHeight - margin * 2)
    const saved = Options.practice.dancerPosition
    const [u, v] = Array.isArray(saved) ? saved : []
    move(
      Number.isFinite(u) ? u * travelX : 0,
      Number.isFinite(v) ? v * travelY : 0
    )
  }
  function remember() {
    Options.practice.dancerPosition = [
      travelX ? x / travelX : 0,
      travelY ? y / travelY : 0,
    ]
  }
  function restore() {
    Options.practice.dancerPosition = []
    move(0, 0)
  }
  function down(e: PointerEvent) {
    if (!e.isPrimary || e.button !== 0 || reset.contains(e.target as Node))
      return
    pointer = {
      id: e.pointerId,
      offsetX: e.clientX - x,
      offsetY: e.clientY - y,
    }
    panel.setPointerCapture(e.pointerId)
    panel.classList.add("dragging")
    handle.focus({ preventScroll: true })
    e.preventDefault()
  }
  function drag(e: PointerEvent) {
    if (e.pointerId !== pointer?.id) return
    move(e.clientX - pointer.offsetX, e.clientY - pointer.offsetY)
  }
  function finish(e: PointerEvent) {
    if (e.pointerId !== pointer?.id) return
    pointer = undefined
    panel.classList.remove("dragging")
    if (panel.hasPointerCapture(e.pointerId))
      panel.releasePointerCapture(e.pointerId)
    remember()
    handle.blur()
  }
  function key(e: KeyboardEvent) {
    const step = e.shiftKey ? 32 : 8
    switch (e.key) {
      case "ArrowLeft":
        move(x - step, y)
        break
      case "ArrowRight":
        move(x + step, y)
        break
      case "ArrowUp":
        move(x, y - step)
        break
      case "ArrowDown":
        move(x, y + step)
        break
      case "Home":
        restore()
        break
      default:
        return
    }
    e.preventDefault()
    e.stopPropagation()
    if (e.key !== "Home") remember()
  }
  const observer = new ResizeObserver(layout)
  observer.observe(app.view)
  const bar = document.getElementById("status-widget")
  if (bar) observer.observe(bar)
  EventHandler.on("resize", layout)
  panel.addEventListener("pointerdown", down)
  panel.addEventListener("pointermove", drag)
  panel.addEventListener("pointerup", finish)
  panel.addEventListener("pointercancel", finish)
  panel.addEventListener("lostpointercapture", finish)
  handle.addEventListener("keydown", key)
  reset.addEventListener("click", restore)
  layout()
  return () => {
    observer.disconnect()
    EventHandler.off("resize", layout)
    panel.removeEventListener("pointerdown", down)
    panel.removeEventListener("pointermove", drag)
    panel.removeEventListener("pointerup", finish)
    panel.removeEventListener("pointercancel", finish)
    panel.removeEventListener("lostpointercapture", finish)
    handle.removeEventListener("keydown", key)
    reset.removeEventListener("click", restore)
  }
}

export default function DancerPanel({ app }: { app: App }) {
  const panel = useRef<HTMLElement>(null)
  const grip = useRef<HTMLDivElement>(null)
  const reset = useRef<HTMLButtonElement>(null)
  const viewport = useRef<HTMLDivElement>(null)
  const caption = useRef<HTMLDivElement>(null)
  const coaching = useRef<HTMLDivElement>(null)

  useLayoutEffect(
    () => positionPanel(app, panel.current!, grip.current!, reset.current!),
    [app]
  )
  useEffect(() => {
    const frame = viewport.current!
    const card = panel.current!
    const cue = caption.current!
    const instruction = coaching.current!
    let scene: DancerScene | undefined
    let motion: DancerMotion | undefined
    let activeChart: Chart | undefined
    let states: ParityState[] | undefined
    let lastTime = NaN
    const resize = () => {
      scene?.resize(frame.clientWidth, frame.clientHeight)
      lastTime = NaN
    }
    const colors = (id: string) => {
      if (id.startsWith("chart.parity.") && id.endsWith("Color")) {
        scene?.setColors()
        lastTime = NaN
      }
    }
    function draw() {
      const { loadedChart: chart, chartView } = app.chartManager
      const layout = chart && STAGE_LAYOUTS[chart.gameType.id]
      if (!chart || !chartView || !layout || !Options.chart.parity.enabled) {
        card.hidden = true
        activeChart = undefined
        return
      }
      card.hidden = false
      if (chart !== activeChart) {
        scene ??= new DancerScene(frame)
        scene.setLayout(layout)
        resize()
      }
      if (chart !== activeChart || states !== chart.stats.parity?.states) {
        activeChart = chart
        states = chart.stats.parity?.states
        motion = new DancerMotion(chart, layout)
        lastTime = NaN
      }
      const time = chartView.getVisualTime()
      if (time === lastTime || !motion || !scene) return
      lastTime = time
      const pose = motion.sample(time)
      scene.draw(pose)
      const label = !states
        ? "Calculating footing…"
        : states.length <= 2
          ? "No steps in this chart"
          : pose.cue
      if (cue.textContent !== label) cue.textContent = label
      const tip = states && states.length > 2 ? pose.coaching : ""
      if (instruction.textContent !== tip) instruction.textContent = tip
    }
    const observer = new ResizeObserver(resize)
    observer.observe(frame)
    EventHandler.on("userOptionUpdated", colors)
    // The overhead widget reads the cached chart clock before ChartRenderer
    // advances it. Read that same frame even on a backwards seek or A–B loop.
    Ticker.shared.add(draw, undefined, UPDATE_PRIORITY.HIGH + 1)
    return () => {
      Ticker.shared.remove(draw)
      observer.disconnect()
      EventHandler.off("userOptionUpdated", colors)
      scene?.dispose()
    }
  }, [app])

  return (
    <section
      id="practice-dancer"
      aria-label="3D practice dancer"
      ref={panel}
      hidden
    >
      <header className="dancer-header">
        <div
          className="dancer-grip"
          ref={grip}
          tabIndex={0}
          role="group"
          aria-label="Move 3D dancer. Use arrow keys to move, or Home to reset."
          title="Drag to move. Use arrow keys when focused."
        >
          <span className="dancer-grip-dots" aria-hidden="true"></span>
          3D dancer
        </div>
        <button
          ref={reset}
          type="button"
          className="dancer-reset"
          aria-label="Reset dancer position"
          title="Reset position"
        >
          ↺
        </button>
      </header>
      <div className="dancer-viewport" ref={viewport}></div>
      <div className="dancer-cue" ref={caption}>
        Ready
      </div>
      <div className="dancer-coaching" ref={coaching}></div>
    </section>
  )
}
