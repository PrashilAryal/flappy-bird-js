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
    this.isAlive = true;

    this.img = new Image();
    this.img.src = "./images/birdWingsUp.png ";
  }

  draw() {
    c.fillStyle = "red";
    c.drawImage(
      this.img,
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
    this.img.src = "./images/birdWingsDown.png";
    playWingSound();
    setTimeout(() => {
      this.img.src = "./images/birdWingsUp.png";
    }, 300);
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
    if (this.isAlive) {
      this.move();
    }
    this.borderCollision();
  }
}
