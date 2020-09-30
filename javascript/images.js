function youWentTooFar() {
  const reloadBtn = document.querySelector("#reloadBtn");
  const endScreen = document.querySelector("#endScreen");
  const finalScore = document.querySelector("#finalScore");

  clearInterval(gameInterval);
  canvas.style.display = "none";

  currentScore.style.display = "none";
  endScreen.style.display = "flex";

  finalScore.innerText = "https://youtu.be/dQw4w9WgXcQ";

  reloadBtn.addEventListener("click", () => {
    location.reload();
  });
}
