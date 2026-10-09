import { GameLoop } from './controller/GameLoop.js';

console.log("Tetris initialized.");

let updateCount = 0;

function update(deltaTime) {
    updateCount++;
    if (updateCount % 60 === 0) {
       console.log(`Update tick... simulated time passed: ${deltaTime}s`);
    }
}

function render() {
    // Render logic will go here
}

const gameLoop = new GameLoop(update, render);
gameLoop.start();
