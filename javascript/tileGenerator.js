/* Tile generator. */

function tileGenerator() {
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
}
