import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import animationList from '../animations/animationsList'
import books from '../objects/createBooks'
import TextHandler from './textHandler'

const textHandler = new TextHandler()  //inicio            //grad                    projetos              voz                   encheu                   impressora            lokigpt          robo                        mina    (21.5, -48.4, 18)    contato
const animationsPointsComp:any = [{ x: 0, y: -2, z: 11 },{ x: 3, y: -20, z: 10 },{x:20.5, y:-35, z:18},{x:20.5, y:-38.6, z:19},{x:20, y:-41.5, z:18},{x:20, y:-44.6, z:18},{x:19.4, y:-47, z:18.2},{x:23.3, y:-48.4, z:20},{x:17.5, y:-55.6, z:21}]
const animationsPointsMob:any =  [{ x: 0, y: -2, z: 11 },{ x: 1.2, y: -20.3, z: 15 },{x:18.95, y:-34.3, z:19.5},{x:21.45, y:-39.2, z:19.8},{x:19, y:-40.8, z:19.5},{x:21, y:-45.2, z:19},{x:18.45, y:-46.4, z:19},{x:22.2, y:-47.9, z:20.5},{x:16.2, y:-54.6, z:21.7}]

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
        this.animationIndex = 0
        this.books = new books(this.scene, this.camera, this.cameraHolder)
        const upBtn = document.getElementById('up-btn')
        const downBtn = document.getElementById('down-btn')
        //this.animationController(1)
        upBtn?.addEventListener('click', () => {
            this.animationController(-1)
        })
        downBtn?.addEventListener('click', () => {
            this.animationController(1)
        })
        window.addEventListener('wheel', (e) => {
            if (e.deltaY > 0) {
                this.animationController(1)
            } else {
                this.animationController(-1)
            }
        })
        window.addEventListener('keydown', (e) => {
            if (e.key == 'ArrowDown') {
                this.animationController(1)
            } else if (e.key == 'ArrowUp') {
                this.animationController(-1)
            }
        })

        //if swipe down
        var startY: number = 0
        window.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY
        })
        window.addEventListener('touchend', (e) => {
            var endY = e.changedTouches[0].clientY
            if (Math.abs(endY - startY) > 60) {
            if (endY > startY) {
                this.animationController(-1)
            } else {
                this.animationController(1)
            }
        }
        })

    }

    animationController(direction: number) {
        console.log("animação "+window.global["isAnimationRunning"])
        var animationsPoints:any = window.innerWidth < 800 ? animationsPointsMob : animationsPointsComp

        //1 = down -1 = up
        //console.log(this.animationList)
        if (direction == -1 && this.animationIndex > 0 && window.global['isAnimationRunning']==false) { // window.global['isAnimationRunning']==false) trava o movimento *correto*
            window.global["isAnimationRunning"] = true
            textHandler.fadeAllOut()
            this.animationIndex -= 1
            console.log(this.animationIndex)
            this.animationList[this.animationIndex](
                true,
                this.scene,
                this.camera,
                this.cameraHolder,
                textHandler,
                animationsPoints
            )
            if (this.animationIndex == 0) {
                $('#up-btn').animate({ opacity: '0.3' }, 1300)
                $('#up-btn').css('cursor', 'default')
            }
            else {
                $('#up-btn').animate({ opacity: '1' }, 1300)
                $('#up-btn').css('cursor', 'pointer')
            }
            if (this.animationIndex == this.animationList.length - 1) {
                $('#down-btn').animate({ opacity: '1' }, 1000)
                $('#down-btn').css('cursor', 'pointer')
            }

        } else if (direction == 1 && this.animationIndex < this.animationList.length && window.global['isAnimationRunning']==false) {
            window.global["isAnimationRunning"] = true
            this.animationIndex += 1
            textHandler.fadeAllOut()
            console.log(this.animationIndex)
            this.animationList[this.animationIndex - 1](
                false,
                this.scene,
                this.camera,
                this.cameraHolder,
                textHandler,
                animationsPoints
            )

            if (this.animationIndex == this.animationList.length) {
                $('#down-btn').animate({ opacity: '0.3' }, 2000)
                $('#down-btn').css('cursor', 'default')
            }
            else {
                $('#down-btn').animate({ opacity: '1' }, 1000)
                $('#down-btn').css('cursor', 'pointer')
            }
            if (this.animationIndex == 1) {
                $('#up-btn').animate({ opacity: '1' }, 1300)
                $('#up-btn').css('cursor', 'pointer')
            }
        }
        window.global["posIndex"] = this.animationIndex
    }
}

export default movementHandler
