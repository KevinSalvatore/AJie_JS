const clapSound = document.querySelector("audio");
// console.log(clapSound);
const keys = document.querySelectorAll(".key");
console.log(keys);
window.addEventListener('keydown', playSound=function(e){
    console.log(e.keyCode);
    // clapSound.play();
    const audio = document.querySelector("audio[data-key='"+e.keyCode+"']");
    const key = document.querySelector("div[data-key='"+e.keyCode+"']");
    console.log(audio);
    if(!audio)
    return;
    audio.play();
    key.classList.add('playing');
    setTimeout(function(){
        key.classList.remove('playing');
    },500);
});