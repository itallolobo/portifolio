import * as THREE from 'three'
const getRotationPointed = (object:any, x:number, y:number, z:number  ) => {
    const temp = new THREE.Object3D()
    temp.position.x = object.position.x
    temp.position.y = object.position.y
    temp.position.z = object.position.z
    temp.rotation.x = object.rotation.x
    temp.rotation.y = object.rotation.y
    temp.rotation.z = object.rotation.z
    temp.lookAt(x, y, z)
    temp.rotateX(1.6)
    temp.remove()
    const pointed = new THREE.Vector3(temp.rotation.x, temp.rotation.y, temp.rotation.z)
    const distance_x = (pointed.x + 2 * Math.PI) - object.rotation.x
    const distance_y = (pointed.y + 2 * Math.PI) - object.rotation.y
    const distance_z = (pointed.z + 2 * Math.PI) - object.rotation.z

    return pointed

}
export default getRotationPointed