import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import createPrinter from './components/createPrinter'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.shadowMap.enabled = true
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})
let ambient, point
ambient = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambient);

// Add a point light that will cast shadows
point = new THREE.PointLight(0xffffff, 1);
point.position.set(25, 0, 25);
point.castShadow = true;
point.shadow.mapSize.width = 1024;
point.shadow.mapSize.height = 1024;
scene.add(point);
const cube = new THREE.Mesh(geometry, material)
//scene.add(cube)
const fontLoader = new FontLoader()
const printer = createPrinter(scene, camera, fontLoader)


window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}
animate()
