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
                //point the rocket at text
                var rotation = getRotationPointed(this.rocket, 0, 10, -60)
                this.rocket.rotation.x = rotation.x
                this.rocket.rotation.y = rotation.y
                this.rocket.rotation.z = rotation.z
                new TWEEN.Tween(this.rocket.rotation)
                    .delay(0)
                    .to({x: rotation.x, y:rotation.y, z:rotation.z}, 3000)
                    //.start()
                    .onStart(() => {
                        console.log('start')
                    })
                    .onUpdate((coords) => {
                        this.rocket.rotation.y = coords.y
                    })
                    .onComplete(() => {
                        //this.rocket.lookAt(0, 10, -60)
                        //console.log(this.rocket.rotation)
                        new TWEEN.Tween(this.rocket.position)
                            .delay(0)
                            .to({ x: 0, y: 10, z: -60 }, 7000)
                            .easing(TWEEN.Easing.Cubic.Out)
                            .start()
                            .onStart(() => {
                                console.log(this.rocket.position.y - this.camera.position.y)
                            })
                            .onUpdate(() => {
                                this.camera.position.set(
                                    this.rocket.position.x,
                                    this.rocket.position.y + 1,
                                    this.rocket.position.z + 11
                                )
                            })
                            .onComplete(() => {
                                console.log(camera)
                            })
                    })
            })
    }
}

export default rocketEntryAnimation
