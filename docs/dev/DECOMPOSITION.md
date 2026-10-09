# DECOMPOSITION: Tetris

## 1. Model (Game Logic)

This block manages the rules and state. It has no dependencies on the View or Controller.

### 1.1. GameBoard

* **Responsibility:** Represents the 10x20 playfield. Tracks locked pieces (the "stack"). Handles line clearing and resulting score calculations.
* **State:** A 2D array representing the grid cells (empty or filled with a specific color).
* **Interfaces:**
    * `lockPiece(tetromino, position)`: Merges a piece into the board.
    * `clearLines()`: Removes full rows, shifts the stack down, and returns the number of cleared lines.
    * `isValidMove(tetromino, position)`: Checks if a piece at a specific position overlaps the stack or boundaries.

### 1.2. Tetromino

* **Responsibility:** Represents a single Tetris piece (I, J, L, O, S, T, Z). Knows its shape matrices for all 4 rotations and its color.
* **State:** Shape type, current rotation state.
* **Interfaces:**
    * `getMatrix()`: Returns the 2D array of the current rotation.
    * `rotate(direction)`: Returns the new rotation state.

### 1.3. PieceQueue (7-Bag Randomizer)

* **Responsibility:** Generates the sequence of Tetrominos. Ensures standard 7-bag randomization (a shuffled "bag" of all 7 pieces is dealt out before a new bag is generated).
* **State:** The current bag, the upcoming pieces queue.
* **Interfaces:**
    * `getNextPiece()`: Pops and returns the next piece, refilling the bag as needed.
    * `getQueue(count)`: Returns the next `count` pieces for preview.

### 1.4. GameState

* **Responsibility:** The central orchestrator for the Model. Holds the current score, level, lines cleared, active piece, held piece, and the `GameBoard`. Manages gravity, lock delay timers, and the hold mechanism.
* **State:** Current `Tetromino` position, gravity timer, lock delay timer, score, level, game over status, hold availability (can only hold once per drop).
* **Interfaces:**
    * `update(deltaTime)`: Advances game time (gravity, lock delay).
    * `movePiece(dx, dy)`: Attempts a move.
    * `rotatePiece(direction)`: Attempts a rotation, handling Wall Kicks.
    * `hardDrop()`: Instantly drops and locks the piece.
    * `holdPiece()`: Swaps the active piece with the held piece.

## 2. View (Rendering)

This block is strictly for output. It reads from the Model.

### 2.1. Renderer

* **Responsibility:** Draws the game state to the HTML5 Canvas.
* **Dependencies:** Needs a reference to the `GameState` (read-only) and the Canvas Context.
* **Interfaces:**
    * `render(gameState)`: Clears the canvas and orchestrates drawing the board, active piece, ghost piece, queue, and UI elements.
    * `drawBlock(x, y, color)`: Helper to draw a single square.

## 3. Controller (Input and Loop)

This block bridges user actions and the passage of time to the Model and View.

### 3.1. InputHandler

* **Responsibility:** Listens to `keydown` and `keyup` events. Maps keys (e.g., Arrows, Space, Shift, Z, X) to game actions.
* **Dependencies:** Needs a reference to the `GameState` to dispatch actions.

### 3.2. GameLoop

* **Responsibility:** Uses `requestAnimationFrame` to create a continuous loop. Calculates `deltaTime` and drives the update-render cycle.
* **Dependencies:** Needs references to `GameState` and `Renderer`.
* **Interfaces:**
    * `start()`
    * `stop()`
    * `loop(timestamp)`
