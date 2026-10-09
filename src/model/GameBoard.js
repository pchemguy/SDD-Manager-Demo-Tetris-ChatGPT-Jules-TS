import { COLS, ROWS, HIDDEN_ROWS } from '../constants.js';

export class GameBoard {
    constructor() {
        this.reset();
    }

    reset() {
        // Create a 2D array: (ROWS + HIDDEN_ROWS) high, COLS wide
        this.grid = Array.from({ length: ROWS + HIDDEN_ROWS }, () => Array(COLS).fill(0));
    }

    // Safely get a cell value (returns 1 if out of bounds to act as walls/floor)
    getCell(x, y) {
        if (x < 0 || x >= COLS || y >= ROWS + HIDDEN_ROWS) {
            return 1; // Wall/Floor
        }
        if (y < 0) {
            return 0; // Space above the top is free
        }
        return this.grid[y][x];
    }
    
    // Check if the given piece matrix at board position (bx, by) overlaps anything
    isValidMove(matrix, bx, by) {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] !== 0) {
                    let boardX = bx + x;
                    let boardY = by + y;

                    // Out of horizontal bounds or hitting floor/existing stack
                    if (this.getCell(boardX, boardY) !== 0) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
