import { COLS, ROWS, HIDDEN_ROWS, BLOCK_SIZE, COLORS } from '../constants.js';
import { Tetromino } from '../model/Tetromino.js';

export class Renderer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        // We will expand the canvas to make room for UI
        // Main board is COLS * BLOCK_SIZE, let's add 6 blocks of width for the UI side panel
        this.boardWidth = COLS * BLOCK_SIZE;
        this.boardHeight = ROWS * BLOCK_SIZE;
        this.sidebarWidth = 6 * BLOCK_SIZE;
        
        this.canvas.width = this.boardWidth + this.sidebarWidth;
        this.canvas.height = this.boardHeight;
    }

    render(gameState) {
        this.clearCanvas();
        this.drawBoard(gameState.board);
        if (gameState.activePiece) {
            this.drawPiece(gameState.activePiece, gameState.piecePosition.x, gameState.piecePosition.y);
        }
        this.drawSidebar(gameState);
    }

    clearCanvas() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBoard(board) {
        // Draw the locked stack
        for (let y = HIDDEN_ROWS; y < ROWS + HIDDEN_ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                const cellValue = board.getCell(x, y);
                if (cellValue !== 0) {
                    this.drawBlock(x, y - HIDDEN_ROWS, COLORS[cellValue]);
                }
            }
        }

        // Draw faint grid lines (board only)
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        for (let y = 0; y < ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                this.ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
        
        // Divider line for sidebar
        this.ctx.strokeStyle = '#fff';
        this.ctx.beginPath();
        this.ctx.moveTo(this.boardWidth, 0);
        this.ctx.lineTo(this.boardWidth, this.boardHeight);
        this.ctx.stroke();
    }

    drawSidebar(gameState) {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px sans-serif';
        this.ctx.textAlign = 'left';
        
        const textX = this.boardWidth + 20;
        
        this.ctx.fillText("NEXT", textX, 30);
        
        // Render next 5 pieces from queue
        const previewTypes = gameState.queue.getPreview(5);
        for (let i = 0; i < previewTypes.length; i++) {
            const piece = new Tetromino(previewTypes[i]);
            // Draw them scaled down or offset
            this.drawPiecePreview(piece, textX, 50 + (i * 80));
        }
    }

    // Helper to draw a piece in UI coordinate space
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
        const previewBlockSize = BLOCK_SIZE * 0.7; // Smaller for UI

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

    drawPiece(piece, px, py) {
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
                        this.drawBlock(px + x, renderY, color);
                    }
                }
            }
        }
    }

    drawBlock(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.beginPath();
        this.ctx.moveTo(x * BLOCK_SIZE, y * BLOCK_SIZE + BLOCK_SIZE);
        this.ctx.lineTo(x * BLOCK_SIZE, y * BLOCK_SIZE);
        this.ctx.lineTo(x * BLOCK_SIZE + BLOCK_SIZE, y * BLOCK_SIZE);
        this.ctx.stroke();
    }
}
