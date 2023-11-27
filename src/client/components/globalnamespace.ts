import * as $ from 'jquery'
import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'


namespace global {
    var isAnimationRunning: boolean = false
    var booksAnimationGroup: THREE.Group = new THREE.Group()
    var commonObjectsAnimationGroup: TWEEN.Group = new TWEEN.Group()



}


export default global