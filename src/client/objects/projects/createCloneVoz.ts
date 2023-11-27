import * as THREE from 'three'
import createText from '../../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../../animations/floatingAnimation'

class createCloneVoz {
    public cloneVoz: THREE.Mesh
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
        const geometry = new THREE.BoxGeometry(1.6, 1.3, 0.3)
        const material = new THREE.MeshBasicMaterial({ color: 'gray' })
        this.cloneVoz = new THREE.Mesh(geometry, material)
        this.scene.add(this.cloneVoz)
        this.cloneVoz.name = 'liraAi'
        this.cloneVoz.position.set(19, -34.8, 14)
        this.cloneVoz.rotation.set(0, 0, 0)
        floatingAnimation(this.cloneVoz)


    }
}

export default createCloneVoz


