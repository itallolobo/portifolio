import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js'

class rocketEntryAnimation{
    public rocket: THREE.Mesh;
    public camera: THREE.PerspectiveCamera;
    constructor(rocket: THREE.Mesh, camera: THREE.PerspectiveCamera, camLock: any) {
        this.rocket = rocket;
        this.camera = camera;
        var animation = new TWEEN.Tween(this.rocket.position).delay(0).to({x: 0, y: -3, z: 0}, 4000).easing(TWEEN.Easing.Cubic.Out).start()
        animation.onComplete(() => {
            camLock.attach()})
        animation.chain(new TWEEN.Tween(this.rocket.position).delay(0).to({x: 0, y: 8, z: -22}, 4000).easing(TWEEN.Easing.Cubic.Out))
    }


    }
export default rocketEntryAnimation