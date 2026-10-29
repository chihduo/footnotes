import { STAGE_LAYOUTS } from "../chart/stats/parity/StageLayouts"
import { Options } from "./Options"

// Size of one dancing bot panel before scaling
export const BOT_PANEL_SIZE = 80

const TOP_MARGIN = 16
const RECEPTOR_GAP = 12
const RECEPTOR_HALF_HEIGHT = 32
const MAX_WIDTH_FRACTION = 0.9

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
 * Returns where the enlarged dancing bot sits in dance practice mode, in stage coordinates.
 * The bot is centred horizontally and pinned to the top of the screen.
 */
export function getPracticeBotPlacement(
  stageWidth: number,
  stageHeight: number,
  gameTypeId: string
): PracticeBotPlacement | undefined {
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
 * placed directly underneath the enlarged dancing bot.
 */
export function getPracticeReceptorY(
  stageWidth: number,
  stageHeight: number,
  gameTypeId: string,
  zoom: number
): number | undefined {
  const placement = getPracticeBotPlacement(stageWidth, stageHeight, gameTypeId)
  if (!placement) return
  return placement.bottom + RECEPTOR_GAP + RECEPTOR_HALF_HEIGHT * zoom
}
