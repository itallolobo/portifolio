import 'normalize.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import hud from './components/hud'
//objects
import createStars from './components/createStars'
import createText from './components/createText'
import createRocket from './components/createRocket'
import createCubeSat from './components/createCubeSat'
import createPrinter from './components/createPrinter'
//Animations
import rocketEntryAnimation from './animations/rocketEntryAnimation'
import scrollAnimation from './components/scrollAnimation'


import resizeView from './components/resizeView'
import fixCamPosToHolder from './components/fixCamPosToHolder'


import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import { GUI } from 'dat.gui'



//initialize hud
hud()
window.scrollTo(0, 0)

//initialize scene
const scene = new THREE.Scene()
const fontLoader = new FontLoader()



//initialize camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000)
const cameraHolder = new THREE.Object3D()
//cameraHolder.add(camera)
cameraHolder.position.z = 11
cameraHolder.position.y = -2
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


//const controls = new OrbitControls(camera, renderer.domElement)
//const gui = new GUI()


//resize view
window.addEventListener('resize', () => resizeView(camera, renderer))
resizeView(camera, renderer)



//section1
var stars = new createStars(scene)
var itallo = new createText(camera,scene,fontLoader, 'Roboto Medium_Regular','Itallo Lobo', 2, 0.3, 'white', 0, 6.5, -34)
var developer = new createText(camera,scene,fontLoader, 'Roboto Slab_Regular', 'Developer', 1.2, 0.3, 'white', -0.5, 4, -34 )
var slab = new createText(camera,scene,fontLoader, 'Roboto Slab_Regular', '_', 1.1, 0.3, 'white', 3.8, 3.5, -34,200)

var rocket = new createRocket(scene)
new rocketEntryAnimation(rocket.rocket, camera)

//section2
var cubeSat = createCubeSat(scene,camera,fontLoader)


//section3
var printer = createPrinter(scene,camera,fontLoader)


//scroll init
//const scroll = new scrollAnimation(scene, camera,cameraHolder)






function animate() {
   
    requestAnimationFrame(animate)
    //scroll.animate()
    stars.updateStars()
    fixCamPosToHolder(camera,cameraHolder)
    //here
    //controls.update()
    render()
    TWEEN.update()
}

function render() {
    renderer.render(scene, camera)
}
animate()


