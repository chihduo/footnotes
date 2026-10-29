import { App } from "../App"
import { EditMode } from "../chart/ChartManager"
import { EventHandler } from "./EventHandler"
import { Flags } from "./Flags"
import { Options } from "./Options"

interface PracticeSnapshot {
  mode: EditMode
  reverse: boolean
  parityEnabled: boolean
  showDancingBot: boolean
}

/**
 * Dance practice mode: shows a large dancing bot above the notefield and
 * hides the editing UI so the chart can be learned while dancing along.
 */
export class PracticeMode {
  private static snapshot?: PracticeSnapshot

  static get active(): boolean {
    return Options.practice.enabled
  }

  static init(app: App) {
    // Notes must scroll upwards into the receptors under the bot
    EventHandler.on("userOptionUpdated", (id: string) => {
      if (id == "chart.reverse" && Options.practice.enabled)
        if (Options.chart.reverse) Options.chart.reverse = false
    })

    if (!Flags.practice) return
    // Turn parity on before the chart loads so the analyzer starts with it
    PracticeMode.snapshot = PracticeMode.capture(app)
    PracticeMode.applyPracticeOptions()
    EventHandler.once("chartLoaded", () => PracticeMode.enter(app))
  }

  static enter(app: App) {
    const chartManager = app.chartManager
    if (Options.practice.enabled || !chartManager.hasLoadedChart()) return
    PracticeMode.snapshot ??= PracticeMode.capture(app)
    PracticeMode.applyPracticeOptions()
    if (chartManager.getMode() != EditMode.View)
      chartManager.setMode(EditMode.View)
    Options.practice.enabled = true
    document.body.classList.add("practice")
    EventHandler.emit("practiceModeChanged")
  }

  static exit(app: App) {
    if (!Options.practice.enabled) return
    Options.practice.enabled = false
    document.body.classList.remove("practice")
    const snapshot = PracticeMode.snapshot
    PracticeMode.snapshot = undefined
    if (snapshot) {
      if (Options.chart.reverse != snapshot.reverse)
        Options.chart.reverse = snapshot.reverse
      if (Options.chart.parity.showDancingBot != snapshot.showDancingBot)
        Options.chart.parity.showDancingBot = snapshot.showDancingBot
      if (Options.chart.parity.enabled != snapshot.parityEnabled)
        Options.chart.parity.enabled = snapshot.parityEnabled
      const chartManager = app.chartManager
      if (
        chartManager.hasLoadedChart() &&
        chartManager.getMode() != snapshot.mode
      )
        chartManager.setMode(snapshot.mode)
    }
    EventHandler.emit("practiceModeChanged")
  }

  static toggle(app: App) {
    if (Options.practice.enabled) PracticeMode.exit(app)
    else PracticeMode.enter(app)
  }

  private static capture(app: App): PracticeSnapshot {
    return {
      mode:
        app.chartManager.getMode() == EditMode.View
          ? EditMode.View
          : EditMode.Edit,
      reverse: Options.chart.reverse,
      parityEnabled: Options.chart.parity.enabled,
      showDancingBot: Options.chart.parity.showDancingBot,
    }
  }

  private static applyPracticeOptions() {
    if (Options.chart.reverse) Options.chart.reverse = false
    if (!Options.chart.parity.enabled) Options.chart.parity.enabled = true
    if (!Options.chart.parity.showDancingBot)
      Options.chart.parity.showDancingBot = true
  }
}
