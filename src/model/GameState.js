import { GameBoard } from './GameBoard.js';
import { Tetromino } from './Tetromino.js';

export class GameState {
    constructor() {
        this.board = new GameBoard();
        this.activePiece = null;
        this.piecePosition = { x: 0, y: 0 };
        this.spawnPiece();
    }

    spawnPiece() {
        // Just hardcoding 'T' piece for now to test rendering
        this.activePiece = new Tetromino('T');
        
        // Center the piece. Matrix is usually 3x3 or 4x4.
        const pieceWidth = this.activePiece.getMatrix()[0].length;
        this.piecePosition = {
            x: Math.floor((10 - pieceWidth) / 2),
            y: 0 // Will adjust later based on HIDDEN_ROWS logic
        };
    }
}
