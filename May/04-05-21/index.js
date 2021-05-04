const shiftAniBox = document.querySelector(".shift");

function start() {
  shiftAniBox.style.animationPlayState = "running";
}
function stop() {
  shiftAniBox.style.animationPlayState = "paused";
}
