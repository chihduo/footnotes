import { Sprite, Texture } from "pixi.js"
import { useEffect, useRef } from "react"
import type { App } from "../../App"
import type { Chart } from "../../chart/sm/Chart"
import type { ParityState } from "../../chart/stats/parity/ParityDataTypes"
import { STAGE_LAYOUTS } from "../../chart/stats/parity/StageLayouts"
import { EventHandler } from "../../util/EventHandler"
import { Flags } from "../../util/Flags"
import { Options } from "../../util/Options"
import {
  getPadSize,
  getPracticeLayout,
  type DancerArea,
} from "../../util/PracticeLayout"
import { BaseTimelineWidget } from "../widget/timeline/BaseTimelineWidget"
import { PAD_CENTER_FROM_TOP } from "./DancerFraming"
import { DancerMotion } from "./DancerMotion"
import { DancerScene } from "./DancerScene"
import "./dancer.css"

function getDancerArea(
  app: App,
  gameType: string,
  practice: boolean
): DancerArea | undefined {
  if (practice) {
    return getPracticeLayout(
      app.STAGE_WIDTH,
      app.STAGE_HEIGHT,
      gameType,
      Options.chart.zoom,
      app.stage.scale.y
    )?.dancer
  }
  const size = getPadSize(gameType)
  if (!size) return
  return {
    x:
      app.STAGE_WIDTH / 2 -
      BaseTimelineWidget.getTotalWidgetWidth() -
      16 -
      size.width,
    y: app.STAGE_HEIGHT / 2 - 16 - size.height,
    ...size,
  }
}

export default function DancerStage({
  app,
  practice,
}: {
  app: App
  practice: boolean
}) {
  const root = useRef<HTMLElement>(null)
  const viewport = useRef<HTMLDivElement>(null)
  const caption = useRef<HTMLDivElement>(null)
  const coaching = useRef<HTMLDivElement>(null)
  const fastSteps = useRef<HTMLButtonElement>(null)
  const fit = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const layer = root.current!
    const frame = viewport.current!
    const cue = caption.current!
    const instruction = coaching.current!
    const fastButton = fastSteps.current!
    const fitButton = fit.current!
    const sprite = new Sprite()
    sprite.name = "3D dancer"
    sprite.anchor.set(0.5, PAD_CENTER_FROM_TOP)
    sprite.zIndex = app.chartManager.widgetManager.zIndex
    sprite.visible = false
    app.stage.addChild(sprite)

    let scene: DancerScene | undefined
    let texture: Texture | undefined
    let motion: DancerMotion | undefined
    let activeChart: Chart | undefined
    let states: ParityState[] | undefined
    let lastTime = NaN
    let rate = NaN
    let area: DancerArea | undefined
    let scale = 0
    let viewHeight = 0
    let extent = 1

    function positionImage() {
      if (!area || !texture) return
      const height = viewHeight / scale
      sprite.position.set(
        area.x + area.width / 2,
        area.y + height * PAD_CENTER_FROM_TOP
      )
      sprite.width = area.width * extent
      sprite.height = height * extent
    }

    function present(canvas: HTMLCanvasElement, magnification: number) {
      extent = magnification
      if (!texture) {
        texture = Texture.from(canvas)
        sprite.texture = texture
      }
      texture.update()
      positionImage()
    }

    function resizeScene() {
      if (!scene || layer.hidden) return
      const w = frame.clientWidth,
        h = frame.clientHeight
      if (!w || !h) return
      viewHeight = h
      scene.resize(w, h)
      lastTime = NaN
    }

    function place(next: DancerArea) {
      const ratio = app.stage.scale.y
      if (
        area &&
        ratio === scale &&
        area.x === next.x &&
        area.y === next.y &&
        area.width === next.width &&
        area.height === next.height
      )
        return
      area = next
      scale = ratio
      layer.style.transform = `translate(${area.x * scale}px, ${area.y * scale}px)`
      layer.style.width = area.width * scale + "px"
      layer.style.height = area.height * scale + "px"
      resizeScene()
      positionImage()
    }

    const fitDancer = () => scene?.fitDancer()
    const nextFastStep = () => {
      const steps = motion?.fastSteps
      if (!steps?.length) return
      const next =
        steps.find(step => step.beat > app.chartManager.beat + 0.0001) ??
        steps[0]
      app.chartManager.beat = next.beat
    }
    const colors = (id: string) => {
      if (id.startsWith("chart.parity.") && id.endsWith("Color")) {
        scene?.setColors()
        lastTime = NaN
      }
    }
    function draw() {
      if (!app.renderer.renderingToScreen) return
      const { loadedChart: chart, chartView } = app.chartManager
      const layout = chart && STAGE_LAYOUTS[chart.gameType.id]
      const placement =
        chart && layout && getDancerArea(app, chart.gameType.id, practice)
      if (
        !chart ||
        !chartView ||
        !layout ||
        !placement ||
        (!practice && (!Flags.barlines || !chart.stats.parity?.states?.length))
      ) {
        sprite.visible = false
        layer.hidden = true
        activeChart = undefined
        return
      }
      layer.hidden = false
      sprite.visible = true
      scene ??= new DancerScene(frame, present)
      place(placement)
      if (chart !== activeChart) {
        scene.setLayout(layout)
        resizeScene()
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
        fastButton.hidden = !motion.fastSteps.length
        fastButton.textContent = "Fast steps (" + motion.fastSteps.length + ")"
        lastTime = NaN
      }
      const time = chartView.getVisualTime()
      if (!motion || time === lastTime) return
      lastTime = time
      const pose = motion.sample(time)
      scene.draw(pose)
      if (!practice) return
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
    const observer = new ResizeObserver(resizeScene)
    observer.observe(frame)
    fastButton.addEventListener("click", nextFastStep)
    fitButton.addEventListener("click", fitDancer)
    EventHandler.on("userOptionUpdated", colors)
    // Update the sprite before Pixi draws the chart, including capture frames.
    app.renderer.on("prerender", draw)
    return () => {
      app.renderer.off("prerender", draw)
      EventHandler.off("userOptionUpdated", colors)
      fastButton.removeEventListener("click", nextFastStep)
      fitButton.removeEventListener("click", fitDancer)
      observer.disconnect()
      scene?.dispose()
      sprite.destroy()
      texture?.destroy(true)
    }
  }, [app, practice])

  return (
    <section id="practice-dancer" aria-label="3D dance pad" ref={root} hidden>
      <div
        className="dancer-viewport"
        ref={viewport}
        tabIndex={0}
        role="group"
        aria-label="Dancer camera. Drag or use the arrow keys to rotate. Scroll, pinch or use plus and minus to zoom. Double-click or press Home for the rear view."
        title="Drag to rotate. Scroll or pinch to zoom. Double-click for the rear view."
      />
      <div className="dancer-guidance" hidden={!practice}>
        <div className="dancer-cue" ref={caption} />
        <div className="dancer-coaching" ref={coaching} />
        <button
          type="button"
          className="dancer-fast-steps"
          ref={fastSteps}
          hidden
          title="Jump to the next step over the movement limit"
        >
          Fast steps
        </button>
      </div>
      <button
        className="dancer-fit"
        ref={fit}
        type="button"
        title="Fit the whole dancer at this angle"
      >
        Fit
      </button>
    </section>
  )
}
