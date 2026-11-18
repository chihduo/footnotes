// Links into the app, shared by the home page and the Songs page

const BASE = import.meta.env.BASE_URL

// A link that opens a song's chart straight in dance practice mode
export function practiceLink(
  songUrl: string,
  gameType?: string,
  chartIndex?: number
) {
  const url = new URL(BASE + "app/", location.origin)
  url.searchParams.set("url", songUrl)
  if (gameType !== undefined) url.searchParams.set("chartType", gameType)
  if (chartIndex !== undefined)
    url.searchParams.set("chartIndex", String(chartIndex))
  url.searchParams.set("flags", "D")
  return url.href
}

// dance-double -> Dance double
export function gameTypeName(id: string) {
  const name = id.replace(/-/g, " ")
  return name.charAt(0).toUpperCase() + name.slice(1)
}
