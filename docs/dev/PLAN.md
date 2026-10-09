# Plan

## Phases and Milestones

### Phase 1: Core Engine and Rendering MVP
*   **Milestone 1.1: Static Grid and Rendering**: Create the HTML canvas, draw an empty 10x20 grid, and draw a single static block.
*   **Milestone 1.2: Falling Piece and Input**: Introduce a falling piece (e.g., just the 'O' block initially), implement the game loop for gravity, and add left/right/down keyboard inputs for movement.
*   **Milestone 1.3: Collision and Locking**: Implement collision detection with the bottom and sides. Lock the piece into the grid when it lands. Spawn a new piece at the top.
*   **Milestone 1.4: Phase 1 Review**: Review and verify the core game loop, movement, and collision mechanics.

### Phase 2: Full Mechanics and Polish
*   **Milestone 2.1: All Shapes and Rotation**: Implement all 7 tetrominos (I, J, L, O, S, T, Z) and basic rotation logic with collision checks.
*   **Milestone 2.2: Line Clearing and Scoring**: Implement logic to detect full rows, remove them, shift blocks down, and update the score.
*   **Milestone 2.3: Levels and Game Over**: Implement leveling (speed increase) and the game over state (stopping the loop, showing a game over message).
*   **Milestone 2.4: Phase 2 Review**: Complete review of the fully playable Tetris game.
