import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
class createText {
    text: THREE.Mesh
    public camera: THREE.PerspectiveCamera
    constructor(
        camera: THREE.PerspectiveCamera,
        scene: THREE.Scene,
        loader: FontLoader,
        font: string,
        text_str: string,
        size: number,
        height: number,
        color: string,
        x: number,
        y: number,
        z: number
    ) {
        this.camera = camera
        loader.load(`fonts/${font}.json`, (font) => {
            let textGeometry = new TextGeometry(text_str, {
                font: font,
                size: size,
                height: height,
                curveSegments: 12,
                bevelEnabled: false,
            })
            let textMaterial = new THREE.MeshBasicMaterial({ color: color })
            this.text = new THREE.Mesh(textGeometry, textMaterial)
            scene.add(this.text)
            this.text.position.set(x, y, z)
            textGeometry.computeBoundingBox()
            textGeometry.center()
            
        })
    }
}
export default createText
