import { Mesh, MeshLambertMaterial } from "three"
import { PLYLoader } from "three/addons/loaders/PLYLoader.js"
import headModel from "../../../assets/dancer/head.ply?raw"
import leftHandModel from "../../../assets/dancer/left-hand.ply?raw"
import svgFaces from "../../../assets/dancer/svg-faces.json"

export function createDancerAnatomy(useSimplifiedFaces: boolean) {
  const loader = new PLYLoader()
  const surface = new MeshLambertMaterial({ vertexColors: true })
  const head = loader.parse(headModel)
  const left = loader.parse(leftHandModel)
  // SVG draws separately shaded triangles as DOM paths during playback.
  if (useSimplifiedFaces) {
    head.setIndex(svgFaces.head)
    left.setIndex(svgFaces.hand)
  }
  const right = left.clone().scale(-1, 1, 1)
  // Reflect the winding along with the hand so both renderers see its outside.
  const triangles = right.getIndex()!
  for (let i = 0; i < triangles.count; i += 3) {
    const b = triangles.getX(i + 1)
    triangles.setX(i + 1, triangles.getX(i + 2))
    triangles.setX(i + 2, b)
  }
  return {
    head: new Mesh(head, surface),
    hands: [new Mesh(left, surface), new Mesh(right, surface)],
  }
}
