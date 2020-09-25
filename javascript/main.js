/* Initialising the game's canvas. */
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
  constructor(xBall, yBall, radBall, rightArrow, leftArrow) {
    this.xBall = xBall;
    this.yBall = yBall;
    this.radBall = radBall;
    this.rightArrow = rightArrow;
    this.leftArrow = leftArrow;
  }

  drawBall() {
    ctx.beginPath();
    ctx.fillStyle = "LightCoral";
    ctx.arc(this.xBall, this.yBall, this.radBall, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

/* Class for the tiles. */
class Tile {
  constructor(xTile, yTile, widthTile, heightTile) {
    this.xTile = xTile;
    this.yTile = yTile;
    this.widthTile = widthTile;
    this.heightTile = heightTile;
  }

  drawTile() {
    ctx.beginPath();
    ctx.fillStyle = "LightBlue";
    ctx.fillRect(this.xTile, this.yTile, this.widthTile, this.heightTile);
    ctx.closePath();
  }
}
