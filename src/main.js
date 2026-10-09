import { GameLoop } from './controller/GameLoop.js';
import { InputHandler } from './controller/InputHandler.js';
import { GameState } from './model/GameState.js';
import { Renderer } from './view/Renderer.js';

console.log("Tetris initialized.");

const inputHandler = new InputHandler();
const gameState = new GameState();
const renderer = new Renderer('tetris-canvas');

function update(deltaTime) {
    // 1. Process discrete inputs
    if (inputHandler.consumeCommand('moveLeft')) {
        gameState.movePiece(-1, 0);
    }
    if (inputHandler.consumeCommand('moveRight')) {
        gameState.movePiece(1, 0);
    }
    if (inputHandler.consumeCommand('rotateClockwise')) {
        gameState.rotatePiece('cw');
    }
    if (inputHandler.consumeCommand('rotateCounterClockwise')) {
        gameState.rotatePiece('ccw');
    }
    // Hard drop deferred to Milestone 2.2
    
    // 2. Process continuous inputs (soft drop) & advance time
    const softDrop = inputHandler.commands.softDrop;
    gameState.update(deltaTime, softDrop);
}

function render() {
    renderer.render(gameState);
}

const gameLoop = new GameLoop(update, render);
gameLoop.start();
