const menuModal = document.getElementById("menuModal");
const mainMenuModal = document.getElementById("mainMenuModal");
const menuSettingsModal = document.getElementById("menuSettingsModal");
const menuControlsModal = document.getElementById("menuControlsModal");
const gameOverModal = document.getElementById("gameOverModal");

const startButton = document.getElementById("startButton");
const settingsButton = document.getElementById("settingsButton");
const controlsButton = document.getElementById("controlsButton");

const bgSoundButton = document.getElementById("bgSoundButton");
const collisionSoundButton = document.getElementById("collisionSoundButton");
const wingsSoundButton = document.getElementById("wingsSoundButton");

const settingsOkButton = document.getElementById("settingsOkButton");
const controlsOkButton = document.getElementById("controlsOkButton");

const homeButton = document.getElementById("homeButton");
const restartButton = document.getElementById("restartButton");

let isBgSoundPlay = true;
let isCollisionSoundPlay = true;
let isWingsSoundPlay = true;

// menuModal.style.display = "none";
menuSettingsModal.style.display = "none";
menuControlsModal.style.display = "none";
gameOverModal.style.display = "none";

startButton.addEventListener("click", () => {
  menuModal.style.display = "none";
  gameOverModal.style.display = "none";
  init();
  animate();
});
settingsButton.addEventListener("click", () => {
  menuSettingsModal.style.display = "flex";
  mainMenuModal.style.display = "none";
  menuControlsModal.style.display = "none";
  gameOverModal.style.display = "none";
});
controlsButton.addEventListener("click", () => {
  menuControlsModal.style.display = "flex";
  mainMenuModal.style.display = "none";
  menuSettingsModal.style.display = "none";
  gameOverModal.style.display = "none";
});

settingsOkButton.addEventListener("click", () => {
  mainMenuModal.style.display = "flex";
  menuModal.style.display = "flex";
  menuSettingsModal.style.display = "none";
  menuControlsModal.style.display = "none";
  gameOverModal.style.display = "none";
});
controlsOkButton.addEventListener("click", () => {
  mainMenuModal.style.display = "flex";
  menuModal.style.display = "flex";
  menuControlsModal.style.display = "none";
  menuSettingsModal.style.display = "none";
  gameOverModal.style.display = "none";
});

homeButton.addEventListener("click", () => {
  bird.isAlive = true;
  gameOverModal.style.display = "none";
  menuModal.style.display = "flex";
  mainMenuModal.style.display = "flex";
  menuControlsModal.style.display = "none";
  menuSettingsModal.style.display = "none";
});

restartButton.addEventListener("click", () => {
  menuModal.style.display = "none";
  mainMenuModal.style.display = "none";
  menuControlsModal.style.display = "none";
  menuSettingsModal.style.display = "none";
  gameOverModal.style.display = "none";
  init();
  animate();
});

bgSoundButton.addEventListener("click", () => {
  if (isBgSoundPlay) {
    isBgSoundPlay = false;
    bgSoundButton.classList.remove("btn-on");
    bgSoundButton.classList.add("btn-off");
    bgSoundButton.innerHTML = "Off";
  } else {
    isBgSoundPlay = true;
    bgSoundButton.classList.remove("btn-off");
    bgSoundButton.classList.add("btn-on");
    bgSoundButton.innerHTML = "On";
  }
});
collisionSoundButton.addEventListener("click", () => {
  if (isCollisionSoundPlay) {
    isCollisionSoundPlay = false;
    collisionSoundButton.classList.remove("btn-on");
    collisionSoundButton.classList.add("btn-off");
    collisionSoundButton.innerHTML = "Off";
  } else {
    isCollisionSoundPlay = true;
    collisionSoundButton.classList.remove("btn-off");
    collisionSoundButton.classList.add("btn-on");
    collisionSoundButton.innerHTML = "On";
  }
});

wingsSoundButton.addEventListener("click", () => {
  if (isWingsSoundPlay) {
    isWingsSoundPlay = false;
    wingsSoundButton.classList.remove("btn-on");
    wingsSoundButton.classList.add("btn-off");
    wingsSoundButton.innerHTML = "Off";
  } else {
    isWingsSoundPlay = true;
    wingsSoundButton.classList.remove("btn-off");
    wingsSoundButton.classList.add("btn-on");
    wingsSoundButton.innerHTML = "On";
  }
});
