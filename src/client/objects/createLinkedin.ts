import * as THREE from 'three'
import createText from '../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../animations/floatingAnimation'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import floatingAnimationObj from '../animations/floatingAnimation'

class createLinkedin {
    public linkedin: THREE.Group
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private fontLoader: FontLoader
    public animationGroup: TWEEN.Group
    public pointLight: THREE.PointLight

    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, fontLoader: FontLoader) {
        this.scene = scene
        this.camera = camera
        this.fontLoader = fontLoader
        this.animationGroup = new TWEEN.Group()
        this.create()
    }

    private create() {
        const loader = new GLTFLoader();

        loader.load('models/linkedin.glb', (gltf) => {
            this.linkedin = gltf.scene
            this.scene.add(gltf.scene);


            console.log(gltf.scene)
            this.linkedin.scale.set(0.6, 0.6, 0.6)
            //this.cloneVoz.position.set(0, -0.0, 0)
            if (window.innerWidth < 800) { //mobile
                this.linkedin.position.set(15.27,-56.36, 16.5)
                this.linkedin.rotation.set(0, 0, 0.2)
            }
            else{
                this.linkedin.position.set(16,-57, 16)
                this.linkedin.rotation.set(0, 0, -0.13)
            }
            floatingAnimationObj(this.linkedin);
            this.linkedin.traverse((child) => {
                child.userData = { URL: 'https://www.linkedin.com/in/itallo-lobo-08325a210/' }
            });
        }, undefined, function (error) {
            console.error(error);
        });
        this.pointLight = new THREE.PointLight(0xffffff, 0.4, 10);
        this.pointLight.position.set(16,-57, 16.5); // Adjust the position as needed


        this.scene.add(this.pointLight);
    }
}

export default createLinkedin



