class Pipe {
  constructor() {
    this.position = {
      x: 0,
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
  }
  drawPipeAbove() {
    c.fillStyle = "green";
    c.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
  drawPipeBelow() {
    c.fillStyle = "green";
    c.fillRect(
      this.position.x,
      this.position.y + this.size.height + 150,
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
    }

    // Pipe Below
    if (
      this.position.x <= bird.position.x + bird.size.width &&
      this.position.x + this.size.width >= bird.position.x &&
      this.position.y + this.size.height + 150 <=
        bird.position.y + bird.size.height &&
      this.position.y + this.size.height + 150 + this.size.height >=
        bird.position.y
    ) {
      console.log("collision: DOWN");
    }
  }
  update() {
    this.drawPipeAbove();
    this.drawPipeBelow();
    this.move();
    this.collisionWithBird();
  }
}
