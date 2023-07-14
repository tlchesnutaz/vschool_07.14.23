// let box1 = document.getElementById("box1");
let boxes = document.getElementsByClassName("box");
let audio = document.getElementById("roots");

for (let i = 0; i < boxes.length; i++) {
boxes[i].addEventListener("mousemove", function() {
    //audio.currentTime = 0;
    audio.play();
})
boxes[i].addEventListener("mouseout", () => {
    audio.pause();
})
}
