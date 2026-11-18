// Songs page: lists the songs of the song packs hosted for Footnotes, with a
// button for each chart that opens it in dance practice mode. The packs live
// in their own repository, chihduo/footnotes-packs, which lists them in
// packs.json and describes each one in <pack>/index.json.

import { gameTypeName, practiceLink } from "./practice"

const PACKS_URL: string =
  import.meta.env.VITE_PACKS_URL || "https://chihduo.github.io/footnotes-packs/"
const LOAD_TIMEOUT = 15000

interface PackChart {
  type: string
  // The chart's chartIndex: its place among the song's charts of this type
  index: number
  difficulty: string
  meter: number
  description: string
}

interface PackSong {
  simfile: string
  title: string
  subtitle: string
  artist: string
  bpm: string
  banner: string | null
  charts: PackChart[]
}

interface Pack {
  name: string
  source: string
  songs: PackSong[]
}

interface PackList {
  packs: { id: string; name: string; index: string }[]
}

const status = document.getElementById("songs-status") as HTMLParagraphElement
const packsView = document.getElementById("packs") as HTMLDivElement
const search = document.getElementById("song-search") as HTMLInputElement

async function fetchJSON<T>(url: string): Promise<T> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), LOAD_TIMEOUT)
  try {
    const response = await fetch(url, { signal: controller.signal })
    if (!response.ok) throw new Error(`The server answered ${response.status}`)
    return (await response.json()) as T
  } finally {
    clearTimeout(timeout)
  }
}

// A file in a pack, with each part of its path escaped, since song folders
// and files often have spaces in their names
function fileUrl(packUrl: string, path: string) {
  return new URL(path.split("/").map(encodeURIComponent).join("/"), packUrl)
    .href
}

// Lowercase and without accents, for searching
function normalize(text: string) {
  return text
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
}

function element<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className: string,
  text?: string
) {
  const node = document.createElement(tag)
  node.className = className
  if (text !== undefined) node.textContent = text
  return node
}

function songRow(packUrl: string, song: PackSong) {
  const row = element("li", "song")
  const name = [song.title, song.subtitle].filter(Boolean).join(" ")
  row.dataset.search = normalize(`${name} ${song.artist}`)

  const banner = element("img", "song-banner")
  banner.alt = ""
  banner.loading = "lazy"
  banner.decoding = "async"
  banner.width = 512
  banner.height = 160
  if (song.banner) banner.src = fileUrl(packUrl, song.banner)

  const info = element("div", "song-info")
  const title = element("h3", "song-title", song.title)
  if (song.subtitle)
    title.append(" ", element("span", "song-subtitle", song.subtitle))
  const meta = [song.artist, song.bpm && `${song.bpm} BPM`].filter(Boolean)
  info.append(title, element("p", "song-meta", meta.join(" · ")))

  const charts = element("div", "song-charts")
  const songUrl = fileUrl(packUrl, song.simfile)
  for (const type of new Set(song.charts.map(chart => chart.type))) {
    const group = element("div", "song-chart-group")
    // Single charts are the norm, so only other step types get a label, like
    // "Double"
    if (type != "dance-single")
      group.append(
        element(
          "span",
          "song-chart-type",
          gameTypeName(type).replace(/^Dance /, "")
        )
      )
    for (const chart of song.charts.filter(chart => chart.type == type)) {
      const label =
        chart.difficulty == "Edit" && chart.description
          ? chart.description
          : chart.difficulty
      const link = element(
        "a",
        `song-chart diff-${chart.difficulty.toLowerCase()}`
      )
      link.href = practiceLink(songUrl, chart.type, chart.index)
      link.setAttribute(
        "aria-label",
        `${name}: ${label} ${chart.meter}, ${gameTypeName(type).toLowerCase()}`
      )
      link.append(
        element("span", "meter", String(chart.meter)),
        element("span", "song-chart-name", label)
      )
      group.append(link)
    }
    charts.append(group)
  }

  row.append(banner, info, charts)
  return row
}

function packSection(pack: Pack, packUrl: string) {
  const section = element("section", "pack")
  const head = element("div", "pack-head")
  const count = element("p", "pack-count")
  const source = document.createElement("a")
  source.href = pack.source
  source.textContent = new URL(pack.source).hostname
  const chartCount = pack.songs.reduce((n, song) => n + song.charts.length, 0)
  const total = `${pack.songs.length} songs, ${chartCount} charts`
  count.append(total, " · from ", source)
  head.append(element("h2", "pack-name", pack.name), count)

  const list = element("ul", "song-list")
  list.append(...pack.songs.map(song => songRow(packUrl, song)))
  section.append(head, list)
  return section
}

function filter() {
  const words = normalize(search.value).split(/\s+/).filter(Boolean)
  let shown = 0
  for (const section of packsView.querySelectorAll<HTMLElement>(".pack")) {
    let shownInPack = 0
    for (const row of section.querySelectorAll<HTMLElement>(".song")) {
      const match = words.every(word => row.dataset.search!.includes(word))
      row.hidden = !match
      if (match) shownInPack++
    }
    section.hidden = shownInPack == 0
    shown += shownInPack
  }
  status.textContent =
    shown == 0 && words.length > 0
      ? `No songs match “${search.value.trim()}”.`
      : ""
}

async function load() {
  let list: PackList
  try {
    list = await fetchJSON<PackList>(new URL("packs.json", PACKS_URL).href)
  } catch {
    status.textContent =
      "Couldn't load the songs. Check your connection and reload the page."
    status.classList.add("error")
    return
  }
  const packs = await Promise.all(
    list.packs.map(async entry => {
      const indexUrl = new URL(entry.index, PACKS_URL).href
      try {
        return packSection(await fetchJSON<Pack>(indexUrl), indexUrl)
      } catch {
        const section = element("section", "pack")
        section.append(
          element("h2", "pack-name", entry.name),
          element(
            "p",
            "status error",
            "Couldn't load this pack's songs. Reload the page to try again."
          )
        )
        return section
      }
    })
  )
  packsView.replaceChildren(...packs)
  status.textContent = ""
  filter()
}

search.addEventListener("input", filter)
load()
