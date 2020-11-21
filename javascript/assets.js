/* Ball. */
class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
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

/* Tile. */
class Tile {
  constructor(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  addGap(gap) {
    this.gap = gap;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}

/* Gap. */
class Gap {
  constructor(y, width, height) {
    this.width = width;
    this.height = height;
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = y;
    this.color = background;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}
