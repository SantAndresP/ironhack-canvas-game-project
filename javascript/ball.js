/* Ball */
class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.increment = 3;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  moveLeft() {
    if (this.x - this.radius > 0) {
      this.x -= 3;
    }
  }

  moveRight() {
    if (this.x < canvas.width - this.radius) {
      this.x += 3;
    }
  }
}
