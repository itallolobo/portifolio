import { MathUtils } from 'three';
import * as THREE from 'three'
const resizeView = (camera: THREE.PerspectiveCamera,renderer: THREE.WebGLRenderer) => {
    const fov = 50;
    const planeAspectRatio = 16 / 9;
        camera.aspect = window.innerWidth / window.innerHeight;
        
        if (camera.aspect > planeAspectRatio) {
            // window too large
            const cameraHeight = Math.tan(MathUtils.degToRad(fov / 2));
            const ratio = camera.aspect / planeAspectRatio;
            const newCameraHeight = cameraHeight / ratio;
            camera.fov = MathUtils.radToDeg(Math.atan(newCameraHeight)) * 2;
        } else {
            // window too narrow
            camera.fov = fov;
        }
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        console.log(camera.aspect)
    }
export default resizeView