import * as THREE from 'three'
const resetCameraRotation = (camera: THREE.Camera) => {
    camera.rotation.x = 0
    camera.rotation.y = 0
    camera.rotation.z = 0
}
export default resetCameraRotation