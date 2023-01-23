import resetCameraRotation from "./resetCameraRotation"
class scrollAnimation {
    public scene: THREE.Scene
    public cubeSat: THREE.Mesh
    public printer: THREE.Mesh
    public camera: THREE.Camera
    public cameraHolder: THREE.Object3D
    public animationScripts: { start: number; end: number; func: () => void }[] = []
    public scrollPercent: number = 0
    constructor(scene: THREE.Scene, camera: THREE.Camera, cameraHolder: THREE.Object3D) {
        function lerp(x: number, y: number, a: number): number {
            return (1 - a) * x + a * y
        }
        this.scrollPercent = 0
        // Used to fit the lerps to start and end at specific scrolling percentages
        function scalePercent(start: number, end: number, percent: number) {
            return (percent - start) / (end - start)
        }

        const cubeSat = scene.getObjectByName("cubeSat") as THREE.Mesh
        const printer = scene.getObjectByName("printer") as THREE.Mesh
        const printer_table = scene.getObjectByName("printer_table") as THREE.Mesh
        //console.log('scrollAnimation')

         this.animationScripts = []

         this.animationScripts.push({
            start: 0,
            end: 101,
            func: () => {
     
            },
        })
        
        //add an animation that moves the cube through first 40 percent of scroll
        this.animationScripts.push({
            start: 0,
            end: 20,
            func: () => {
                //camera.lookAt(cubeSat.position)
                //cameraHolder.position.set(0, 1, 2)
                cameraHolder.position.y = lerp(-2, -20, scalePercent(0, 20, this.scrollPercent))
                //console.log(cameraHolder.position.y)
                camera.rotation.z = 0
                console.log(cameraHolder.position, camera.position)

                //console.log(cube.position.z)
            },
        })
        
        //add an animation that rotates the cube between 40-60 percent of scroll
        this.animationScripts.push({
            start: 21,
            end: 30,
            func: () => {

                cameraHolder.position.z = lerp(11, 3, scalePercent(21, 30,this.scrollPercent))
                cameraHolder.position.x = lerp(0, 1, scalePercent(21, 30,this.scrollPercent))
                camera.rotation.z = lerp(0, 0.2, scalePercent(21, 30,this.scrollPercent))
                console.log(cameraHolder.position, camera.position)
            },
        })
        
        //add an animation that moves the camera between 60-80 percent of scroll
        this.animationScripts.push({
            start: 35,
            end: 45,
            func: () => {

                cameraHolder.position.z = lerp(3, 11, scalePercent(35, 45,this.scrollPercent))
                cameraHolder.position.x = lerp(1, 0, scalePercent(35, 45,this.scrollPercent))
                camera.rotation.z = lerp(0.2, 0, scalePercent(35, 45,this.scrollPercent))

                console.log(cameraHolder.position, camera.position)

            },
        })
        
        //add an animation that auto rotates the cube from 80 percent of scroll
        this.animationScripts.push({
            start: 46,
            end: 55,
            func: () => {
                cameraHolder.position.y = lerp(-20, -33, scalePercent(46, 55, this.scrollPercent))
                console.log(cameraHolder.position, camera.position)
                cameraHolder.position.z = lerp(11, 8, scalePercent(46, 55,this.scrollPercent))
                cameraHolder.position.x = lerp(0, -2, scalePercent(46, 55,this.scrollPercent))
                //camera.rotation.z = 0
                //camera.rotation.y= 0
                //camera.rotation.x= 0
                resetCameraRotation(camera)
                
            },
        })
        this.animationScripts.push({
            start: 56,
            end: 61,
            func: () => {
                //cameraHolder.position.y = lerp(-20, -33, scalePercent(50, 55, this.scrollPercent))
                console.log(cameraHolder.position, camera.position)
                cameraHolder.position.z = lerp(8, 1.8, scalePercent(56, 61,this.scrollPercent))
                //cameraHolder.position.x = lerp(-2, -1.85, scalePercent(56, 61,this.scrollPercent))
                //cameraHolder.position.y = lerp(-33, -35, scalePercent(56, 61,this.scrollPercent))
                cameraHolder.position.y = lerp(-33, -32, scalePercent(46, 55, this.scrollPercent))

                camera.lookAt(-2,-32.88,1)
                //camera.rotation.z = lerp(0, Math.PI * 0.1, scalePercent(56, 61,this.scrollPercent))
                //camera.rotation.y = lerp(0, Math.PI * 0.1, scalePercent(56, 61,this.scrollPercent))
                //camera.rotation.x = lerp(0, Math.PI * 0.15, scalePercent(56, 61,this.scrollPercent))

                //camera.rotation.z = 0
                //camera.rotation.y= 0
                //camera.rotation.x= 0
            },
        })



        document.body.onscroll = () => {
            
            //calculate the current scroll progress as a percentage
            this.scrollPercent =
                ((document.documentElement.scrollTop || document.body.scrollTop) /
                    ((document.documentElement.scrollHeight || document.body.scrollHeight) -
                        document.documentElement.clientHeight)) *
                100
        }
     
    }
    animate() {
        
        this.animationScripts.forEach((a) => {
            if (this.scrollPercent >= a.start && this.scrollPercent < a.end) {
                
                a.func()
            }
        })
    }
}
export default scrollAnimation
