/*    Audio.    */

// Files.
const lonelyMountain = new Audio("styles/sounds/Lonely_Mountain.ogg");
const cottsFace = new Audio("styles/sounds/Cotts_Face.ogg");
const runningOne = new Audio("styles/sounds/Running_One.ogg");
const toTheStars = new Audio("styles/sounds/To_the_Stars.ogg");

// List of songs.
const songs = [lonelyMountain, cottsFace, runningOne, toTheStars];

// Selects a random song from `songs`.
const currentSong = songs[Math.floor(Math.random() * songs.length)];
