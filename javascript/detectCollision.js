function detectCollision() {
  if (ball.y < canvas.height - ball.radius) {
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
  } else {
    youWentTooFar();
  }
}
