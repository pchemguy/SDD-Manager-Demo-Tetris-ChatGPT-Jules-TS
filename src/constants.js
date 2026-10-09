// Board constraints
export const COLS = 10;
export const ROWS = 20;
export const HIDDEN_ROWS = 2; // Rows above the board for spawning

// Block rendering size (in pixels)
export const BLOCK_SIZE = 30;

// Tetromino colors based on standard Tetris Guideline
export const COLORS = {
    0: null, // Empty
    1: 'cyan',    // I
    2: 'blue',    // J
    3: 'orange',  // L
    4: 'yellow',  // O
    5: 'green',   // S
    6: 'purple',  // T
    7: 'red'      // Z
};

// Tetromino matrices (0 = empty, >0 = colored block mapping to COLORS)
export const SHAPES = {
    I: [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    J: [
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0]
    ],
    L: [
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0]
    ],
    O: [
        [4, 4],
        [4, 4]
    ],
    S: [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0]
    ],
    T: [
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0]
    ],
    Z: [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0]
    ]
};
