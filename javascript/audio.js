/* Audio */
const afraidToFall = new Audio("styles/sounds/Afraid_to_Fall.mp3");
const runningOne = new Audio("styles/sounds/Running_One.mp3");

const songs = [afraidToFall, runningOne];
const randomSong = Math.floor(Math.random() * songs.length);
