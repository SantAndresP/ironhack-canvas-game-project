/* Gap */
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
