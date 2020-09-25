/* Initialising the game canvas. */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.style.border = "1px solid Black";

/* Main function of the game. */
const startGame = () => {};

/* Main interval of the game. */
const gameInterval = setInterval(() => {
  requestAnimationFrame(startGame);
}, 50);

/* Class for "The Ball". */
class Ball {
  constructor(xBall, yBall, radBall) {
    this.xBall = xBall;
    this.yBall = yBall;
    this.radBall = radBall;
  }

  drawBall() {
    ctx.beginPath();
    ctx.arc(this.xBall, this.yBall, this.radBall, 0, Math.PI * 2);
    ctx.fillStyle = "LightCoral";
    ctx.fill();
    ctx.closePath();
  }
}
