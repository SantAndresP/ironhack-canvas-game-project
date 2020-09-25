# IronHack Project | Canvas Game (Falling Ball)

## Description

Falling Ball is a game where the player has stop the ball from left to right in order to stop it from reaching the top of the screen, once this happens the game will end. The longer the player manages to do this, the higher the will be score.

## Minimum Viable Product

- Game has a 300x600px screen.
- Game has a seconds timer.
- The tiles move automatically upwards.
- Tiles appear from the bottom of the screen.
- Allowing the ball to reach the top of the screen will end the game.

## Backlog

- Add diagonal tiles.
- Increase speed of the upwards motion of the tiles as the game progresses.

## Data Structure

### main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

### game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- addBall() {}
- addTiles () {}
- addClock () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

### ball.js 

- ball () {
    this.x;
    this.y;
    this.direction;
}

- draw () {}
- move () {}
- checkTileCollision () {}
- checkScreenCollision () {}

### tiles.js 

- tiles () {
    this.x;
    this.y;
    this.size
}
- draw () {}

### clock.js
- clock () {
    this.x;
    this.y;
    this.counter;
}

- draw () {}
- startCounter () {}
- stopCounter () {}

## States y States Transitions

- splashScreen
- gameScreen
- gameOverScreen

## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- game - addBall
- ball - draw
- ball - move
- tiles - draw
- clock - startCounter
- game - addTiles
- game - addClock
- game - checkCollision
- game - GameOver
- game - addEventListener

## Links

### Trello
[Link url](https://trello.com/b/h4hj6kRy)

### Repository and deploy
URls for the project repo and deploy
[Link Repo](https://github.com/SantAndresP/ironhack-canvas-game-project)
[Link Deploy]()

### Presentation slides
URL for the project presentation
[Link Slides.com]()
