const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const bird = new Bird();
const background = new Background(0, 0, "blue");
const background2 = new Background(canvas.width, 0, "yellow");

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  background.update();
  background2.update();
  bird.update();
  window.requestAnimationFrame(animate);
}
animate();

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    // bird.velocity.y = -5;
    bird.jump();
  }
  if (event.code === "KeyM") {
    console.log("M");
  }
});
// document.addEventListener("keyup", (event) => {
//   if (event.code === "Space") {
//     bird.velocity.y = 1;
//   }
//   if (event.code === "KeyM") {
//     console.log("M");
//   }
// });