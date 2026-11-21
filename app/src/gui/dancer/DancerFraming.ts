import { Box3, Matrix4, Mesh, type Group, type OrthographicCamera } from "three"

// The orbit target is the stationary pad center in both stage and camera space.
export const PAD_CENTER_FROM_TOP = 0.75

// Fixed bounds cover steps at the pad edges, extended arms, and a standing head.
const dancerBounds = new Box3()

export function resizeDancerProjection(
  camera: OrthographicCamera,
  width: number,
  height: number,
  padWidth: number
) {
  const unitsPerPixel = Math.max(1.85 / height, (padWidth + 0.26) / width)
  const frameWidth = width * unitsPerPixel
  const frameHeight = height * unitsPerPixel
  camera.updateMatrixWorld()
  const radiusX = padWidth / 2 + 0.2
  dancerBounds.min.set(-radiusX, -0.07, -0.62)
  dancerBounds.max.set(radiusX, 1.8, 0.62)
  dancerBounds.applyMatrix4(camera.matrixWorldInverse)
  // The sprite can grow past the original pad area. Cover the complete pose
  // and deck even when a double pad is viewed end-on or the user zooms in.
  const extent = Math.max(
    1,
    camera.zoom *
      Math.max(
        (2 * Math.max(-dancerBounds.min.x, dancerBounds.max.x)) / frameWidth,
        dancerBounds.max.y / (frameHeight * PAD_CENTER_FROM_TOP),
        -dancerBounds.min.y / (frameHeight * (1 - PAD_CENTER_FROM_TOP))
      )
  )
  camera.right = (width * unitsPerPixel * extent) / 2
  camera.top = (height * unitsPerPixel * extent) / 2
  camera.left = -camera.right
  camera.bottom = -camera.top
  camera.setViewOffset(
    width,
    height,
    0,
    (0.5 - PAD_CENTER_FROM_TOP) * height,
    width,
    height
  )
  return extent
}

export function getDancerFitZoom(
  camera: OrthographicCamera,
  body: Group,
  extent: number
) {
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
  const height = (camera.top - camera.bottom) / extent
  const margin = 0.03
  const halfWidth = (camera.right / extent) * (1 - 2 * margin)
  const fractionOfView = Math.max(
    Math.max(-bounds.min.x, bounds.max.x) / halfWidth,
    bounds.max.y / (height * (PAD_CENTER_FROM_TOP - margin)),
    -bounds.min.y / (height * (1 - PAD_CENTER_FROM_TOP - margin))
  )
  return 1 / fractionOfView
}
