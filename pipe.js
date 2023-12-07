class Pipe {
  constructor() {
    this.position = {
      x: 100,
      y: 0,
    };
    this.size = {
      width: 50,
      height: 250,
    };
    this.velocity = {
      x: 2,
      y: 0,
    };
    this.imgAbove = new Image();
    this.imgAbove.src = "./images/pipeAbove.png";
    this.imgBelow = new Image();
    this.imgBelow.src = "./images/pipeBelow.png";
  }
  drawPipeAbove() {
    c.fillStyle = "green";
    c.drawImage(
      this.imgAbove,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
  drawPipeBelow() {
    c.fillStyle = "green";
    c.drawImage(
      this.imgBelow,
      this.position.x,
      this.position.y + this.size.height + 130,
      this.size.width,
      this.size.height
    );
  }
  move() {
    if (this.position.x + this.size.width <= 0) {
      this.position.x = canvas.width;
      this.position.y = Math.random() * (-100 - 0) + 0;
    }
    this.position.x -= this.velocity.x;
  }

  collisionWithBird() {
    // Pipe Above
    if (
      this.position.x <= bird.position.x + bird.size.width &&
      this.position.x + this.size.width >= bird.position.x &&
      this.position.y <= bird.position.y + bird.size.height &&
      this.position.y + this.size.height >= bird.position.y
    ) {
      console.log("collision: UP");
      bird.isAlive = false;
    }

    // Pipe Below
    if (
      this.position.x <= bird.position.x + bird.size.width &&
      this.position.x + this.size.width >= bird.position.x &&
      this.position.y + this.size.height + 130 <=
        bird.position.y + bird.size.height &&
      this.position.y + this.size.height + 130 + this.size.height >=
        bird.position.y
    ) {
      console.log("collision: DOWN");
      bird.isAlive = false;
    }
  }
  update() {
    this.drawPipeAbove();
    this.drawPipeBelow();
    if (bird.isAlive) {
      this.move();
      this.collisionWithBird();
    }
  }
}
