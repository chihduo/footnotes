import { Box3, Matrix4, Mesh, type Group, type OrthographicCamera } from "three"

// Leave room for the body above the pad and the nearest arrows below it.
const PAD_CENTER_FROM_TOP = 0.75

export function resizeDancerProjection(
  camera: OrthographicCamera,
  width: number,
  height: number,
  referenceWidth: number,
  referenceHeight: number,
  padWidth: number
) {
  // The default panel sets the pixel scale. More window space exposes more
  // of the same pose at the same magnification.
  const unitsPerPixel = Math.max(
    1.92 / referenceHeight,
    (padWidth + 0.26) / referenceWidth
  )
  camera.right = (width * unitsPerPixel) / 2
  camera.top = (height * unitsPerPixel) / 2
  camera.left = -camera.right
  camera.bottom = -camera.top
  // A view offset holds the orbit target at the same pixel as the zoom changes.
  camera.setViewOffset(
    width,
    height,
    0,
    (0.5 - PAD_CENTER_FROM_TOP) * height,
    width,
    height
  )
}

export function getDancerFitZoom(camera: OrthographicCamera, body: Group) {
  camera.updateMatrixWorld()
  body.updateWorldMatrix(true, true)
  // Fit the posed limbs, including outstretched hands and feet, along the camera axes.
  const bounds = new Box3()
  const limb = new Box3()
  const transform = new Matrix4()
  body.traverse(object => {
    if (!(object instanceof Mesh)) return
    const geometry = object.geometry
    if (!geometry.boundingBox) geometry.computeBoundingBox()
    transform.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld)
    bounds.union(limb.copy(geometry.boundingBox).applyMatrix4(transform))
  })
  if (bounds.isEmpty()) return camera.zoom
  const height = camera.top - camera.bottom
  const margin = 0.03
  const halfWidth = camera.right * (1 - 2 * margin)
  const fractionOfView = Math.max(
    Math.max(-bounds.min.x, bounds.max.x) / halfWidth,
    bounds.max.y / (height * (PAD_CENTER_FROM_TOP - margin)),
    -bounds.min.y / (height * (1 - PAD_CENTER_FROM_TOP - margin))
  )
  return 1 / fractionOfView
}
