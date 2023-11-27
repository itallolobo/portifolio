import * as THREE from 'three'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'

class createGradLogos {
    public unifei: THREE.Mesh
    public drumonsters: THREE.Mesh
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

        const material_uni = new THREE.MeshBasicMaterial({ color: 'blue' })
        const material_dru = new THREE.MeshBasicMaterial({ color: 'cyan' })

        this.unifei = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.2, 32), material_uni)
        this.drumonsters = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.2, 32), material_dru)
        this.scene.add(this.unifei)
        this.scene.add(this.drumonsters)
        this.unifei.name = 'unifei'
        this.drumonsters.name = 'drumonsters'
        this.unifei.position.set(1.2, -19, 2)
        this.drumonsters.position.set(0.8, -20.7, 2)
        this.unifei.rotation.set(90, 0, 0)
        this.drumonsters.rotation.set(90, 0, 0)
        //const text: string = "Itallo Lobo é um desenvol\nvedor fullstack que, ao longo \ndos últimos anos, adquiriu \numa base solida e autodidata \nem python, javascript/type\nscript e machine learning. \n    Possui habilidade em traba\nlhar com frameworks moder\nnas como Node.js e Django, \nbibliotecas como react.js e \njquery, além da habilidade de \ncriação de modelos de ML \navançados como CNNs e LSTMs."
        //new createText(this.camera,this.scene,this.fontLoader, 'Roboto Slab_Regular', text, 0.05, 0.01, 'black', -0.5,0.5, 0.8, 0 ,false, this.cube)
    }
}

export default createGradLogos



