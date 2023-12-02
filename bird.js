class Bird {
  constructor() {
    this.size = {
      width: 50,
      height: 50,
    };
    this.position = {
      x: canvas.width / 2 - this.size.width / 2,
      y: canvas.height / 2 - this.size.height / 2,
    };

    this.velocity = {
      x: 0,
      y: 1,
    };
    this.acceleration = 0.2;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  move() {
    this.velocity.y += this.acceleration;
    this.position.y += this.velocity.y;
  }

  jump() {
    this.velocity.y = -4;
  }

  borderCollision() {
    if (this.position.y + this.size.height >= canvas.height) {
      this.position.y = canvas.height - this.size.height;
    }
    if (this.position.y <= 0) {
      this.position.y = 0;
    }
  }

  update() {
    this.draw();
    this.move();
    this.borderCollision();
  }
}
