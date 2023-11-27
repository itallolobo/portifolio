import * as THREE from 'three'
import createText from '../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'

class createLinkedin {
    public linkedin: THREE.Mesh
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
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.2)
        const material = new THREE.MeshBasicMaterial({ color: 'white' })
        this.linkedin = new THREE.Mesh(geometry, material)
        this.scene.add(this.linkedin)
        this.linkedin.name = 'linkedin'
        this.linkedin.position.set(16.5,-56.7, 16)
        this.linkedin.rotation.set(0, 0, -0.13)
        //const text: string = "Itallo Lobo é um desenvol\nvedor fullstack que, ao longo \ndos últimos anos, adquiriu \numa base solida e autodidata \nem python, javascript/type\nscript e machine learning. \n    Possui habilidade em traba\nlhar com frameworks moder\nnas como Node.js e Django, \nbibliotecas como react.js e \njquery, além da habilidade de \ncriação de modelos de ML \navançados como CNNs e LSTMs."
        //new createText(this.camera,this.scene,this.fontLoader, 'Roboto Slab_Regular', text, 0.05, 0.01, 'black', -0.5,0.5, 0.8, 0 ,false, this.cube)
    }
}
     
export default createLinkedin



