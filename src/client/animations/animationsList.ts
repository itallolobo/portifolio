import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import books from '../objects/createBooks'
import TextHandler from '../handlers/textHandler'
import * as $ from 'jquery'
import { Console } from 'console'

const isMobile = window.innerWidth < 600
                                                                 //uni                //projetos            //clone               //encheu                  //printer              //loki
const animationsPointsComp:any = [{ x: 0, y: -2, z: 11 },{ x: 3, y: -20, z: 10 },{x:20, y:-40.2, z:35},{x:20.5, y:-35, z:18},{x:20.5, y:-38.6, z:19},{x:20, y:-41.5, z:18},{x:20, y:-44.6, z:18},{x:15, y:-55.6, z:21}]

const animationsPointsMob:any = [{ x: 0, y: -2, z: 11 },{ x: 3, y: -20, z: 10 },{x:20, y:-40.2, z:35},{x:20.5, y:-35, z:18},{x:20.5, y:-38.6, z:19},{x:20, y:-41.5, z:18},{x:20, y:-44.6, z:18},{x:15, y:-55.6, z:21}]
const animationsPoints:any = isMobile ? animationsPointsMob : animationsPointsComp

const textHandler = new TextHandler()




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
        books: books
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
        books: books
    ) => {
        window.global["isAnimationRunning"] = true
        const start = animationsPoints[1]
        const end = animationsPoints[2]
        new TWEEN.Tween(cameraHolder.position)
            

            .to(isReversed ? start : end, 300)  //1600
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
        books: books
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
        books: books
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
        books: books
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
        books: books
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
        books: books
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
                textHandler.fadeIn(5, isReversed)
                //books.animate(isReversed)
                window.global["isAnimationRunning"] = false
                console.log("isReversedd", isReversed)
                hideObject(window.global["projectObjets"][0], isReversed)

            })
    },
    
]

export default animationList
