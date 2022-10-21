import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'

class rocketEntryAnimation {
    public rocket: THREE.Mesh
    public camera: THREE.PerspectiveCamera
    

    constructor(rocket: THREE.Mesh, camera: THREE.PerspectiveCamera) {
        this.rocket = rocket
        this.camera = camera
        var animation = new TWEEN.Tween(this.rocket.position)
            .delay(0)
            .to({ x: 0, y: -3, z: 0 }, 4000)
            .easing(TWEEN.Easing.Cubic.Out)
            .start()
            .onStart(() => {console.log('start')})
            .onComplete(() => {
                new TWEEN.Tween(this.rocket.rotation)
                    .delay(0)
                    .to({ x: 0.5, y: 0, z: 0 }, 4000)
                    .easing(TWEEN.Easing.Cubic.Out)
                    .start()
                    .onStart(() => {})
                    .onComplete(() => {
            
                        new TWEEN.Tween(this.rocket.position)
                            .delay(0)
                            .to({ x: 0, y: 10, z: -60 }, 7000)
                            .easing(TWEEN.Easing.Cubic.Out)
                            .start()
                            .onStart(() => {console.log(this.rocket.position.y-this.camera.position.y)})
                            .onUpdate(() => {
                                this.camera.position.set(this.rocket.position.x, this.rocket.position.y+1, this.rocket.position.z+11)
                            })
                            .onComplete(() => {
                                console.log(camera)
                            })
                    })
            })
    }
}
export default rocketEntryAnimation