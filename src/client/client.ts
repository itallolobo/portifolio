import 'normalize.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import hud from './components/hud'
import movementHandler from './handlers/movementHandler'
import randomRange from './components/randomRange'
import floatingAnimation from './animations/floatingAnimation'

//objects
import createStars from './objects/createStars'
import createText from './misc/createText'
import createRocket from './objects/createRocket'
import createClipboard from './objects/createClipboard'
import createLinkedin from './objects/createLinkedin'

import createCloneVoz from './objects/projects/createCloneVoz'
import createEncheu from './objects/projects/createEncheu'
import createPrinter from './objects/projects/createPrinter'
import createLokiGPT from './objects/projects/createLokiGPT'

import createGradLogos from './objects/createGradLogos'
//Animations
import rocketEntryAnimation from './animations/rocketEntryAnimation'

//import namespace 
import global from './components/globalnamespace'

import resizeView from './components/resizeView'
import fixCamPosToHolder from './components/fixCamPosToHolder'



import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import * as TWEEN from '@tweenjs/tween.js'
import { GUI } from 'dat.gui'

const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();


(<any>window).global = global

window.global["isAnimationRunning"] = false

//initialize hud
hud()

window.scrollTo(0, 0)

//initialize scene
const scene = new THREE.Scene()
const fontLoader = new FontLoader()

const isMobile = window.innerWidth < 800 ? true : false
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

const resizeCallback = () => {
    resizeView(camera, renderer)
}
resizeView(camera, renderer)
window.addEventListener('resize',resizeCallback)

const onMouseClick = (event: MouseEvent) => {
    //check if is left click or mobile
    if (event.button != 0) {
        return
    }
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children);

     for (let i = 0; i < intersects.length; i++) {
        //check if userdata has URL
        if (intersects[i].object.userData["URL"]) {
            window.open(intersects[i].object.userData["URL"], '_blank')
            console.log(intersects[i].object.userData)
            break
        }
    
}
}
document.addEventListener('mousedown', onMouseClick, false);




//section1

var stars = new createStars(scene)
var itallo = new createText(camera,scene,fontLoader, 'Roboto Medium_Regular','Itallo Lobo', 2, 0.3, 'white', 0, 6.5, -34)
var developer = new createText(camera,scene,fontLoader, 'Roboto Slab_Regular', 'Developer', 1.2, 0.3, 'white', -0.5, 4, -34 )
var slab = new createText(camera,scene,fontLoader, 'Roboto Slab_Regular', '_', 1.1, 0.3, 'white', 3.8, 3.5, -34,200)

var rocket = new createRocket(scene)
new rocketEntryAnimation(rocket.rocket, camera)
//floatingAnimation(rocket.rocket)


//section2
//var cubeSat = createCubeSat(scene,camera,fontLoader)
var clipboard = new createClipboard(scene,camera,fontLoader)
var linkedin = new createLinkedin(scene,camera,fontLoader)

//floatingAnimation(clipboard.clipboard)
//floatingAnimation(linkedin.linkedin)
console.log(clipboard)

//section3

var gradLogos = new createGradLogos(scene,camera,fontLoader)

//section4
var cloneVoz = new createCloneVoz(scene,camera,fontLoader)
var encheu = new createEncheu(scene,camera,fontLoader)
var printer = new createPrinter(scene,camera,fontLoader)
var lokiGPT = new createLokiGPT(scene,camera,fontLoader)

window.global["projectObjets"] = [cloneVoz,encheu,printer,lokiGPT]


var movHandler = new movementHandler(scene,camera,cameraHolder)

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
function animate() {
   
    requestAnimationFrame(animate)
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


