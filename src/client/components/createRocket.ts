import * as THREE from 'three';


class createRocket {
    public rocket: THREE.Mesh;
    public camera: THREE.PerspectiveCamera;
    constructor(scene: THREE.Scene) {
        this.rocket = new THREE.Mesh(
            new THREE.CylinderGeometry(0.2, 0.2, 1.2, 32),
            new THREE.MeshBasicMaterial({ color: 'gray' })
        );
    
        scene.add(this.rocket)
        this.rocket.position.set(0, -9, 0);
        

    }
}

export default createRocket