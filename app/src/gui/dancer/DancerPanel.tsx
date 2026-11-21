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

function panelRoom(
  app: App,
  bounds: DOMRect,
  size = Options.practice.dancerSize
) {
  return getPracticeDancerRoom(
    bounds.width,
    bounds.height,
    app.chartManager.loadedChart?.gameType.id,
    app.stage.scale.y,
    size
  )
}

function setupPanel(
  app: App,
  panel: HTMLElement,
  handle: HTMLElement,
  resizer: HTMLElement,
  reset: HTMLButtonElement
) {
  let x = 0,
    y = 0,
    travelX = 0,
    travelY = 0
  let bounds: DOMRect
  let room: ReturnType<typeof getPracticeDancerRoom>
  let pointer:
    | { id: number; control: HTMLElement; offsetX: number; offsetY: number }
    | undefined

  function move(left: number, top: number) {
    x = clamp(left, 0, travelX)
    y = clamp(top, 0, travelY)
    panel.style.transform = `translate(${x + room.margin}px, ${y + room.margin}px)`
  }

  function applySize(next: typeof room) {
    room = next
    panel.style.width = room.panelWidth + "px"
    panel.style.height = room.panelHeight + "px"
    travelX = Math.max(0, bounds.width - room.panelWidth - 2 * room.margin)
    travelY = Math.max(
      0,
      room.usableHeight - room.panelHeight - 2 * room.margin
    )
  }

  function layout() {
    bounds = app.view.getBoundingClientRect()
    panel.style.left = bounds.left + "px"
    panel.style.top = bounds.top + "px"
    applySize(panelRoom(app, bounds))
    if (pointer) {
      move(x, y)
      return
    }
    const saved = Options.practice.dancerPosition
    const [u, v] = Array.isArray(saved) ? saved : []
    move(
      Number.isFinite(u) ? u * travelX : 0,
      Number.isFinite(v) ? v * travelY : 0
    )
  }

  function rememberPosition() {
    Options.practice.dancerPosition = [
      travelX ? x / travelX : 0,
      travelY ? y / travelY : 0,
    ]
  }

  function resize(width: number, height: number) {
    // The upper-left corner stays put while the lower-right corner follows the pointer.
    const next = panelRoom(app, bounds, [
      clamp(width, 1, room.panelWidth + travelX - x) / room.defaultWidth,
      clamp(height, 1, room.panelHeight + travelY - y) / room.defaultHeight,
    ])
    if (
      next.panelWidth === room.panelWidth &&
      next.panelHeight === room.panelHeight
    )
      return
    Options.practice.dancerSize = [
      next.panelWidth / next.defaultWidth,
      next.panelHeight / next.defaultHeight,
    ]
    applySize(next)
    move(x, y)
  }

  function restorePosition() {
    Options.practice.dancerPosition = []
    move(0, 0)
  }

  function restoreSize() {
    Options.practice.dancerSize = []
    applySize(panelRoom(app, bounds))
    move(x, y)
    rememberPosition()
  }

  function down(e: PointerEvent) {
    if (!e.isPrimary || e.button !== 0) return
    endGesture()
    const control = e.currentTarget as HTMLElement
    const sizing = control === resizer
    pointer = {
      id: e.pointerId,
      control,
      offsetX: e.clientX - (sizing ? room.panelWidth : x),
      offsetY: e.clientY - (sizing ? room.panelHeight : y),
    }
    control.setPointerCapture(e.pointerId)
    panel.classList.add(sizing ? "resizing" : "dragging")
    control.focus({ preventScroll: true })
    e.preventDefault()
  }

  function drag(e: PointerEvent) {
    if (e.pointerId !== pointer?.id) return
    if (e.buttons === 0) {
      endGesture()
      return
    }
    const change = pointer.control === resizer ? resize : move
    change(e.clientX - pointer.offsetX, e.clientY - pointer.offsetY)
  }

  function endGesture() {
    if (!pointer) return
    const { control, id } = pointer
    pointer = undefined
    panel.classList.remove("dragging", "resizing")
    if (control.hasPointerCapture(id)) control.releasePointerCapture(id)
    rememberPosition()
    control.blur()
  }

  function finish(e: PointerEvent) {
    if (e.pointerId === pointer?.id) endGesture()
  }

  function key(e: KeyboardEvent) {
    const sizing = e.currentTarget === resizer
    const step = e.shiftKey ? 32 : 8
    let dx = 0,
      dy = 0
    switch (e.key) {
      case "ArrowLeft":
        dx = -step
        break
      case "ArrowRight":
        dx = step
        break
      case "ArrowUp":
        dy = -step
        break
      case "ArrowDown":
        dy = step
        break
      case "Home":
        break
      default:
        return
    }
    e.preventDefault()
    e.stopPropagation()
    if (e.key === "Home") {
      if (sizing) restoreSize()
      else restorePosition()
      return
    }
    if (sizing) resize(room.panelWidth + dx, room.panelHeight + dy)
    else move(x + dx, y + dy)
    rememberPosition()
  }

  const observer = new ResizeObserver(layout)
  observer.observe(app.view)
  const bar = document.getElementById("status-widget")
  if (bar) observer.observe(bar)
  const chartLayoutChanged = (id: string) => {
    if (id === "chart.zoom" || id === "chart.noteLayout.enabled") layout()
  }
  EventHandler.on("userOptionUpdated", chartLayoutChanged)
  EventHandler.on("resize", layout)
  EventHandler.on("chartLoaded", layout)
  const listeners = new AbortController()
  const options = { signal: listeners.signal }
  for (const control of [handle, resizer]) {
    control.addEventListener("pointerdown", down, options)
    control.addEventListener("keydown", key, options)
  }
  // The first outward movement can already be beyond the corner's hit area.
  const tracking = { ...options, capture: true }
  document.addEventListener("pointermove", drag, tracking)
  document.addEventListener("pointerup", finish, tracking)
  document.addEventListener("pointercancel", finish, tracking)
  window.addEventListener("blur", endGesture, options)
  reset.addEventListener("click", restorePosition, options)
  resizer.addEventListener("dblclick", restoreSize, options)
  layout()
  return () => {
    endGesture()
    listeners.abort()
    observer.disconnect()
    EventHandler.off("userOptionUpdated", chartLayoutChanged)
    EventHandler.off("resize", layout)
    EventHandler.off("chartLoaded", layout)
  }
}

export default function DancerPanel({ app }: { app: App }) {
  const panel = useRef<HTMLElement>(null)
  const grip = useRef<HTMLDivElement>(null)
  const reset = useRef<HTMLButtonElement>(null)
  const resizer = useRef<HTMLDivElement>(null)
  const fit = useRef<HTMLButtonElement>(null)
  const viewport = useRef<HTMLDivElement>(null)
  const caption = useRef<HTMLDivElement>(null)
  const coaching = useRef<HTMLDivElement>(null)
  const fastSteps = useRef<HTMLButtonElement>(null)

  useLayoutEffect(
    () =>
      setupPanel(
        app,
        panel.current!,
        grip.current!,
        resizer.current!,
        reset.current!
      ),
    [app]
  )
  useEffect(() => {
    const frame = viewport.current!
    const card = panel.current!
    const cue = caption.current!
    const instruction = coaching.current!
    const fastButton = fastSteps.current!
    let scene: DancerScene | undefined
    let motion: DancerMotion | undefined
    let activeChart: Chart | undefined
    let states: ParityState[] | undefined
    let lastTime = NaN
    let rate = NaN
    let reference:
      | {
          panelWidth: number
          panelHeight: number
          width: number
          height: number
        }
      | undefined
    const resize = () => {
      const width = frame.clientWidth,
        height = frame.clientHeight
      if (!scene || !width || !height) return
      const { defaultWidth, defaultHeight } = panelRoom(
        app,
        app.view.getBoundingClientRect()
      )
      if (
        defaultWidth !== reference?.panelWidth ||
        defaultHeight !== reference.panelHeight
      ) {
        reference = {
          panelWidth: defaultWidth,
          panelHeight: defaultHeight,
          width: Math.max(1, defaultWidth - (card.offsetWidth - width)),
          height: Math.max(1, defaultHeight - (card.offsetHeight - height)),
        }
      }
      scene.resize(width, height, reference.width, reference.height)
      lastTime = NaN
    }
    const fitButton = fit.current!
    const fitDancer = (event: MouseEvent) => {
      scene?.fitDancer()
      if (event.detail > 0) fitButton.blur()
    }
    fitButton.addEventListener("click", fitDancer)
    const nextFastStep = () => {
      const steps = motion?.fastSteps
      if (!steps?.length) return
      const next =
        steps.find(step => step.beat > app.chartManager.beat + 0.0001) ??
        steps[0]
      app.chartManager.beat = next.beat
    }
    fastButton.addEventListener("click", nextFastStep)
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
      if (
        chart !== activeChart ||
        states !== chart.stats.parity?.states ||
        rate !== Options.audio.rate
      ) {
        activeChart = chart
        states = chart.stats.parity?.states
        rate = Options.audio.rate
        motion = new DancerMotion(chart, layout, rate)
        const hideFlags = motion.fastSteps.length === 0
        if (fastButton.hidden !== hideFlags) {
          fastButton.hidden = hideFlags
          reference = undefined
          resize()
        }
        fastButton.textContent = "Fast steps (" + motion.fastSteps.length + ")"
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
      const tip =
        states && states.length > 2 ? pose.paceWarning || pose.coaching : ""
      instruction.classList.toggle("over-pace", !!pose.paceWarning)
      if (instruction.textContent !== tip) instruction.textContent = tip
    }
    const observer = new ResizeObserver(resize)
    observer.observe(frame)
    observer.observe(app.view)
    EventHandler.on("userOptionUpdated", colors)
    // The overhead widget reads the cached chart clock before ChartRenderer
    // advances it. Read that same frame even on a backwards seek or A–B loop.
    Ticker.shared.add(draw, undefined, UPDATE_PRIORITY.HIGH + 1)
    return () => {
      Ticker.shared.remove(draw)
      fitButton.removeEventListener("click", fitDancer)
      fastButton.removeEventListener("click", nextFastStep)
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
          <span className="dancer-camera-hint" aria-hidden="true">
            Drag model to rotate · Scroll to zoom
          </span>
        </div>
        <button
          ref={fit}
          type="button"
          className="dancer-fit"
          aria-label="Fit whole dancer in panel"
          title="Fit the whole dancer at this angle"
        >
          Fit
        </button>
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
      <div
        className="dancer-viewport"
        ref={viewport}
        role="group"
        tabIndex={0}
        aria-label="Dancer camera. Use arrow keys to rotate, plus and minus to zoom, and Home to reset the view."
        title="Drag to rotate. Scroll or pinch to zoom. Double-click to reset the view."
        onMouseDown={event => event.preventDefault()}
      ></div>
      <div className="dancer-cue" ref={caption}>
        Ready
      </div>
      <div className="dancer-feedback">
        <div className="dancer-coaching" ref={coaching}></div>
        <button
          type="button"
          className="dancer-fast-steps"
          ref={fastSteps}
          hidden
          title="Jump to the next step over the movement limit at this playback rate"
        >
          Fast steps
        </button>
      </div>
      <div
        className="dancer-resize"
        ref={resizer}
        role="group"
        tabIndex={0}
        aria-label="Resize dancer panel. Use arrow keys to change width or height, or Home for the default size."
        title="Drag to resize. Double-click for the default size."
      />
    </section>
  )
}
