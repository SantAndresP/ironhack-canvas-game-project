function gameOver() {
  const reloadBtn = document.querySelector("#reloadBtn");
  const endScreen = document.querySelector("#endScreen");
  const finalScore = document.querySelector("#finalScore");

  clearInterval(gameInterval);
  canvas.style.display = "none";

  currentScore.style.display = "none";
  endScreen.style.display = "flex";

  finalScore.innerText = j;

  reloadBtn.addEventListener("click", () => {
    location.reload();
  });
}
