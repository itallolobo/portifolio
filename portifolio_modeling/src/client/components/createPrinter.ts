import * as THREE from 'three'
import createText from './createText'
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'


const createPrinter = (scene: THREE.Scene, camera: THREE.PerspectiveCamera, fontLoader:FontLoader) => {

    const geometry = new THREE.BoxGeometry(1, 0.2, 1)
    const material = new THREE.MeshBasicMaterial({ color: 'rgb(128, 128, 128)' })
    const material_2 = new THREE.MeshBasicMaterial({ color: 'rgb(64, 64, 64)' })
    const material_3 = new THREE.MeshBasicMaterial({ color: 'rgb(99, 99, 99)' })
    const body_bottom_top = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.015, 0.91), material)
    const body_bottom_left = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.24, 0.91), material)
    const body_bottom_right = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.24, 0.91), material)
    const body_top_top = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.015, 0.91), material_3)
    const body_top_left = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.24, 0.91), material_3)
    const body_top_right = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.24, 0.91), material_3)
    const body_table = new THREE.Mesh(new THREE.BoxGeometry(0.43, 0.015, 0.43), material_2)
    const body_holder_table = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 0.05), material_2)
    
    
    scene.add(body_bottom_top)
    body_bottom_top.add(body_bottom_left)
    body_bottom_top.add(body_bottom_right)
    body_bottom_top.add(body_table)
    body_bottom_top.add(body_holder_table)
    body_bottom_left.position.set(-0.417, -0.12, 0)
    body_bottom_right.position.set(0.417, -0.12, 0)
    body_table.position.set(0, 0.12, 0)
    body_holder_table.position.set(0, 0.06, 0)


    body_bottom_top.add(body_top_top)
    body_top_top.add(body_top_left)
    body_top_top.add(body_top_right)
    body_top_left.position.set(-0.417, 0.12, 0)
    body_top_right.position.set(0.417, 0.12, 0)
    body_top_top.position.set(0, 0.45, -0.45)
    body_top_top.rotateX(-1.56)
    

    const bio = new createText(camera,scene,fontLoader, 'Roboto Slab_Regular', "Teste", 0.05, 0.001, 'white', 0,0.13, 0, 0 ,true,0,-Math.PI*0.5,0,0)
    //return cube

}
export default createPrinter
