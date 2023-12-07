const bgSound = new Audio();
const wingSound = new Audio();
const collisionSound = new Audio();

collisionSound.src = "./sounds/collision.mp3";

function playBackgroundSound() {
  if (isBgSoundPlay) {
    bgSound.src = "./sounds/background.mp3";
    bgSound.volume = 0.2;
    bgSound.play();
  }
}
function playWingSound() {
  if (isWingsSoundPlay) {
    wingSound.src = "./sounds/wings.mp3";
    wingSound.volume = 0.2;
    wingSound.play();
  }
}
function playCollisionSound() {
  if (isCollisionSoundPlay) {
    wingSound.volume = 0.1;
    collisionSound.play();
  }
}
