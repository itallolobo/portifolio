import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import getRotationPointed from '../components/getRotationPointed'
class rocketEntryAnimation {
    public rocket: THREE.Mesh
    public camera: THREE.PerspectiveCamera

    constructor(rocket: THREE.Mesh, camera: THREE.PerspectiveCamera) {
        this.rocket = rocket
        this.camera = camera
        var animation = new TWEEN.Tween(this.rocket.position)
            .delay(0)
            .to({ x: 0, y: -3, z: 0 }, 7000)
            .easing(TWEEN.Easing.Cubic.Out)
            .start()
            .onStart(() => {
            })
            .onComplete(() => {

            })
    }
}

export default rocketEntryAnimation
