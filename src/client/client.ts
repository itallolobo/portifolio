import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//objects
import createStars from './components/createStars'
import createText from './components/createText'
import createRocket from './components/createRocket'

//Animations
import rocketEntryAnimation from './animations/rocketEntryAnimation'


import resizeView from './components/resizeView'
import addCamToRocketGroup from './components/fixCamToRocket'


import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import { GUI } from 'dat.gui'

const scene = new THREE.Scene()
const fontLoader = new FontLoader()


const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000)
camera.position.z = 11
camera.position.y = -2
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


//const controls = new OrbitControls(camera, renderer.domElement)
const gui = new GUI()





window.addEventListener('resize', () => resizeView(camera, renderer))
resizeView(camera, renderer)

//start

var stars = new createStars(scene)
var itallo = new createText(camera,scene,fontLoader, 'Roboto Medium_Regular','Itallo Lobo', 2, 0.3, 'white', 0, 6.5, -34)
var developer = new createText(camera,scene,fontLoader, 'Roboto Slab_Regular', 'Developer_', 1.2, 0.3, 'white', 0, 4, -34 )



var rocket = new createRocket(scene)
var obj = { add: () => {} };


new rocketEntryAnimation(rocket.rocket, camera)
gui.add(obj,'add');





function animate() {

    requestAnimationFrame(animate)
    stars.updateStars()
    //here
    //controls.update()
    render()
    TWEEN.update()
}

function render() {
    renderer.render(scene, camera)
}
animate()

