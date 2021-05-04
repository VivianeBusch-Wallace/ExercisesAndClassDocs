// animation game
const shiftAniBox = document.querySelector(".shift");
// change color on mouseenter and mouseleave
const changeColor = document.querySelector(".changeColor");

// Start and Stop animation for the game
function start() {
  shiftAniBox.style.animationPlayState = "running";
}
function stop() {
  shiftAniBox.style.animationPlayState = "paused";
}
