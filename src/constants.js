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

// Super Rotation System (SRS) Wall Kick Data
// Arrays represent (dx, dy) test offsets for each rotation transition.
// Note: Tetris guidelines usually treat 'y' up as positive. Our grid is 'y' down positive.
// Therefore, the y signs are inverted here relative to standard SRS documentation.
export const WALL_KICKS = {
    JLSTZ: {
        '0->1': [{x:0,y:0}, {x:-1,y:0}, {x:-1,y:-1}, {x:0,y:2}, {x:-1,y:2}],
        '1->0': [{x:0,y:0}, {x:1,y:0},  {x:1,y:1},   {x:0,y:-2}, {x:1,y:-2}],
        '1->2': [{x:0,y:0}, {x:1,y:0},  {x:1,y:-1},  {x:0,y:2},  {x:1,y:2}],
        '2->1': [{x:0,y:0}, {x:-1,y:0}, {x:-1,y:1},  {x:0,y:-2}, {x:-1,y:-2}],
        '2->3': [{x:0,y:0}, {x:1,y:0},  {x:1,y:-1},  {x:0,y:2},  {x:1,y:2}],
        '3->2': [{x:0,y:0}, {x:-1,y:0}, {x:-1,y:1},  {x:0,y:-2}, {x:-1,y:-2}],
        '3->0': [{x:0,y:0}, {x:-1,y:0}, {x:-1,y:-1}, {x:0,y:2},  {x:-1,y:2}],
        '0->3': [{x:0,y:0}, {x:1,y:0},  {x:1,y:1},   {x:0,y:-2}, {x:1,y:-2}]
    },
    I: {
        '0->1': [{x:0,y:0}, {x:-2,y:0}, {x:1,y:0},  {x:-2,y:-1}, {x:1,y:2}],
        '1->0': [{x:0,y:0}, {x:2,y:0},  {x:-1,y:0}, {x:2,y:1},   {x:-1,y:-2}],
        '1->2': [{x:0,y:0}, {x:-1,y:0}, {x:2,y:0},  {x:-1,y:2},  {x:2,y:-1}],
        '2->1': [{x:0,y:0}, {x:1,y:0},  {x:-2,y:0}, {x:1,y:-2},  {x:-2,y:1}],
        '2->3': [{x:0,y:0}, {x:2,y:0},  {x:-1,y:0}, {x:2,y:1},   {x:-1,y:-2}],
        '3->2': [{x:0,y:0}, {x:-2,y:0}, {x:1,y:0},  {x:-2,y:-1}, {x:1,y:2}],
        '3->0': [{x:0,y:0}, {x:1,y:0},  {x:-2,y:0}, {x:1,y:-2},  {x:-2,y:1}],
        '0->3': [{x:0,y:0}, {x:-1,y:0}, {x:2,y:0},  {x:-1,y:2},  {x:2,y:-1}]
    }
};
