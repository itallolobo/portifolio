import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as TWEEN from '@tweenjs/tween.js'
import floatingAnimationObj from '../../animations/floatingAnimation'

class createCloneVoz {
    public cloneVoz: THREE.Group
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
        const loader: GLTFLoader = window.global["Loader"]

        loader.load('models/casette/casette.gltf', (gltf) => {
            this.cloneVoz = gltf.scene
            this.scene.add(gltf.scene);

            // Set material emissive
            this.cloneVoz.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    //set to transparent
                    //const emissiveColor = new THREE.Color(0xffffff);
                    //child.material.emissive = emissiveColor;
                   // child.material.emissiveIntensity = 0.5; // Adjust the intensity as needed
                }
            });

            console.log(gltf.scene)
            this.cloneVoz.scale.set(2, 2, 2)
            this.cloneVoz.rotation.set(-0, 0.3,0)
            //this.cloneVoz.position.set(0, -0.0, 0)
            this.cloneVoz.position.set(19, -35.1, 14)
            this.cloneVoz.traverse((child) => {
                child.userData = { URL: 'https://veja.abril.com.br/coluna/matheus-leitao/ouca-pela-primeira-vez-a-voz-do-pintor-candido-portinari/' }
            });
            floatingAnimationObj(this.cloneVoz);

            //detect click
            
        }, undefined, function (error) {
            console.error(error);
        });
        this.pointLight = new THREE.PointLight(0xffffff, 0.5, 100);
        this.pointLight.position.set(19, -34, 15); // Adjust the position as needed
        this.scene.add(this.pointLight);

        
    }
}

export default createCloneVoz;
