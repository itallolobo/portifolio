import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import animationList from '../animations/animationsList'
import books from '../objects/createBooks'
import TextHandler from './textHandler'

const textHandler = new TextHandler()

class movementHandler {
    public scene: THREE.Scene
    public camera: THREE.PerspectiveCamera
    public cameraHolder: THREE.Object3D
    public animationIndex: number
    public animationList: any = animationList
    public books: books
    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, cameraHolder: THREE.Object3D) {
        this.scene = scene
        this.camera = camera
        this.cameraHolder = cameraHolder
        this.animationIndex = 6
        this.books = new books(this.scene, this.camera, this.cameraHolder)
        const upBtn = document.getElementById('up-btn')
        const downBtn = document.getElementById('down-btn')
        this.animationController(1)
        upBtn?.addEventListener('click', () => {
            this.animationController(-1)
        })
        downBtn?.addEventListener('click', () => {
            this.animationController(1)
        })
    }

    animationController(direction: number) {
        console.log("animação "+window.global["isAnimationRunning"])
        //1 = down -1 = up
        //console.log(this.animationList)
        if (direction == -1 && this.animationIndex > 0 && window.global['isAnimationRunning']!='false') { // window.global['isAnimationRunning']==false) trava o movimento *correto*
            window.global["isAnimationRunning"] = true
            textHandler.fadeAllOut()
            this.animationIndex -= 1
            console.log(this.animationIndex)

            this.animationList[this.animationIndex](
                true,
                this.scene,
                this.camera,
                this.cameraHolder,
                this.books
            )
        } else if (direction == 1 && this.animationIndex < this.animationList.length && window.global['isAnimationRunning']!='false') {
            window.global["isAnimationRunning"] = true
            this.animationIndex += 1
            textHandler.fadeAllOut()
            console.log(this.animationIndex)
            this.animationList[this.animationIndex - 1](
                false,
                this.scene,
                this.camera,
                this.cameraHolder,
                this.books
            )
        }
    }
}

export default movementHandler
