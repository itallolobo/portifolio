import * as THREE from 'three'
import createText from '../../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../../animations/floatingAnimation'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import floatingAnimationObj from '../../animations/floatingAnimation'
class Encheu {
    public encheu: THREE.Group
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
        const loader = new GLTFLoader();

        loader.load( 'models/smartphone.gltf',  ( gltf ) => {
            this.encheu = gltf.scene
            this.scene.add( gltf.scene );
            console.log(gltf.scene)
            this.encheu.position.set(22, -38.5, 15)
            floatingAnimationObj(this.encheu)

        
        }, undefined, function ( error ) {
        
            console.error( error );
        
        } );
        //const geometry = new THREE.BoxGeometry(0.9, 1.6, 0.3)
        //const material = new THREE.MeshBasicMaterial({ color: 'blue' })
        //this.encheu = new THREE.Mesh(geometry, material)
        //this.scene.add(this.encheu)
        //this.encheu.name = 'encheu'
        //this.encheu.rotation.set(0, 0, 0)
       // 


    }
}

export default Encheu


