import { COLS, ROWS, HIDDEN_ROWS, BLOCK_SIZE, COLORS } from '../constants.js';
import { Tetromino } from '../model/Tetromino.js';

export class Renderer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        this.boardWidth = COLS * BLOCK_SIZE;
        this.boardHeight = ROWS * BLOCK_SIZE;
        this.sidebarWidth = 6 * BLOCK_SIZE;
        
        this.canvas.width = this.boardWidth + (this.sidebarWidth * 2);
        this.canvas.height = this.boardHeight;
        
        this.boardOffsetX = this.sidebarWidth;
    }

    render(gameState) {
        this.clearCanvas();
        this.drawBoard(gameState.board);
        
        if (gameState.activePiece && !gameState.isGameOver) {
            const ghostPos = gameState.getGhostPosition();
            if (ghostPos) {
                this.drawPiece(gameState.activePiece, ghostPos.x, ghostPos.y, true);
            }
            this.drawPiece(gameState.activePiece, gameState.piecePosition.x, gameState.piecePosition.y, false);
        }
        
        this.drawRightSidebar(gameState);
        this.drawLeftSidebar(gameState);
        
        if (gameState.isGameOver) {
            this.drawGameOver();
        }
    }

    clearCanvas() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBoard(board) {
        for (let y = HIDDEN_ROWS; y < ROWS + HIDDEN_ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                const cellValue = board.getCell(x, y);
                if (cellValue !== 0) {
                    this.drawBlock(x, y - HIDDEN_ROWS, COLORS[cellValue], this.boardOffsetX);
                }
            }
        }

        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        for (let y = 0; y < ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                this.ctx.strokeRect(this.boardOffsetX + (x * BLOCK_SIZE), y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
        
        this.ctx.strokeStyle = '#fff';
        this.ctx.beginPath();
        this.ctx.moveTo(this.boardOffsetX, 0);
        this.ctx.lineTo(this.boardOffsetX, this.boardHeight);
        this.ctx.moveTo(this.boardOffsetX + this.boardWidth, 0);
        this.ctx.lineTo(this.boardOffsetX + this.boardWidth, this.boardHeight);
        this.ctx.stroke();
    }

    drawRightSidebar(gameState) {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px sans-serif';
        this.ctx.textAlign = 'left';
        
        const textX = this.boardOffsetX + this.boardWidth + 20;
        this.ctx.fillText("NEXT", textX, 30);
        
        const previewTypes = gameState.queue.getPreview(5);
        for (let i = 0; i < previewTypes.length; i++) {
            const piece = new Tetromino(previewTypes[i]);
            this.drawPiecePreview(piece, textX, 50 + (i * 80));
        }
    }
    
    drawLeftSidebar(gameState) {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px sans-serif';
        this.ctx.textAlign = 'left';
        
        const textX = 20;
        this.ctx.fillText("HOLD", textX, 30);
        
        if (gameState.heldPieceType) {
            const piece = new Tetromino(gameState.heldPieceType);
            if (!gameState.canHold) {
                this.ctx.globalAlpha = 0.4;
            }
            this.drawPiecePreview(piece, textX, 50);
            this.ctx.globalAlpha = 1.0;
        }

        // Draw Score and Level
        this.ctx.fillText("SCORE", textX, 200);
        this.ctx.fillText(gameState.score, textX, 230);
        
        this.ctx.fillText("LEVEL", textX, 280);
        this.ctx.fillText(gameState.level, textX, 310);
        
        this.ctx.fillText("LINES", textX, 360);
        this.ctx.fillText(gameState.linesClearedTotal, textX, 390);
    }

    drawGameOver() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
        this.ctx.fillRect(this.boardOffsetX, 0, this.boardWidth, this.boardHeight);
        
        this.ctx.fillStyle = 'white';
        this.ctx.font = '40px sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText("GAME OVER", this.boardOffsetX + (this.boardWidth / 2), this.boardHeight / 2);
        
        this.ctx.font = '20px sans-serif';
        this.ctx.fillText("Press R to Restart", this.boardOffsetX + (this.boardWidth / 2), (this.boardHeight / 2) + 40);
    }

    drawPiecePreview(piece, screenX, screenY) {
        const matrix = piece.getMatrix();
        let colorIndex = 0;
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c] !== 0) {
                    colorIndex = matrix[r][c];
                    break;
                }
            }
            if (colorIndex !== 0) break;
        }

        const color = COLORS[colorIndex];
        const previewBlockSize = BLOCK_SIZE * 0.7;

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] !== 0) {
                    const blockX = screenX + (x * previewBlockSize);
                    const blockY = screenY + (y * previewBlockSize);
                    
                    this.ctx.fillStyle = color;
                    this.ctx.fillRect(blockX, blockY, previewBlockSize, previewBlockSize);
                    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                    this.ctx.lineWidth = 1;
                    this.ctx.strokeRect(blockX, blockY, previewBlockSize, previewBlockSize);
                }
            }
        }
    }

    drawPiece(piece, px, py, isGhost) {
        const matrix = piece.getMatrix();
        let colorIndex = 0;
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c] !== 0) {
                    colorIndex = matrix[r][c];
                    break;
                }
            }
            if (colorIndex !== 0) break;
        }

        const color = COLORS[colorIndex];

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] !== 0) {
                    const renderY = py + y - HIDDEN_ROWS;
                    if (renderY >= 0) {
                        if (isGhost) {
                            this.drawGhostBlock(px + x, renderY, color, this.boardOffsetX);
                        } else {
                            this.drawBlock(px + x, renderY, color, this.boardOffsetX);
                        }
                    }
                }
            }
        }
    }

    drawBlock(x, y, color, offsetX = 0) {
        const canvasX = offsetX + (x * BLOCK_SIZE);
        const canvasY = y * BLOCK_SIZE;
        
        this.ctx.fillStyle = color;
        this.ctx.fillRect(canvasX, canvasY, BLOCK_SIZE, BLOCK_SIZE);
        
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(canvasX, canvasY, BLOCK_SIZE, BLOCK_SIZE);
        
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.beginPath();
        this.ctx.moveTo(canvasX, canvasY + BLOCK_SIZE);
        this.ctx.lineTo(canvasX, canvasY);
        this.ctx.lineTo(canvasX + BLOCK_SIZE, canvasY);
        this.ctx.stroke();
    }
    
    drawGhostBlock(x, y, color, offsetX = 0) {
        const canvasX = offsetX + (x * BLOCK_SIZE);
        const canvasY = y * BLOCK_SIZE;
        
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        this.ctx.fillRect(canvasX, canvasY, BLOCK_SIZE, BLOCK_SIZE);
        
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(canvasX + 1, canvasY + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
    }
}
