const hud = () => {

    var soundButton:any = document.getElementById("sound-icon");
    soundButton.value = true;
    soundButton.addEventListener('click', () => {
        //change icon
        if (soundButton.value){
            soundButton.value = false;
            soundButton.src = "/images/sound-off.png";
        }
        else{
            soundButton.value = true;
            soundButton.src = "/images/sound-on.png";
        }
        console.log(soundButton.source);
    })

};

export default hud