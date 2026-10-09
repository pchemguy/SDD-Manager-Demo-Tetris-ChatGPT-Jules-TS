import { COLS, ROWS, HIDDEN_ROWS, BLOCK_SIZE, COLORS } from '../constants.js';

export class Renderer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        
        // Size the canvas explicitly to fit the grid
        this.canvas.width = COLS * BLOCK_SIZE;
        this.canvas.height = ROWS * BLOCK_SIZE;
    }

    render(gameState) {
        this.clearCanvas();
        this.drawBoard(gameState.board);
        if (gameState.activePiece) {
            this.drawPiece(gameState.activePiece, gameState.piecePosition.x, gameState.piecePosition.y);
        }
    }

    clearCanvas() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBoard(board) {
        // Draw the locked stack (ignoring hidden rows for rendering)
        for (let y = HIDDEN_ROWS; y < ROWS + HIDDEN_ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                const cellValue = board.getCell(x, y);
                if (cellValue !== 0) {
                    this.drawBlock(x, y - HIDDEN_ROWS, COLORS[cellValue]);
                }
            }
        }

        // Draw faint grid lines
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 1;
        for (let y = 0; y < ROWS; y++) {
            for (let x = 0; x < COLS; x++) {
                this.ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            }
        }
    }

    drawPiece(piece, px, py) {
        const matrix = piece.getMatrix();
        // The piece type corresponds to the color index in COLORS
        // T is 6, I is 1, etc. Let's just find the first non-zero to get the color index.
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
                    // Only draw if it's within the visible area
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
        
        // Inner border for block definition
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        
        // Highlight top left edge to look like a raised block
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.beginPath();
        this.ctx.moveTo(x * BLOCK_SIZE, y * BLOCK_SIZE + BLOCK_SIZE);
        this.ctx.lineTo(x * BLOCK_SIZE, y * BLOCK_SIZE);
        this.ctx.lineTo(x * BLOCK_SIZE + BLOCK_SIZE, y * BLOCK_SIZE);
        this.ctx.stroke();
    }
}
