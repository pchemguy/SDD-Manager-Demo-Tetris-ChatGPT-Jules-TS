import { GameLoop } from './controller/GameLoop.js';
import { InputHandler } from './controller/InputHandler.js';

console.log("Tetris initialized.");

const inputHandler = new InputHandler();

let updateCount = 0;

function update(deltaTime) {
    updateCount++;
    if (updateCount % 60 === 0) {
       // Just to show the loop is alive without spamming
       // console.log(`Update tick... simulated time passed: ${deltaTime}s`);
    }
    
    if (inputHandler.consumeCommand('moveLeft')) console.log("Action: Move Left");
    if (inputHandler.consumeCommand('moveRight')) console.log("Action: Move Right");
    if (inputHandler.consumeCommand('rotateClockwise')) console.log("Action: Rotate CW");
    if (inputHandler.consumeCommand('hardDrop')) console.log("Action: Hard Drop");
}

function render() {
    // Render logic will go here
}

const gameLoop = new GameLoop(update, render);
gameLoop.start();
