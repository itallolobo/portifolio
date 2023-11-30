import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimationObj from '../animations/floatingAnimation'


class createGradLogos {
    public drumonsters: THREE.Group
    public unifei: THREE.Group
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
        const loader = new GLTFLoader();

        loader.load( 'models/unifei.glb',  ( gltf ) => {
            this.unifei = gltf.scene
            this.scene.add( gltf.scene );
            console.log(gltf.scene)
            this.unifei.scale.set(0.008, 0.008, 0.008)
this.unifei.position.set(1.2, -18.5, 1)   //(0.5, -21.4, 5)
//this.drumonsters.position.set(0.8, -20.7, 2)
this.unifei.rotation.set(1.7, 0, 0)
//this.drumonsters.rotation.set(90, 0, 0)
            floatingAnimationObj(this.unifei)

        
        }, undefined, function ( error ) {
        
            console.error( error );
        
        } );

        const loader_2 = new GLTFLoader();
        loader_2.load( 'models/drumonsters.glb',  ( gltf ) => {
            this.drumonsters = gltf.scene
            this.scene.add( gltf.scene );
            console.log(gltf.scene)
            this.drumonsters.scale.set(9, 9, 9)
            this.drumonsters.position.set(0.1, -22.4, 1)
            this.drumonsters.rotation.set(1.5, 0, 0)
            floatingAnimationObj(this.drumonsters)

        }, undefined, function ( error ) {
            
                console.error( error );
            
            } );
        this.pointLight = new THREE.PointLight(0xffffff, 0.4, 100);
        this.pointLight.position.set(0.5, -20.8, 6); // Adjust the position as needed
        this.scene.add(this.pointLight);
        //const geometry = new THREE.BoxGeometry(0.9, 1.6, 0.3)
        //const material = new THREE.MeshBasicMaterial({ color: 'blue' })
        //this.encheu = new THREE.Mesh(geometry, material)
        //this.scene.add(this.encheu)
        //this.encheu.name = 'encheu'
        //this.encheu.rotation.set(0, 0, 0)
       // 


    }
}

export default createGradLogos



//this.unifei.position.set(1.2, -19, 2)
//this.drumonsters.position.set(0.8, -20.7, 2)
//this.unifei.rotation.set(90, 0, 0)
//this.drumonsters.rotation.set(90, 0, 0)