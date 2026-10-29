// Landing page: load a simfile from a link, list its charts in a dialog, and
// open the chosen chart in dance practice mode. The demo song's charts are
// plain links in the page, so they work without this script.

const BASE = import.meta.env.BASE_URL
const LOAD_TIMEOUT = 10000

const status = document.getElementById("status") as HTMLParagraphElement
const picker = document.getElementById("picker") as HTMLDialogElement
const pickerTitle = document.getElementById("picker-title") as HTMLElement
const pickerArtist = document.getElementById("picker-artist") as HTMLElement
const pickerCharts = document.getElementById("picker-charts") as HTMLDivElement
const linkForm = document.getElementById("link-form") as HTMLFormElement
const linkInput = document.getElementById("link-input") as HTMLInputElement

let currentLoad = 0

function setStatus(message: string, isError = false, fallbackUrl?: string) {
  status.textContent = message
  status.classList.toggle("error", isError)
  if (fallbackUrl) {
    const link = document.createElement("a")
    link.href = fallbackUrl
    link.textContent = "Open it in the app anyway"
    status.append(" ", link, ".")
  }
}

function practiceLink(songUrl: string, gameType?: string, chartIndex?: number) {
  const url = new URL(BASE + "app/", location.origin)
  url.searchParams.set("url", songUrl)
  if (gameType !== undefined) url.searchParams.set("chartType", gameType)
  if (chartIndex !== undefined)
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

// The simfile parser is part of the app, so it's only loaded when needed
function loadParser() {
  return Promise.all([
    import("../app/src/chart/sm/Simfile"),
    import("../app/src/chart/gameTypes/GameTypeRegistry"),
    import("../app/src/chart/stats/parity/StageLayouts"),
  ])
}

async function showCharts(songUrl: string) {
  const load = ++currentLoad
  let url: URL
  try {
    url = new URL(songUrl)
  } catch {
    setStatus(
      "That doesn't look like a link. Paste the full address, starting with https://.",
      true
    )
    return
  }
  setStatus("Loading the song…")

  let text: string
  try {
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

  let parser: Awaited<ReturnType<typeof loadParser>>
  try {
    parser = await loadParser()
  } catch {
    if (load != currentLoad) return
    setStatus(
      "Footnotes couldn't load its song reader. Reload the page and try again.",
      true,
      practiceLink(url.href)
    )
    return
  }
  const [{ Simfile }, { GameTypeRegistry }, { STAGE_LAYOUTS }] = parser

  const fileName =
    decodeURIComponent(url.pathname.split("/").pop() ?? "") || "song.sm"
  const sm = new Simfile(new File([text], fileName))
  let groups: {
    id: string
    charts: ReturnType<typeof sm.getChartsByGameType>
  }[]
  try {
    await sm.loaded
    groups = GameTypeRegistry.getPriority()
      .map(gameType => ({
        id: gameType.id,
        charts: sm.getChartsByGameType(gameType.id),
      }))
      .filter(group => group.charts.length > 0)
  } catch {
    groups = []
  }
  if (load != currentLoad) return
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
  if (!picker.open) picker.showModal()
  pickerCharts.querySelector("a")?.focus()
}

linkForm.addEventListener("submit", event => {
  event.preventDefault()
  showCharts(linkInput.value.trim())
})

// Clicking the dimmed backdrop closes the chart list
picker.addEventListener("click", event => {
  const rect = picker.getBoundingClientRect()
  const outside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  if (event.target == picker && outside) picker.close()
})

// Links like footnotes/?song=<url> open straight to that song's charts
const sharedSong = new URLSearchParams(location.search).get("song")
if (sharedSong) {
  linkInput.value = sharedSong
  showCharts(sharedSong)
}
