import * as THREE from 'three'
import createText from '../../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../../animations/floatingAnimation'

class EspPilot {
    public plane: THREE.Mesh
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
        const geometry = new THREE.BoxGeometry(0.3, 0.5, 1)
        const material = new THREE.MeshBasicMaterial({ color: 'red' })
        this.plane = new THREE.Mesh(geometry, material)
        this.scene.add(this.plane)
        this.plane.name = 'plane'
        this.plane.position.set(24, -91, 18)
        this.plane.rotation.set(0, 0, 0)
        floatingAnimation(this.plane)


    }
}

export default EspPilot


