import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import books from '../objects/createBooks'
import * as $ from 'jquery'
import { Console } from 'console'






function hideObject(object: THREE.Object3D, isReversed: boolean) { //quebrado
    console.log(object)
    if (isReversed) {
        object.visible = true
        return
    }
    object.visible = false
}



const animationList: any = [
    (
        isReversed: boolean = false,
        scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        cameraHolder: THREE.Object3D,
        textHandler: any,
        animationsPoints: any
    ) => {
        window.global["isAnimationRunning"] = true
        const start = animationsPoints[0]
        const end = animationsPoints[1]
        new TWEEN.Tween(cameraHolder.position)
            .to(isReversed ? start : end, 1300)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(() => {
                window.global["isAnimationRunning"] = false
                //books.create()
                console.log('animation 1')
                textHandler.fadeIn(0, isReversed)

                

            })
    },
    (
        isReversed: boolean = false,
        scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        cameraHolder: THREE.Object3D,
        textHandler: any,
        animationsPoints: any
    ) => {
        window.global["isAnimationRunning"] = true
        const start = animationsPoints[1]
        const end = animationsPoints[2]
        new TWEEN.Tween(cameraHolder.position)
            

            .to(isReversed ? start : end, 1600)  //1600
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(() => {
                console.log('animation 3')
                textHandler.fadeIn(1, isReversed)
                //books.animate(isReversed)
                window.global["isAnimationRunning"] = false
                console.log("isReversedd", isReversed)

            })
    },
    (
        isReversed: boolean = false,
        scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        cameraHolder: THREE.Object3D,
        textHandler: any,
        animationsPoints: any
    ) => {
        window.global["isAnimationRunning"] = true
        const start = animationsPoints[2]
        const end = animationsPoints[3]
        new TWEEN.Tween(cameraHolder.position)
            

            .to(isReversed ? start : end, 1000)  //1600
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(() => {
                console.log('animation 3')
                textHandler.fadeIn(2, isReversed)
                //books.animate(isReversed)
                window.global["isAnimationRunning"] = false
                console.log("isReversedd", isReversed)

            })
    },
    (
        isReversed: boolean = false,
        scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        cameraHolder: THREE.Object3D,
        textHandler: any,
        animationsPoints: any
    ) => {
        window.global["isAnimationRunning"] = true
        const start = animationsPoints[3]
        const end = animationsPoints[4]
        new TWEEN.Tween(cameraHolder.position)
            

            .to(isReversed ? start : end, 1000)  //1600
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(() => {
                console.log('animation 3')
                textHandler.fadeIn(3, isReversed)
                //books.animate(isReversed)
                window.global["isAnimationRunning"] = false
                console.log("isReversedd", isReversed)
                hideObject(window.global["projectObjets"][0], isReversed)

            })
    },
    (
        isReversed: boolean = false,
        scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        cameraHolder: THREE.Object3D,
        textHandler: any,
        animationsPoints: any
    ) => {
        window.global["isAnimationRunning"] = true
        const start = animationsPoints[4]
        const end = animationsPoints[5]
        new TWEEN.Tween(cameraHolder.position)
            

            .to(isReversed ? start : end, 1000)  //1600
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(() => {
                console.log('animation 3')
                textHandler.fadeIn(4, isReversed)
                //books.animate(isReversed)
                window.global["isAnimationRunning"] = false
                console.log("isReversedd", isReversed)
                hideObject(window.global["projectObjets"][0], isReversed)

            })
    },
    (
        isReversed: boolean = false,
        scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        cameraHolder: THREE.Object3D,
        textHandler: any,
        animationsPoints: any
    ) => {
        window.global["isAnimationRunning"] = true
        const start = animationsPoints[5]
        const end = animationsPoints[6]
        new TWEEN.Tween(cameraHolder.position)
            

            .to(isReversed ? start : end, 1000)  //1600
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(() => {
                console.log('animation 3')
                textHandler.fadeIn(5, isReversed)
                //books.animate(isReversed)
                window.global["isAnimationRunning"] = false
                console.log("isReversedd", isReversed)
                hideObject(window.global["projectObjets"][0], isReversed)

            })
    },
    (
        isReversed: boolean = false,
        scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        cameraHolder: THREE.Object3D,
        textHandler: any,
        animationsPoints: any
    ) => {
        window.global["isAnimationRunning"] = true
        const start = animationsPoints[6]
        const end = animationsPoints[7]
        new TWEEN.Tween(cameraHolder.position)
            
            .to(isReversed ? start : end, 2000)  //1600
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start()
            .onComplete(() => {
                console.log('animation 3')
                textHandler.fadeIn(6, isReversed)
                //books.animate(isReversed)
                window.global["isAnimationRunning"] = false
                console.log("isReversedd", isReversed)
                hideObject(window.global["projectObjets"][0], isReversed)

            })
    },
    
]

export default animationList
