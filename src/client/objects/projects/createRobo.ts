import * as THREE from 'three'
import createText from '../../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../../animations/floatingAnimation'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import floatingAnimationObj from '../../animations/floatingAnimation'
class Robo {
    public robo: THREE.Group
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private fontLoader: FontLoader
    public animationGroup: TWEEN.Group
    public pointLight: THREE.PointLight

    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, fontLoader:FontLoader) {
        this.scene = scene
        this.camera = camera
        this.fontLoader = fontLoader
        this.animationGroup = new TWEEN.Group()
        this.create()
    }

    private create() {
        const loader: GLTFLoader = window.global["Loader"]


        loader.load( 'models/robo.glb',  ( gltf ) => {
            this.robo = gltf.scene
            this.scene.add( gltf.scene );
            console.log(gltf.scene)
            this.robo.scale.set(0.05, 0.05, 0.05)
            this.robo.rotation.set(0.4,-0.3,0)
            this.robo.position.set(18.5, -47, 15)
            floatingAnimationObj(this.robo)
            this.robo.traverse((child) => {
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

       this.pointLight = new THREE.PointLight(0xffffff, 3, 3);
       this.pointLight.position.set(19.3, -46, 16); // Adjust the position as needed
       this.scene.add(this.pointLight);
    }
}

export default Robo


