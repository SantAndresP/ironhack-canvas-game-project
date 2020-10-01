function youWentTooFar() {
  const reloadBtn = document.querySelector("#reloadBtn");
  const endScreen = document.querySelector("#endScreen");
  const finalScore = document.querySelector("#finalScore");

  currentSong.pause();
  currentSong.currentTime = 0;

  clearInterval(gameInterval);
  canvas.style.display = "none";

  currentScore.style.display = "none";
  endScreen.style.display = "flex";

  finalScore.innerText = "https://bit.ly/3l7B5Z9";

  reloadBtn.addEventListener("click", () => {
    location.reload();
  });
}
