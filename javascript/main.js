/* Enviroment Initialisation */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const background = (canvas.style.background = "Black");

/* Start Button */
let gameStarted = false;
const currentScore = document.querySelector("#currentScore");
const scoreboard = document.querySelector("#scoreboard");
const startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  currentScore.style.display = "flex";
  canvas.style.display = "flex";
  gameStarted = true;
});

/* Ball Direction Detector */
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

/* Game Assets */
const difficulty = 975;
const ball = new Ball(Math.floor(canvas.width / 2), 50, 10, "#7df9ff");

const yTile = canvas.height + 50;
const initialTile = new Tile(0, yTile, canvas.width, 5, "#39ff14");
const initialGap = new Gap(initialTile.y, 40, 10);

const tiles = [initialTile];
tiles[0].addGap(initialGap);

// Current Tile Index
let j = 0;

/* Main Game Function */
function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Tile Generator
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].draw();
    tiles[i].gap.draw();
    tiles[i].y--;
    tiles[i].gap.y--;

    if (tiles[i].y == difficulty) {
      const tile = new Tile(0, yTile, canvas.width, 5, "#39ff14");
      const gap = new Gap(tile.y, 40, 10);
      tile.addGap(gap);
      tiles.push(tile);
    }
  }

  // Ball Movement
  if (rightArrow && ball.x + ball.radius < canvas.width) {
    ball.moveRight();
  } else if (leftArrow && ball.x > 0) {
    ball.moveLeft();
  }

  // Collision Logic
  if (ball.y <= canvas.height - ball.radius) {
    if (j > tiles.length - 1) {
      ball.y++;
    } else {
      if (
        ball.x > tiles[j].gap.x &&
        ball.x < tiles[j].gap.x + tiles[j].gap.width &&
        ball.y === tiles[j].gap.y - ball.radius
      ) {
        j++;
        ball.y++;
        currentScore.innerText = j; // Increase Score
      } else if (
        ball.y < tiles[j].y - ball.radius &&
        ball.y <= canvas.height - ball.radius
      ) {
        ball.y++;
      }

      if (ball.y === tiles[j].y - ball.radius) {
        ball.y--;
      }
    }
  }

  // Losing Condition
  if (ball.y === 0) {
    clearInterval(gameInterval);
    canvas.style.display = "none";
    location.reload();
  }

  ball.draw();
}

/* Main Interval */
const gameInterval = setInterval(() => {
  if (gameStarted) {
    requestAnimationFrame(startGame);
  }
}, 1);
