import * as THREE from 'three'
import { seededRandom } from 'three/src/math/MathUtils'

class createStars {
    vertices: any
    stars: THREE.Points
    starBox: any
    constructor(scene: THREE.Scene) {
        this.starBox = new THREE.BufferGeometry()
        this.vertices = {
            positions: [],
            accelerations: [],
            velocities: [],
        }

        for (let i = 0; i < 18000; i++) {
            this.vertices.positions.push(seededRandom(1 + i) * 1000 - 450)
        }
        this.starBox.setAttribute(
            'position',
            new THREE.BufferAttribute(new Float32Array(this.vertices.positions), 3)
        )
        console.log(this.starBox.getAttribute('position'))
        let starImage = new THREE.TextureLoader().load('star.png')
        let starMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.3,
            map: starImage,
        })
        this.stars = new THREE.Points(this.starBox, starMaterial)
        scene.add(this.stars)
    }
    updateStars() {
        this.stars.rotation.z += 0.00006
        //this.starBox.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.vertices.positions), 3));
    }
}

export default createStars
