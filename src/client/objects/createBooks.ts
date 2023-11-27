import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import createText from '../misc/createText'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import floatingAnimation from '../animations/floatingAnimation'

class books {
    public scene: THREE.Scene
    public camera: THREE.PerspectiveCamera
    public cameraHolder: THREE.Object3D
    public fontLoader: FontLoader
    public books_mesh: THREE.Mesh[]
    public books_params: { size: number[]; color: string; startPosition: number[]; endPosition: number[]; rotation: number[] }[]
    public booksAnimationGroup: TWEEN.Group
    constructor(scene: THREE.Scene, camera: THREE.PerspectiveCamera, cameraHolder: THREE.Object3D) {
        this.scene = scene
        this.camera = camera
        this.cameraHolder = cameraHolder
        this.fontLoader = new FontLoader()
        this.books_mesh = []
        this.booksAnimationGroup = window.global["booksAnimationGroup"]
        this.books_params = [ //{ x: 2, y: -20, z: 8.5 }
        
            
            { size: [2, 1, 0.3], color: 'yellow', startPosition: [10, -30.1, 0], endPosition: [-3.4, -31, 1],rotation: [0.0, 0, 0.0] },
            { size: [2, 1, 0.3], color: 'red', startPosition: [10, -30.1, 0], endPosition: [-1.0, -32.5, 0],rotation: [0.0, 0, 0] },
            { size: [1, 1.6, 0.3], color: 'blue', startPosition: [-8, -30.1, 0], endPosition: [-3.4, -34.6, 0.5],rotation: [0, 0, 0.0] },
            { size: [1, 1.7, 0.5], color: 'green', startPosition: [-2, -30.1, 0], endPosition: [-1.1, -37.0, 2],rotation: [0, 0.0, 0.0] },
            
            { size: [2, 1, 0.3], color: 'purple', startPosition: [10, -30.1, 0], endPosition: [-3.3, -39.2, 1.5],rotation: [0.0, 0, 0.0] },


        ]
    }

    create() {
        console.log('create books')
        if (this.scene.getObjectByName('book_1') !== undefined) {
            //console.log('books already created')
            return //books already created
        }

        //create a loop to create the books

        for (let i = 0; i < this.books_params.length; i++) {
            const book = new THREE.Mesh(
                new THREE.BoxGeometry(this.books_params[i].size[0], this.books_params[i].size[1], this.books_params[i].size[2]),
                new THREE.MeshBasicMaterial({ color: this.books_params[i].color })
            )
            this.scene.add(book)
            book.name = 'book_' + i
            //console.log(book.name)
            book.position.set(this.books_params[i].startPosition[0], this.books_params[i].startPosition[1], this.books_params[i].startPosition[2])
            book.rotation.set(this.books_params[i].rotation[0], this.books_params[i].rotation[1], this.books_params[i].rotation[2])
            this.books_mesh.push(book)
            


        }

        //const bio = new createText(this.camera,this.scene,this.fontLoader, 'Roboto Slab_Regular', text, 0.05, 0.01, 'black', -0.5,0.5, 0.8, 0 ,false, cube)
    }

    remove() {}

    animate(isReversed: boolean) {

        if(isReversed){
            return
        }
        //console.log('animate books')
        //console.log(this.scene.getObjectByName('book_1'))
        for (let i = 0; i < this.books_params.length; i++) {
            //create a random possition for each book within a range
            var x = Math.floor(Math.random() * (7  -3 + 1)) + -3;
            const book = this.books_mesh[i]
            book.position.set(this.books_params[i].startPosition[0], this.books_params[i].startPosition[1], this.books_params[i].startPosition[2])
            const tween = new TWEEN.Tween(book.position)
                .to({ x: this.books_params[i].endPosition[0], y: this.books_params[i].endPosition[1], z: this.books_params[i].endPosition[2] }, 1000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start()
                .onComplete(() => {
                    floatingAnimation(book)
                    
                })
        }
        

    }
}

export default books
