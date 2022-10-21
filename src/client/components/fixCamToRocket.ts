
import * as THREE from 'three'
class fixCamToRocket {
    camera: THREE.PerspectiveCamera
    rocket: THREE.Mesh
    constructor(camera: THREE.PerspectiveCamera, rocket: THREE.Mesh) {
        this.camera = camera
        this.rocket = rocket
    }
    attach(){
        this.rocket.attach(this.camera)
    }
    detach(){
        this.rocket.remove(this.camera)
    }


}

export default fixCamToRocket