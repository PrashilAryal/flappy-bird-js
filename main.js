const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let gameScoreValue = document.getElementById("gameScoreValue");

let background2;
let background;
let bird;
let pipe;

let allPipes;
let gameScore;

let gameInterval;
let gameLoop;
// const cancelAnimationFrame = window.cancelAnimationFrame;

function init() {
  background = new Background(0, 0, "blue");
  background2 = new Background(canvas.width, 0, "yellow");
  bird = new Bird();
  pipe = new Pipe();

  allPipes = [];
  gameScore = 0;

  gameInterval = setInterval(() => {
    // allPipes = push(new Pipe());
    gameScore++;
  }, 1000);
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  background.update();
  background2.update();
  bird.update();
  pipe.update(bird);

  c.beginPath();
  c.fillStyle = "white";
  c.font = "30px sans serif";
  c.fillText(gameScore, 10, 40);

  if (!bird.isAlive) {
    // gameScoreValue = gameScore;
    gameScoreValue.innerHTML = gameScore;
    clearInterval(gameInterval);
    window.cancelAnimationFrame(gameLoop);
    gameOverModal.style.display = "flex";
    // menuModal.style.display = "none";
  } else {
    gameLoop = window.requestAnimationFrame(animate);
  }
}
// animate();

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (bird.isAlive) {
      bird.jump();
    }
  }
  if (event.code === "KeyM") {
    console.log("M");
  }
});
