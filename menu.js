const menuModal = document.getElementById("menuModal");
const mainMenuModal = document.getElementById("mainMenuModal");
const menuSettingsModal = document.getElementById("menuSettingsModal");
const menuControlsModal = document.getElementById("menuControlsModal");
const gameOverModal = document.getElementById("gameOverModal");

const startButton = document.getElementById("startButton");
const settingsButton = document.getElementById("settingsButton");
const controlsButton = document.getElementById("controlsButton");

const settingsOkButton = document.getElementById("settingsOkButton");
const controlsOkButton = document.getElementById("controlsOkButton");

const homeButton = document.getElementById("homeButton");
const restartButton = document.getElementById("restartButton");

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
