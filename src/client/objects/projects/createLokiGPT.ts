import * as THREE from 'three'
import createText from '../../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../../animations/floatingAnimation'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import floatingAnimationObj from '../../animations/floatingAnimation'
class createLokiGPT {
    public lokiGPT: THREE.Group
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
        const loader: GLTFLoader = window.global["Loader"]


        loader.load( 'models/lokiGPT/scene.gltf',  ( gltf ) => {
            this.lokiGPT = gltf.scene
            this.scene.add( gltf.scene );
            console.log(gltf.scene)
            //change scale 
            this.lokiGPT.scale.set(0.16, 0.16, 0.16)
            this.lokiGPT.position.set(21, -43.7, 15)
            this.lokiGPT.rotation.set(-0.1,0.0,3.14)

            floatingAnimationObj(this.lokiGPT)

        
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

export default createLokiGPT


