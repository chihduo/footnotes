import { useEffect, useRef, useState } from "react"
import { EventHandler } from "../../../util/EventHandler"
import { Keybinds } from "../../../util/Keybinds"
import { PracticeLoop } from "../../../util/PracticeLoop"
import { ReactIcon } from "../../Icons"

// m:ss, e.g. 0:12
function formatTime(seconds: number) {
  const s = Math.max(0, Math.floor(seconds))
  return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`
}

// The practice Loop button: marks the start of a section, then its end, then
// stops looping. It shows the section's times.
export function PracticeLoopButton() {
  const [, setVersion] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const changed = () => setVersion(version => version + 1)
    const songLoaded = () => PracticeLoop.clear()
    EventHandler.on("practiceLoopChanged", changed)
    EventHandler.on("smLoaded", songLoaded)
    return () => {
      EventHandler.off("practiceLoopChanged", changed)
      EventHandler.off("smLoaded", songLoaded)
    }
  }, [])

  useEffect(() => {
    if (ref.current)
      Keybinds.createKeybindTooltip(
        ref.current
      )`Loop a section: click to mark its start, click again to mark its end, and click once more to stop looping`
  }, [])

  const chart = window.app.chartManager.loadedChart
  const time = (beat: number) =>
    formatTime(chart?.getSecondsFromBeat(beat) ?? 0)
  let label = "Loop"
  if (PracticeLoop.looping) {
    label = `${time(PracticeLoop.startBeat!)}–${time(PracticeLoop.endBeat!)}`
  } else if (PracticeLoop.startBeat !== null) {
    label = `A ${time(PracticeLoop.startBeat)}`
  }

  return (
    <div
      ref={ref}
      className={`ico-checkbox po-loop ${PracticeLoop.looping ? "active" : ""}`}
      onClick={() => PracticeLoop.next(window.app)}
    >
      <ReactIcon id="LOOP" width={18} />
      <span>{label}</span>
    </div>
  )
}
