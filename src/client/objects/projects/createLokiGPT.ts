import * as THREE from 'three'
import createText from '../../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../../animations/floatingAnimation'


class createLokiGPT {
    public lokiGPT: THREE.Mesh
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private fontLoader: FontLoader
    public animationGroup: TWEEN.Group

    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, fontLoader:FontLoader) {
        this.scene = scene
        this.camera = camera
        this.fontLoader = fontLoader
        this.animationGroup = new TWEEN.Group()
        this.create()
    }

    private create() {
        const geometry = new THREE.BoxGeometry(0.9, 1.6, 0.3)
        const material = new THREE.MeshBasicMaterial({ color: 'green' })
        this.lokiGPT = new THREE.Mesh(geometry, material)
        this.scene.add(this.lokiGPT)
        this.lokiGPT.name = 'lokiGPT'
        this.lokiGPT.position.set(21, -44.5, 15)
        this.lokiGPT.rotation.set(0, 0, 0)
        floatingAnimation(this.lokiGPT)


    }
}

export default createLokiGPT


