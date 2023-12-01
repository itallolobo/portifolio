import * as THREE from 'three'
import createText from '../../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../../animations/floatingAnimation'

class Printer {
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private fontLoader: FontLoader
    private body_bottom_top: THREE.Mesh
    private body_table: THREE.Mesh
    private bio: createText

    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, fontLoader: FontLoader) {
        this.scene = scene
        this.camera = camera
        this.fontLoader = fontLoader
        this.createPrinter()
        floatingAnimation(this.body_bottom_top)

    }

    private createPrinter() {
        const geometry = new THREE.BoxGeometry(1, 0.2, 1)
        const material = new THREE.MeshBasicMaterial({ color: 'rgb(128, 128, 128)' })
        const material_2 = new THREE.MeshBasicMaterial({ color: 'rgb(64, 64, 64)' })
        const material_3 = new THREE.MeshBasicMaterial({ color: 'rgb(99, 99, 99)' })
        this.body_bottom_top = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.015, 0.91), material)
        const body_bottom_left = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.24, 0.91), material)
        const body_bottom_right = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.24, 0.91), material)
        const body_top_top = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.015, 0.91), material_3)
        const body_top_left = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.24, 0.91), material_3)
        const body_top_right = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.24, 0.91), material_3)
        this.body_table = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.015, 0.43), material_2)
        const body_holder_table = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 0.05), material_2)

        this.scene.add(this.body_bottom_top)
        this.body_bottom_top.name = 'printer'
        this.body_bottom_top.position.set(19, -41.7, 15)  //MAIN
        this.body_bottom_top.rotateX((Math.PI * 0.0) + 0.4)

        this.body_bottom_top.add(body_bottom_left)
        this.body_bottom_top.add(body_bottom_right)
        this.body_bottom_top.add(this.body_table)
        this.body_bottom_top.add(body_holder_table)
        body_bottom_left.position.set(-0.417, -0.12, 0)
        body_bottom_right.position.set(0.417, -0.12, 0)
        this.body_table.position.set(0, 0.12, 0)
        this.body_table.name = 'printer_table'
        body_holder_table.position.set(0, 0.06, 0)

        this.body_bottom_top.add(body_top_top)
        body_top_top.add(body_top_left)
        body_top_top.add(body_top_right)
        body_top_left.position.set(-0.417, 0.12, 0)
        body_top_right.position.set(0.417, 0.12, 0)
        body_top_top.position.set(0, 0.45, -0.45)
        body_top_top.rotateX(-1.56)

        const bio = new createText(
            this.camera,
            this.scene,
            this.fontLoader,
            'Roboto Slab_Regular',
            'Teste',
            0.05,
            0.001,
            'white',
            0,
            0.13,
            0,
            0,
            true,
            this.body_bottom_top,
            -Math.PI * 0.5,
            0,
            0
        )
        this.body_bottom_top.traverse((child) => {
            child.userData = { URL: 'https://recordtv.r7.com/jornal-da-record/videos/adolescente-inventa-impressora-com-pecas-de-computador-17112018' }
        });
    }
}
export default Printer
