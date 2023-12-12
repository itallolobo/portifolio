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
        const loader: GLTFLoader = window.global["Loader"]


        loader.load( 'models/encheu/scene.gltf',  ( gltf ) => {
            this.encheu = gltf.scene
            this.scene.add( gltf.scene );
            console.log(gltf.scene)
            this.encheu.scale.set(0.16, 0.16, 0.16)
            this.encheu.rotation.set(-0,0.1,3.14)
            this.encheu.position.set(21.5, -37.7, 16)
            floatingAnimationObj(this.encheu)
            this.encheu.traverse((child) => {
                child.userData = { URL: 'https://www.encheu.com.br' }
            });
        
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


