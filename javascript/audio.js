/* Audio */
const lonelyMountain = new Audio("styles/sounds/Lonely_Mountain.ogg");
const cottsFace = new Audio("styles/sounds/Cotts_Face.ogg");
const pinkLady = new Audio("styles/sounds/Pink_Lady.ogg");
const toTheStars = new Audio("styles/sounds/To_the_Stars.ogg");

const songs = [lonelyMountain, cottsFace, pinkLady, toTheStars];
const currentSong = songs[Math.floor(Math.random() * songs.length)];
