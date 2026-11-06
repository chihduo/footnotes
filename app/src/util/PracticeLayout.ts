import { STAGE_LAYOUTS } from "../chart/stats/parity/StageLayouts"
import { clamp } from "./Math"
import { Options } from "./Options"

// Size of one dancing bot panel before scaling
export const BOT_PANEL_SIZE = 80

const TOP_MARGIN = 16
const RECEPTOR_GAP = 12
const RECEPTOR_HALF_HEIGHT = 32
const MAX_WIDTH_FRACTION = 0.9
const COLUMN_WIDTH = 64

// Screens shorter than this, in CSS pixels, such as phones held sideways,
// zoom the stage in so the pad and arrows aren't tiny
const SHORT_SCREEN_HEIGHT = 560
const MAX_STAGE_ZOOM = 1.8
// Short screens at least this wide for their height put the pad beside the
// arrows instead of above them
const SIDE_MIN_ASPECT = 1.6
const SIDE_GAP = 48
// Room for the bottom bar, which floats over the bottom of the stage, in rem
const BOTTOM_BAR_REM = 5.5

interface PadBounds {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

export interface PracticeBotPlacement {
  scale: number
  pivotX: number
  pivotY: number
  x: number
  y: number
  bottom: number
}

const boundsCache = new Map<string, PadBounds | undefined>()

/**
 * Returns the bounds of the dancing bot's pad in unscaled bot coordinates,
 * matching the panel positions built by DancingBotWidget.
 */
function getPadBounds(gameTypeId: string): PadBounds | undefined {
  if (boundsCache.has(gameTypeId)) return boundsCache.get(gameTypeId)
  const layout = STAGE_LAYOUTS[gameTypeId]
  let bounds: PadBounds | undefined
  if (layout) {
    const xs = layout.layout.map(point => point.x * BOT_PANEL_SIZE)
    const ys = layout.layout.map(point => point.y * -BOT_PANEL_SIZE)
    const half = BOT_PANEL_SIZE / 2
    bounds = {
      minX: Math.min(...xs) - half,
      maxX: Math.max(...xs) + half,
      minY: Math.min(...ys) - half,
      maxY: Math.max(...ys) + half,
    }
  }
  boundsCache.set(gameTypeId, bounds)
  return bounds
}

/**
 * How much dance practice mode zooms the whole stage in, for a canvas this
 * many CSS pixels tall. Only short screens are zoomed.
 */
export function getPracticeStageZoom(screenHeight: number): number {
  if (!Options.practice.enabled || screenHeight <= 0) return 1
  return clamp(SHORT_SCREEN_HEIGHT / screenHeight, 1, MAX_STAGE_ZOOM)
}

interface SideLayout {
  bot: PracticeBotPlacement
  notefieldX: number
  receptorY: number
}

/**
 * On a short, wide screen, the pad goes on the left, as tall as the room
 * above the bottom bar allows, and the arrows go on its right, near the top
 * so the notes have the whole height to scroll. The pair is centred.
 * pixelsPerUnit is the stage's scale; without it, there's no side layout.
 */
function getSideLayout(
  stageWidth: number,
  stageHeight: number,
  gameTypeId: string,
  zoom: number,
  pixelsPerUnit: number
): SideLayout | undefined {
  if (pixelsPerUnit <= 0) return
  const isShort = stageHeight * pixelsPerUnit < SHORT_SCREEN_HEIGHT
  if (!isShort || stageWidth < SIDE_MIN_ASPECT * stageHeight) return
  const bounds = getPadBounds(gameTypeId)
  const columns = STAGE_LAYOUTS[gameTypeId]?.layout.length
  if (!bounds || !columns) return

  const padWidth = bounds.maxX - bounds.minX
  const padHeight = bounds.maxY - bounds.minY
  const top = -stageHeight / 2 + TOP_MARGIN
  const bottomBar =
    (BOTTOM_BAR_REM * 16 * Options.general.uiScale) / pixelsPerUnit
  const notefieldWidth = columns * COLUMN_WIDTH * zoom
  const scale = Math.min(
    (stageHeight - TOP_MARGIN - bottomBar) / padHeight,
    (stageWidth / 2 - SIDE_GAP) / padWidth
  )
  const groupWidth = padWidth * scale + SIDE_GAP + notefieldWidth
  const left = -groupWidth / 2
  return {
    bot: {
      scale,
      pivotX: (bounds.minX + bounds.maxX) / 2,
      pivotY: bounds.minY,
      x: left + (padWidth * scale) / 2,
      y: top,
      bottom: top + padHeight * scale,
    },
    notefieldX: left + padWidth * scale + SIDE_GAP + notefieldWidth / 2,
    receptorY: top + RECEPTOR_GAP + RECEPTOR_HALF_HEIGHT * zoom,
  }
}

/**
 * Returns the stage x position of the notefield in dance practice mode:
 * centred, or beside the pad on a short, wide screen.
 */
export function getPracticeNotefieldX(
  stageWidth: number,
  stageHeight: number,
  gameTypeId: string,
  zoom: number,
  pixelsPerUnit: number
): number {
  return (
    getSideLayout(stageWidth, stageHeight, gameTypeId, zoom, pixelsPerUnit)
      ?.notefieldX ?? 0
  )
}

/**
 * Returns where the enlarged dancing bot sits in dance practice mode, in stage coordinates.
 * The bot is centred horizontally and pinned to the top of the screen, or
 * beside the arrows on a short, wide screen.
 */
export function getPracticeBotPlacement(
  stageWidth: number,
  stageHeight: number,
  gameTypeId: string,
  pixelsPerUnit = 0
): PracticeBotPlacement | undefined {
  const side = getSideLayout(
    stageWidth,
    stageHeight,
    gameTypeId,
    Options.chart.zoom,
    pixelsPerUnit
  )
  if (side) return side.bot
  const bounds = getPadBounds(gameTypeId)
  if (!bounds) return
  const width = bounds.maxX - bounds.minX
  const height = bounds.maxY - bounds.minY
  const scale = Math.min(
    (Options.practice.botHeight * stageHeight) / height,
    (MAX_WIDTH_FRACTION * stageWidth) / width
  )
  const top = -stageHeight / 2 + TOP_MARGIN
  return {
    scale,
    pivotX: (bounds.minX + bounds.maxX) / 2,
    pivotY: bounds.minY,
    x: 0,
    y: top,
    bottom: top + height * scale,
  }
}

/**
 * Returns the stage y position of the receptors in dance practice mode,
 * placed directly underneath the enlarged dancing bot, or near the top beside
 * it on a short, wide screen.
 */
export function getPracticeReceptorY(
  stageWidth: number,
  stageHeight: number,
  gameTypeId: string,
  zoom: number,
  pixelsPerUnit = 0
): number | undefined {
  const side = getSideLayout(
    stageWidth,
    stageHeight,
    gameTypeId,
    zoom,
    pixelsPerUnit
  )
  if (side) return side.receptorY
  const placement = getPracticeBotPlacement(stageWidth, stageHeight, gameTypeId)
  if (!placement) return
  return placement.bottom + RECEPTOR_GAP + RECEPTOR_HALF_HEIGHT * zoom
}
