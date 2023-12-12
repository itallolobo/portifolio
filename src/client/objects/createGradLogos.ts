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
        const loader: GLTFLoader = window.global["Loader"]


        loader.load( 'models/unifei.glb',  ( gltf ) => {
            this.unifei = gltf.scene
            this.scene.add( gltf.scene );
            console.log(gltf.scene)
            this.unifei.scale.set(0.008, 0.008, 0.008)
            if (window.innerWidth < 800) { //mobile
                this.unifei.position.set(0.7, -20.8, 3)
                this.unifei.rotation.set(1.7, 0, 0.1)
            } else {
            this.unifei.position.set(1.2, -18.5, 1)   //(0.5, -21.4, 5)
            this.unifei.rotation.set(1.8, 0.3, 0)
            }
            this.unifei.traverse((child) => {
                child.userData = { URL: 'https://unifei.edu.br/' }
            });
            //this.drumonsters.rotation.set(90, 0, 0)
            floatingAnimationObj(this.unifei)

        
        }, undefined, function ( error ) {
        
            console.error( error );
        
        } );

        loader.load( 'models/drumonsters.glb',  ( gltf ) => {
            this.drumonsters = gltf.scene
            this.scene.add( gltf.scene );
            console.log(gltf.scene)
            this.drumonsters.scale.set(9, 9, 9)
            if (window.innerWidth < 800) { //mobile
                this.drumonsters.position.set(0.6, -24, 2)
                this.drumonsters.rotation.set(1.5, -0.2, 0)
            } else {
                this.drumonsters.position.set(0.1, -22.4, 1)
                this.drumonsters.rotation.set(1.5, -0.2, 0)

            }
            //apply user data to all children
            this.drumonsters.traverse((child) => {
                child.userData = { URL: 'https://www.instagram.com/drumonsters/' }
            });
            floatingAnimationObj(this.drumonsters)

        }, undefined, function ( error ) {
            
                console.error( error );
            
            } );
        if(window.innerWidth < 800){
            this.pointLight = new THREE.PointLight(0xffffff, 0.5, 100);

            this.pointLight.position.set(1.1, -22.4, 7); // Adjust the position as needed
        }
        else{
        this.pointLight = new THREE.PointLight(0xffffff, 0.35, 100);

            this.pointLight.position.set(0.5, -20.8, 6); // Adjust the position as needed
        }
        this.scene.add(this.pointLight);

       // 


    }

}

export default createGradLogos
