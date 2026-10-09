import { GameBoard } from './GameBoard.js';
import { Tetromino } from './Tetromino.js';

export class GameState {
    constructor() {
        this.board = new GameBoard();
        this.activePiece = null;
        this.piecePosition = { x: 0, y: 0 };
        this.gravityAccumulator = 0;
        this.gravityInterval = 1.0; // 1 second per row for MVP
        
        this.spawnPiece();
    }

    spawnPiece() {
        // Just hardcoding 'T' piece for MVP
        this.activePiece = new Tetromino('T');
        
        const pieceWidth = this.activePiece.getMatrix()[0].length;
        this.piecePosition = {
            x: Math.floor((10 - pieceWidth) / 2),
            y: 0 
        };
    }

    update(deltaTime, softDrop) {
        if (!this.activePiece) return;

        // Apply gravity
        let currentInterval = this.gravityInterval;
        if (softDrop) {
            currentInterval /= 10; // Speed up 10x for soft drop
        }

        this.gravityAccumulator += deltaTime;
        if (this.gravityAccumulator >= currentInterval) {
            this.gravityAccumulator = 0;
            this.movePiece(0, 1);
        }
    }

    movePiece(dx, dy) {
        if (!this.activePiece) return false;

        const newX = this.piecePosition.x + dx;
        const newY = this.piecePosition.y + dy;

        if (this.board.isValidMove(this.activePiece.getMatrix(), newX, newY)) {
            this.piecePosition.x = newX;
            this.piecePosition.y = newY;
            return true;
        }

        // If we tried to move down and failed, it means we hit the floor/stack
        if (dy > 0) {
            this.lockPiece();
        }

        return false;
    }

    rotatePiece(direction) {
        if (!this.activePiece) return false;

        // MVP: Simple rotation, no wall kicks yet. 
        // Just check if the next state is valid. If not, ignore the rotation.
        const nextMatrix = this.activePiece.getNextRotationMatrix(direction);
        if (this.board.isValidMove(nextMatrix, this.piecePosition.x, this.piecePosition.y)) {
            this.activePiece.rotate(direction);
            return true;
        }
        return false;
    }

    lockPiece() {
        // Transfer piece to board (to be implemented fully in Milestone 1.4)
        // For 1.3, we'll just respawn it at the top when it hits the bottom
        this.spawnPiece();
    }
}
