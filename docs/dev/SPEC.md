# Specification

## Observable Behavior
*   The game board is a 10 column by 20 row grid.
*   7 standard tetromino shapes (I, J, L, O, S, T, Z) fall one by one from the top center of the grid.
*   The player can move the piece horizontally and rotate it 90 degrees.
*   If a piece hits the bottom or another locked block, it locks in place, and a new piece spawns.
*   If a horizontal row becomes completely filled with locked blocks, the row is removed, and all rows above it shift down one unit.
*   The game speeds up as the player clears more lines (leveling up).
*   The game ends when a newly spawned piece cannot be placed without colliding with locked blocks.

## Success/Failure Contracts
*   **Rotation**: Must not cause the piece to overlap with locked blocks or move out of the grid bounds. If a basic rotation is invalid, the rotation does not occur.
*   **Movement**: Must not allow the piece to move out of bounds (left, right, bottom) or into locked blocks.
*   **Line Clear**: Must exactly remove full rows and exactly shift down the contents above those rows without altering partial rows below or incorrectly shifting them.
*   **Scoring**: Clearing 1, 2, 3, or 4 lines simultaneously awards points (e.g., standard Nintendo scoring multiplier based on level).
*   **Leveling**: Every 10 lines cleared increments the level by 1. Drop speed decreases proportionally to the level.

## Invariants
*   A piece can never occupy a grid cell with `y >= 20` or `x < 0` or `x >= 10`.
*   Two locked blocks can never occupy the same cell.

## Acceptance
*   Game loads in browser without errors.
*   Can move, rotate, and drop pieces.
*   Completed lines disappear correctly and score updates.
*   Game ends properly when pieces stack to the top.
