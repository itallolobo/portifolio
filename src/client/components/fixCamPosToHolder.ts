
import * as THREE from 'three'
const fixCamPosToHolder = (camera: THREE.Camera, cameraHolder: THREE.Object3D) => {
    camera.position.x = cameraHolder.position.x
    camera.position.y = cameraHolder.position.y
    camera.position.z = cameraHolder.position.z
    //console.log(camera.position)
}

export default fixCamPosToHolder