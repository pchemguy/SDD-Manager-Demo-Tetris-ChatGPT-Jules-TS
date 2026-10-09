# Decomposition

## Game Engine (Model)
*   **Grid**: Represents the 10x20 playfield. Stores colors/types of locked blocks.
*   **Piece**: Represents the current falling tetromino. Tracks its shape type (I, J, L, O, S, T, Z), current rotation state, and position (x, y) on the grid.
*   **GameState**: Tracks score, current level, cleared lines, and whether the game is over or paused.
*   **Logic**:
    *   `movePiece(dx, dy)`: Attempts to move the piece. Returns true if successful, false if collision.
    *   `rotatePiece()`: Attempts to rotate the piece.
    *   `lockPiece()`: Writes the current piece into the Grid.
    *   `clearLines()`: Scans the Grid for full rows, removes them, shifts rows down, and updates score/lines/level.
    *   `spawnPiece()`: Creates a new random piece at the top. Checks for immediate game over.

## Renderer (View)
*   `drawGrid(grid)`: Renders the locked blocks.
*   `drawPiece(piece)`: Renders the currently falling piece.
*   `drawScore(gameState)`: Updates the UI with current score, level, and lines.
*   `drawNextPiece(pieceType)`: Shows the upcoming piece.

## Input Handler
*   Listens to `keydown` events.
*   Maps `ArrowLeft`/`a` to `movePiece(-1, 0)`.
*   Maps `ArrowRight`/`d` to `movePiece(1, 0)`.
*   Maps `ArrowDown`/`s` to `movePiece(0, 1)` (soft drop).
*   Maps `ArrowUp`/`w` to `rotatePiece()`.
*   Maps `Space` to hard drop (move down until collision, then lock).

## Game Loop
*   Uses `requestAnimationFrame`.
*   Tracks time elapsed (`deltaTime`).
*   When elapsed time exceeds current drop interval (based on level), forces piece down by 1 unit.
*   Calls Renderer to redraw after updates.
