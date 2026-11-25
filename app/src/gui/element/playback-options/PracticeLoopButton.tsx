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

// Show the start and end of the selected A–B section.
export function PracticeLoopButton() {
  const [, setVersion] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const changed = () => setVersion(version => version + 1)
    EventHandler.on("practiceLoopChanged", changed)
    return () => {
      EventHandler.off("practiceLoopChanged", changed)
    }
  }, [])

  useEffect(() => {
    if (ref.current)
      Keybinds.createKeybindTooltip(
        ref.current
      )`Mark the start and end of a section to repeat it. Click again to stop looping`
  }, [])

  const chart = window.app.chartManager.loadedChart
  const time = (beat: number) =>
    formatTime(chart?.getSecondsFromBeat(beat) ?? 0)
  let label = "A–B loop"
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
