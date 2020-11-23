/* Move ball. */

function moveBall() {
  if (rightArrow && ball.x + ball.radius < canvas.width) {
    ball.moveRight();
  } else if (leftArrow && ball.x > 0) {
    ball.moveLeft();
  }
}
