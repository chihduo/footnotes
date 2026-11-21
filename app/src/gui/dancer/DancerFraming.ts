import {
  Box3,
  Matrix4,
  Mesh,
  Vector3,
  type Group,
  type OrthographicCamera,
} from "three"

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
  camera.updateProjectionMatrix()
}

export function getDancerFitZoom(
  camera: OrthographicCamera,
  body: Group,
  hips: Vector3,
  targetHeight: number
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
  const zoomAt = (follow: number) => {
    const target = new Vector3(
      hips.x * follow,
      targetHeight,
      hips.z * follow
    ).applyMatrix4(camera.matrixWorldInverse)
    const halfWidth = Math.max(target.x - bounds.min.x, bounds.max.x - target.x)
    const halfHeight = Math.max(
      target.y - bounds.min.y,
      bounds.max.y - target.y
    )
    return 0.94 * Math.min(camera.right / halfWidth, camera.top / halfHeight)
  }
  // At 2× the camera follows the hips. Below that it blends toward the
  // middle of the pad, so allow room at both ends of that blend.
  const tracked = zoomAt(1)
  return tracked >= 2 ? tracked : Math.min(tracked, zoomAt(0))
}
