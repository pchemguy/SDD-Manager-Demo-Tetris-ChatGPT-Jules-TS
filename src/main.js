import { GameLoop } from './controller/GameLoop.js';
import { InputHandler } from './controller/InputHandler.js';
import { GameState } from './model/GameState.js';
import { Renderer } from './view/Renderer.js';

console.log("Tetris initialized.");

const inputHandler = new InputHandler();
const gameState = new GameState();
const renderer = new Renderer('tetris-canvas');

let updateCount = 0;

function update(deltaTime) {
    updateCount++;
    
    if (inputHandler.consumeCommand('moveLeft')) console.log("Action: Move Left");
    if (inputHandler.consumeCommand('moveRight')) console.log("Action: Move Right");
    if (inputHandler.consumeCommand('rotateClockwise')) {
        console.log("Action: Rotate CW");
        if (gameState.activePiece) {
            gameState.activePiece.rotate('cw');
        }
    }
    if (inputHandler.consumeCommand('hardDrop')) console.log("Action: Hard Drop");
}

function render() {
    renderer.render(gameState);
}

const gameLoop = new GameLoop(update, render);
gameLoop.start();
