import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
class createText {
    public text: THREE.Mesh 
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
        z: number,
        blink: number = 0,
        center: boolean = true,
        parent: any = null,
        rotationX: number = 0,
        rotationY: number = 0,
        rotationZ: number = 0,
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
            let textMaterial = new THREE.MeshBasicMaterial({ color: color,transparent: true, opacity: 1.0})
            this.text = new THREE.Mesh(textGeometry, textMaterial)
            if (parent) {
                parent.add(this.text)
            }
            else {
                scene.add(this.text)
            }
            this.text.position.set(x, y, z)
            textGeometry.computeBoundingBox()
            if (center) {
                textGeometry.center()
            }
            if (blink > 0) {
                this.blink(blink)
            }
            this.text.rotateX(rotationX)
            this.text.rotateY(rotationY)
            this.text.rotateZ(rotationZ)
        })
    }
    textMesh(){
        return this.text
    }
    blink(duration:number){
        //console.log('blink')
        new TWEEN.Tween( this.text.material ).to( { opacity: 0 }, duration ).start().repeat( Infinity ).yoyo( true ).delay(500)
    }
}
export default createText
