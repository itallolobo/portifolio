import * as THREE from 'three'
import createText from './createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'


const createCubeSat = (scene: THREE.Scene, camera: THREE.PerspectiveCamera, fontLoader:FontLoader) => {
    const text: string = "    Itallo Lobo é um desenvol\nvedor fullstack que, ao longo \ndos últimos anos, adquiriu \numa base solida e autodidata \nem python, javascript/type\nscript e machine learning. \n    Possui habilidade em traba\nlhar com frameworks moder\nnas como Node.js e Django, \nbibliotecas como react.js e \njquery, além da habilidade de \ncriação de modelos de ML \navançados como CNNs e LSTMs."
    const geometry = new THREE.BoxGeometry(1.6, 1.6, 1.6)
    const material = new THREE.MeshBasicMaterial({ color: 'gray' })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    cube.name = 'cubeSat'
    cube.position.set(1,-20, -2)
    cube.rotation.set(0, 0, 0.2)
    const bio = new createText(camera,scene,fontLoader, 'Roboto Slab_Regular', text, 0.05, 0.01, 'black', -0.5,0.5, 0.8, 0 ,false, cube)
    return cube

}
export default createCubeSat
