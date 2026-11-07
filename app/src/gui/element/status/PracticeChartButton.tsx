import { useEffect, useState } from "react"
import { App } from "../../../App"
import { EventHandler } from "../../../util/EventHandler"
import { Keybinds } from "../../../util/Keybinds"
import { ChartListWindow } from "../../window/ChartList/ChartListWindow"
import { WindowManager } from "../../window/WindowManager"

// The id of ChartListWindow
const CHART_LIST = "chart_list"

// The practice chart button: the current chart over a "Chart" caption, like
// the footing menu beside it. It opens the chart list, or closes it if it's
// already open.
export function PracticeChartButton(props: { app: App }) {
  const [, setVersion] = useState(0)

  useEffect(() => {
    const changed = () => setVersion(version => version + 1)
    EventHandler.on("chartLoaded", changed)
    EventHandler.on("chartModified", changed)
    EventHandler.on("windowsChanged", changed)
    return () => {
      EventHandler.off("chartLoaded", changed)
      EventHandler.off("chartModified", changed)
      EventHandler.off("windowsChanged", changed)
    }
  }, [])

  const chart = props.app.chartManager.loadedChart
  const open = WindowManager.isWindowOpen(CHART_LIST)
  return (
    <button
      tabIndex={-1}
      className={`practice-button practice-chart ${open ? "active" : ""}`}
      ref={Keybinds.createReactKeybindTooltip`Choose a chart ${"openChart"}`}
      onClick={e => {
        if (WindowManager.isWindowOpen(CHART_LIST))
          WindowManager.closeWindow(CHART_LIST)
        else WindowManager.openWindow(ChartListWindow())
        e.currentTarget.blur()
      }}
    >
      <span className="practice-chart-name">
        {chart && (
          <span className={`practice-chart-meter ${chart.difficulty}`}>
            {chart.meter}
          </span>
        )}
        {chart?.difficulty ?? "None"}
      </span>
      <span className="practice-chart-caption">Chart</span>
    </button>
  )
}
