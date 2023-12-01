import * as THREE from 'three'
import createText from '../misc/createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimation from '../animations/floatingAnimation'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import floatingAnimationObj from '../animations/floatingAnimation'

class Clipboard {
    public clipboard: THREE.Group
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

        loader.load('models/clipboard.glb', (gltf) => {
            this.clipboard = gltf.scene
            this.scene.add(gltf.scene);


            console.log(gltf.scene)
            this.clipboard.scale.set(3.2, 3.2, 3.2)
            //this.cloneVoz.position.set(0, -0.0, 0)
            this.clipboard.position.set(16.5,-55.1, 16)
            if (window.innerWidth < 800) { //mobile
                this.clipboard.rotation.set(0, -1.7, 0.1)

            }
            else
                this.clipboard.rotation.set(0, -1.1, 0.1)
            floatingAnimationObj(this.clipboard);
            this.clipboard.traverse((child) => {
                child.userData = { URL: 'https://www.instagram.com/itallolobo/' }
            });
        }, undefined, function (error) {
            console.error(error);
        });
        this.pointLight = new THREE.PointLight(0xffffff, 0.8, 10);
        this.pointLight.position.set(16.5,-55.5, 18); // Adjust the position as needed

        this.scene.add(this.pointLight);
    }
}

export default Clipboard



