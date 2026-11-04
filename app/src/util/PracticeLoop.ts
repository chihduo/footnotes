import { App } from "../App"
import { WaterfallManager } from "../gui/element/WaterfallManager"
import { EventHandler } from "./EventHandler"

/**
 * A-B loop for dance practice. The Loop button marks the start of a section,
 * then its end, and playback repeats that section until the button is
 * clicked again.
 */
export class PracticeLoop {
  static startBeat: number | null = null
  static endBeat: number | null = null
  private static timer?: ReturnType<typeof setInterval>

  static get looping() {
    return this.startBeat !== null && this.endBeat !== null
  }

  // Marks the start at the current beat, then the end, then stops looping.
  // Both are rounded to the nearest beat, so the section is a whole number
  // of beats long and the rhythm carries on when it repeats.
  static next(app: App) {
    const chartManager = app.chartManager
    if (!chartManager.loadedChart) return
    const beat = Math.max(0, Math.round(chartManager.beat))
    if (this.startBeat === null) {
      this.startBeat = beat
    } else if (this.endBeat === null) {
      if (beat == this.startBeat) {
        WaterfallManager.create(
          "Move to the end of the section, then click Loop again"
        )
        return
      }
      this.endBeat = Math.max(beat, this.startBeat)
      this.startBeat = Math.min(beat, this.startBeat)
      this.timer = setInterval(() => this.update(app), 5)
    } else {
      this.clear()
      return
    }
    EventHandler.emit("practiceLoopChanged")
  }

  static clear() {
    if (this.timer) clearInterval(this.timer)
    this.timer = undefined
    if (this.startBeat === null && this.endBeat === null) return
    this.startBeat = null
    this.endBeat = null
    EventHandler.emit("practiceLoopChanged")
  }

  // Once the song plays past the end of the section, jump back to its start
  private static update(app: App) {
    const chartManager = app.chartManager
    if (!this.looping || !chartManager.chartAudio.isPlaying()) return
    if (chartManager.beat >= this.endBeat!) {
      chartManager.beat = this.startBeat!
    }
  }
}
