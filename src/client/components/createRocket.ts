import * as THREE from 'three';


class createRocket {
    public rocket: THREE.Mesh;
    public camera: THREE.PerspectiveCamera;
    //add a cone to rocket
    
    constructor(scene: THREE.Scene) {
        this.rocket = new THREE.Mesh(
            new THREE.CylinderGeometry(0.2, 0.2, 1.2, 32),
            new THREE.MeshBasicMaterial({ color: 'gray' })
            
        )
        this.rocket = new THREE.Mesh(
            new THREE.ConeGeometry(0.15, 0.7, 32),
            new THREE.MeshBasicMaterial({ color: 'gray' })
        )

    
        scene.add(this.rocket)
        this.rocket.position.set(6, -9, 8);
        this.rocket.lookAt(0, -3, 0)
        this.rocket.rotateX(1.6)
        

    }

}

export default createRocket