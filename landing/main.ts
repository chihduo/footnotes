// Landing page: load a simfile from a link (or the demo song), list its
// charts, and open the chosen chart in dance practice mode.

const BASE = import.meta.env.BASE_URL
const DEMO_URL = new URL(BASE + "demo/footnotes-demo.sm", location.origin).href
const LOAD_TIMEOUT = 10000

const status = document.getElementById("status") as HTMLParagraphElement
const picker = document.getElementById("picker") as HTMLDivElement
const pickerTitle = document.getElementById("picker-title") as HTMLElement
const pickerArtist = document.getElementById("picker-artist") as HTMLElement
const pickerCharts = document.getElementById("picker-charts") as HTMLDivElement
const linkForm = document.getElementById("link-form") as HTMLFormElement
const linkInput = document.getElementById("link-input") as HTMLInputElement

let currentLoad = 0

function setStatus(message: string, isError = false) {
  status.textContent = message
  status.classList.toggle("error", isError)
}

function practiceLink(songUrl: string, gameType: string, chartIndex: number) {
  const url = new URL(BASE + "app/", location.origin)
  url.searchParams.set("url", songUrl)
  url.searchParams.set("chartType", gameType)
  url.searchParams.set("chartIndex", String(chartIndex))
  url.searchParams.set("flags", "D")
  return url.href
}

function gameTypeName(id: string) {
  const name = id.replace(/-/g, " ")
  return name.charAt(0).toUpperCase() + name.slice(1)
}

async function fetchText(url: string) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), LOAD_TIMEOUT)
  try {
    const response = await fetch(url, { signal: controller.signal })
    if (!response.ok) throw new Error(`The server answered ${response.status}`)
    return await response.text()
  } finally {
    clearTimeout(timeout)
  }
}

async function showCharts(songUrl: string) {
  const load = ++currentLoad
  picker.hidden = true
  setStatus("Loading the song…")

  let url: URL
  let text: string
  try {
    url = new URL(songUrl)
    text = await fetchText(url.href)
  } catch {
    if (load != currentLoad) return
    setStatus(
      "Couldn't load that link. Check that it points straight to a .sm or .ssc file, " +
        "and that the site lets other pages read it (raw GitHub links work).",
      true
    )
    return
  }

  // The simfile parser is part of the app, so only load it when it's needed
  const [{ Simfile }, { GameTypeRegistry }, { STAGE_LAYOUTS }] =
    await Promise.all([
      import("../app/src/chart/sm/Simfile"),
      import("../app/src/chart/gameTypes/GameTypeRegistry"),
      import("../app/src/chart/stats/parity/StageLayouts"),
    ])
  const fileName =
    decodeURIComponent(url.pathname.split("/").pop() ?? "") || "song.sm"
  const sm = new Simfile(new File([text], fileName))
  await sm.loaded
  if (load != currentLoad) return

  const groups = GameTypeRegistry.getPriority()
    .map(gameType => ({
      id: gameType.id,
      charts: sm.getChartsByGameType(gameType.id),
    }))
    .filter(group => group.charts.length > 0)
  if (groups.length == 0) {
    setStatus("That file doesn't have any charts Footnotes can play.", true)
    return
  }

  pickerTitle.textContent =
    [sm.properties.TITLE, sm.properties.SUBTITLE].filter(Boolean).join(" ") ||
    fileName
  pickerArtist.textContent = sm.properties.ARTIST ?? ""
  pickerCharts.replaceChildren(
    ...groups.map(group => {
      const section = document.createElement("div")
      section.className = "chart-group"
      const heading = document.createElement("h4")
      heading.textContent = gameTypeName(group.id)
      if (!STAGE_LAYOUTS[group.id]) {
        const badge = document.createElement("span")
        badge.className = "badge"
        badge.textContent = "no dancing bot"
        heading.append(badge)
      }
      const buttons = document.createElement("div")
      buttons.className = "chart-buttons"
      group.charts.forEach((chart, index) => {
        const link = document.createElement("a")
        link.className = `chart-button diff-${chart.difficulty.toLowerCase()}`
        link.href = practiceLink(url.href, group.id, index)
        const meter = document.createElement("span")
        meter.className = "meter"
        meter.textContent = String(chart.meter)
        const name = document.createElement("span")
        name.textContent =
          chart.difficulty == "Edit" && chart.description
            ? chart.description
            : chart.difficulty
        link.append(meter, name)
        buttons.append(link)
      })
      section.append(heading, buttons)
      return section
    })
  )
  setStatus("")
  picker.hidden = false
  picker.scrollIntoView({ behavior: "smooth", block: "nearest" })
}

function showDemo() {
  document.getElementById("start")?.scrollIntoView({ behavior: "smooth" })
  showCharts(DEMO_URL)
}

document.getElementById("hero-demo")?.addEventListener("click", showDemo)
document.getElementById("demo-button")?.addEventListener("click", showDemo)

linkForm.addEventListener("submit", event => {
  event.preventDefault()
  showCharts(linkInput.value.trim())
})

document.getElementById("picker-close")?.addEventListener("click", () => {
  currentLoad++
  picker.hidden = true
  setStatus("")
})

// Links like footnotes/?song=<url> open straight to that song's charts
const sharedSong = new URLSearchParams(location.search).get("song")
if (sharedSong) {
  linkInput.value = sharedSong
  document.getElementById("start")?.scrollIntoView()
  showCharts(sharedSong)
}
