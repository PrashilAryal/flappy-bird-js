class Background {
  constructor(x = 0, y = 0, color) {
    this.position = {
      x: x,
      y: y,
    };
    this.size = {
      width: canvas.width,
      height: canvas.height,
    };
    this.velocity = {
      x: 1,
      y: 0,
    };
    this.color = color;
    this.img = new Image();
    this.img.src = "./images/background.png";
  }

  draw() {
    c.fillStyle = this.color;
    c.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
    c.fill();
  }

  move() {
    if (this.position.x + this.size.width <= 0) {
      this.position.x = canvas.width;
    }
    this.position.x -= this.velocity.x;
  }
  update() {
    this.draw();
    if (bird.isAlive) {
      this.move();
    }
  }
}
