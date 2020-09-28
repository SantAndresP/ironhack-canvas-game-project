/* Enviroment initialisation. */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const background = (canvas.style.background = "White");
canvas.style.border = "1px solid Black";

/* Ball. */
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
    this.color = "White";
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}

/* Ball direction detector. */
let rightArrow = false;
let leftArrow = false;

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    rightArrow = true;
    leftArrow = false;
  } else if (event.key == "ArrowLeft") {
    rightArrow = false;
    leftArrow = true;
  }
});

/* Game assets. */
const ball = new Ball(12, 100, 10, "LightBlue");
const yTile = canvas.height - 18;
const initialTile = new Tile(0, yTile, canvas.width, 20, "Black");
const gap = new Gap(initialTile.y, 48, 20);
const tiles = [initialTile];
tiles[0].addGap(gap);

/* Main game function. */
function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Tile generator.
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].draw();
    tiles[i].gap.draw();
    tiles[i].y--;
    tiles[i].gap.y--;

    if (tiles[i].y == 500) {
      const tile = new Tile(0, yTile, canvas.width, 20, "Black");
      const gap = new Gap(tile.y, 48, 20);
      tile.addGap(gap);
      tiles.push(tile);
    }

    if (tiles.length >= 30) {
      tiles.shift();
    }
    console.log(tiles.length);
  }

  // Ball movement.
  if (rightArrow && ball.x + ball.radius < canvas.width) {
    ball.moveRight();
  } else if (leftArrow && ball.x > 0) {
    ball.moveLeft();
  }

  // Losing condition.
  if (ball.y < canvas.height - ball.radius) {
    ball.y += 1;
  }

  ball.draw();
}

/* Main interval function. */
const gameInterval = setInterval(() => {
  requestAnimationFrame(startGame);
}, 1);
