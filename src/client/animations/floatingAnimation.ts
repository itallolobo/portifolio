import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
const floatingAnimation = (mesh: THREE.Mesh) => {



    const startPosition = mesh.position.clone()
    const startRotation = mesh.rotation
    const duration_max = 3700
    const duration_min = 3000
    const duration = Math.random() * (duration_max - duration_min) + duration_min
    var animation = new TWEEN.Tween(mesh.position)

        .to(
            { x: startPosition.x + 0.0, y: startPosition.y - 0.1, z: startPosition.z - 0.0 },
            duration
        )
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start()
        .onRepeat(() => {})
    animation.repeat(Infinity).yoyo(true)
        
    var animation2 = new TWEEN.Tween(mesh.rotation)
        .to(
            { x: startRotation.x + 0.05, y: startRotation.y + 0.0, z: startRotation.z + 0.0 },
            duration
        )
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start()
    animation2.repeat(Infinity).yoyo(true)
}

const floatingAnimationObj = (obj: any) => {
    const startPosition = obj.position.clone()
    const startRotation = obj.rotation
    const duration_max = 3700
    const duration_min = 3000
    const duration = Math.random() * (duration_max - duration_min) + duration_min

    var animation = new TWEEN.Tween(obj.position)
        .to(
            { x: startPosition.x + 0.0, y: startPosition.y - 0.1, z: startPosition.z - 0.0 },
            duration
        )
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start()
        .onRepeat(() => {})
    animation.repeat(Infinity).yoyo(true)
        
    var animation2 = new TWEEN.Tween(obj.rotation)
        .to(
            { x: startRotation.x + 0.05, y: startRotation.y + 0.0, z: startRotation.z + 0.0 },
            duration
        )
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start()
    animation2.repeat(Infinity).yoyo(true)
}

export default floatingAnimationObj
export {floatingAnimation}
