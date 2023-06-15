var camisa = document.getElementById("camisa");
var direction = 1;
var position = 0;
var speed = 0.5;

function moveCamisa() {
  position += direction * speed;
  camisa.style.transform = "translateY(" + position + "px)";

  if (position >= 60 || position <= -15) {
    direction *= -1;
  }

  requestAnimationFrame(moveCamisa);
}

moveCamisa();

