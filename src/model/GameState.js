import { GameBoard } from './GameBoard.js';
import { Tetromino } from './Tetromino.js';
import { PieceQueue } from './PieceQueue.js';

export class GameState {
    constructor() {
        this.board = new GameBoard();
        this.queue = new PieceQueue();
        
        this.activePiece = null;
        this.piecePosition = { x: 0, y: 0 };
        
        this.heldPieceType = null;
        this.canHold = true; 
        
        this.gravityAccumulator = 0;
        this.gravityInterval = 1.0; 
        
        // Lock delay logic
        this.lockDelayLimit = 1.0; // Same as one full gravity interval (MVP spec)
        this.lockDelayAccumulator = 0;
        this.locking = false;
        this.lockMoveResets = 0;
        this.maxLockMoveResets = 15; // Prevent infinite stalling
        
        this.linesClearedTotal = 0;
        
        this.spawnPiece();
    }

    spawnPiece(type = null) {
        const nextType = type || this.queue.getNextPieceType();
        this.activePiece = new Tetromino(nextType);
        
        const pieceWidth = this.activePiece.getMatrix()[0].length;
        this.piecePosition = {
            x: Math.floor((10 - pieceWidth) / 2),
            y: 0 
        };
        
        this.canHold = true;
        this.locking = false;
        this.lockDelayAccumulator = 0;
        this.lockMoveResets = 0;
        
        // Match lock delay strictly to current gravity (which will change later via level)
        this.lockDelayLimit = this.gravityInterval;
    }

    holdPiece() {
        if (!this.canHold || !this.activePiece) return;
        
        const currentType = this.activePiece.type;
        
        if (this.heldPieceType === null) {
            this.heldPieceType = currentType;
            this.spawnPiece();
        } else {
            const previousHeld = this.heldPieceType;
            this.heldPieceType = currentType;
            this.spawnPiece(previousHeld);
        }
        
        this.canHold = false;
    }

    update(deltaTime, softDrop) {
        if (!this.activePiece) return;

        // Check if piece is resting on a surface
        const isOnSurface = !this.board.isValidMove(
            this.activePiece.getMatrix(), 
            this.piecePosition.x, 
            this.piecePosition.y + 1
        );

        if (isOnSurface) {
            this.locking = true;
            this.lockDelayAccumulator += deltaTime;
            
            if (this.lockDelayAccumulator >= this.lockDelayLimit) {
                this.lockPiece();
                return;
            }
        } else {
            this.locking = false;
            // Apply normal gravity
            let currentInterval = this.gravityInterval;
            if (softDrop) {
                currentInterval /= 10; 
            }

            this.gravityAccumulator += deltaTime;
            if (this.gravityAccumulator >= currentInterval) {
                this.gravityAccumulator = 0;
                this.movePiece(0, 1);
            }
        }
    }

    resetLockDelay() {
        if (this.locking && this.lockMoveResets < this.maxLockMoveResets) {
            this.lockDelayAccumulator = 0;
            this.lockMoveResets++;
        }
    }

    movePiece(dx, dy) {
        if (!this.activePiece) return false;

        const newX = this.piecePosition.x + dx;
        const newY = this.piecePosition.y + dy;

        if (this.board.isValidMove(this.activePiece.getMatrix(), newX, newY)) {
            this.piecePosition.x = newX;
            this.piecePosition.y = newY;
            
            // Any successful horizontal move or un-grounding move resets lock delay
            this.resetLockDelay();
            
            return true;
        }

        return false;
    }

    rotatePiece(direction) {
        if (!this.activePiece) return false;

        const nextMatrix = this.activePiece.getNextRotationMatrix(direction);
        const kicks = this.activePiece.getWallKicks(direction);
        
        for (let kick of kicks) {
            const testX = this.piecePosition.x + kick.x;
            const testY = this.piecePosition.y + kick.y;
            
            if (this.board.isValidMove(nextMatrix, testX, testY)) {
                this.activePiece.rotate(direction);
                this.piecePosition.x = testX;
                this.piecePosition.y = testY;
                
                this.resetLockDelay();
                
                return true;
            }
        }
        
        return false;
    }

    hardDrop() {
        if (!this.activePiece) return;
        
        let dropDistance = 0;
        while (this.board.isValidMove(this.activePiece.getMatrix(), this.piecePosition.x, this.piecePosition.y + dropDistance + 1)) {
            dropDistance++;
        }
        
        this.piecePosition.y += dropDistance;
        this.lockPiece();
    }

    getGhostPosition() {
        if (!this.activePiece) return null;
        
        let dropDistance = 0;
        while (this.board.isValidMove(this.activePiece.getMatrix(), this.piecePosition.x, this.piecePosition.y + dropDistance + 1)) {
            dropDistance++;
        }
        
        return {
            x: this.piecePosition.x,
            y: this.piecePosition.y + dropDistance
        };
    }

    lockPiece() {
        this.board.lockPiece(this.activePiece, this.piecePosition.x, this.piecePosition.y);
        
        const linesCleared = this.board.clearLines();
        if (linesCleared > 0) {
            this.linesClearedTotal += linesCleared;
            console.log(`Cleared ${linesCleared} lines. Total: ${this.linesClearedTotal}`);
        }

        this.spawnPiece();
    }
}
