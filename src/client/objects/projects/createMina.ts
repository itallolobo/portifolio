import * as THREE from 'three'
import createText from '../../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../../animations/floatingAnimation'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import floatingAnimationObj from '../../animations/floatingAnimation'
class Mina {
    public mina: THREE.Group
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


        loader.load( 'models/mina/scene.gltf',  ( gltf ) => {
            this.mina = gltf.scene
            this.scene.add( gltf.scene );
            console.log(gltf.scene)
            this.mina.scale.set(0.16, 0.16, 0.16)
            this.mina.rotation.set(-0,0,1.57)
            this.mina.position.set(23, -48.4, 17)
            floatingAnimationObj(this.mina)
            this.mina.traverse((child) => {
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

export default Mina


