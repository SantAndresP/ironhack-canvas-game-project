# IronHack Project | Canvas Game (Falling Ball)

## Description

Falling Ball is a game where the player has stop the ball from left to right in order to stop it from reaching the top of the screen, once this happens the game will end. The longer the player manages to do this, the higher the will be score.

## MVP (DOM - CANVAS)

- The game has a 300x600px screen.
- ship shoots cannonballs up
- tentacles appear randomly from the top of the screen
- four tentacles stacking will end the game
- cannonballs destroy tentacles
- reload time for shooting cannonballs
- Increasing dificulty

## Backlog

- Add diagonal tiles.
- Ability to start the game on increased dificulty lvl

## Data Structure

# main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- addTentacle () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# ball.js 

- ball () {
    this.x;
    this.y;
    this.direction;
}

- draw () {}
- move () {}
- checkTileCollision () {}
- checkScreenCollision () {}

# tiles.js 

- tiles () {
    this.x;
    this.y;
    this.size
}
- draw () {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

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
- ball - draw
- ball - move
- game - addBall
- tiles - draw
- game - addTiles
- game - checkCollision
- game - GameOver
- game - addEventListener

## Links

### Trello
[Link url](https://trello.com/b/h4hj6kRy)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/SantAndresP/ironhack-canvas-game-project)
[Link Deploy]()

### Slides
URls for the project presentation (slides)
[Link Slides.com]()
