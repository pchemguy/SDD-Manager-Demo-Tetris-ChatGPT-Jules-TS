# SPEC: Tetris

## Overview

This document specifies the behavioral contracts for the classic browser-based Tetris game. The system follows the Model-View-Controller architecture detailed in `ARCHITECTURE.md` and `DECOMPOSITION.md`.

## Terminology

* **Tetromino:** One of the 7 piece types (I, J, L, O, S, T, Z).
* **Playfield/Board:** The 10x20 visible grid where pieces fall and lock.
* **Stack:** The accumulated, locked pieces at the bottom of the playfield.
* **Locking:** The moment a piece becomes part of the stack.
* **Gravity:** The automatic downward movement of the active piece over time.

## System-Wide Contracts

### 1. Board Dimensions and Boundaries

The visible playfield is exactly 10 columns wide by 20 rows high.

* Pieces cannot move left or right beyond column 0 and column 9.
* Pieces lock when they reach row 19 (the bottom) or the highest block of the existing stack in their column.
* Pieces spawn above the visible playfield (rows -1, -2).

### 2. Piece Movement and Rotation

* **Left/Right:** Moves the active piece 1 column horizontally. Blocked by walls or the stack.
* **Soft Drop:** Moves the piece down 1 row immediately (respects collision).
* **Hard Drop:** Instantly drops the piece to its lowest possible valid position and locks it immediately.
* **Rotation:** Rotates the piece 90 degrees clockwise (or counter-clockwise). If the standard rotation results in a collision, Wall Kicks are applied.

### 3. Modern Enhancements

* **7-Bag Randomization:** The 7 Tetromino types are placed into a "bag" and shuffled. Pieces are drawn from the bag until empty, at which point a new bag is generated. This ensures you never go too long without a specific piece (e.g., the 'I' piece).
* **Ghost Piece:** A translucent preview of where the active piece will land if a Hard Drop is executed. It updates continuously as the piece is moved/rotated.
* **Hold Piece:** 
    * The player can press a key to "Hold" the active piece.
    * If the Hold slot is empty, the active piece moves to the slot, and the next piece from the queue spawns.
    * If the Hold slot has a piece, the active piece and the held piece swap.
    * A piece can only be swapped out of the Hold slot once per lock (cannot juggle pieces indefinitely in the air).
* **Lock Delay:** 
    * When a piece touches the stack or the floor, it does not lock immediately. 
    * There is a delay equal to one full gravity interval (the time it takes for a piece to fall one row automatically at the current level).
    * During this delay, the player can move or rotate the piece. 
    * *Note:* Moving or rotating the piece does *not* reset the timer indefinitely (standard "lock down" rules apply to prevent infinite stalling, capping at a maximum number of moves).

### 4. Wall Kicks

When a piece attempts to rotate but is blocked by a wall or the stack, the game will test alternative offset positions (wall kicks) according to standard Super Rotation System (SRS) guidelines before failing the rotation.

### 5. Scoring and Levels

* **Line Clears:** When a row is completely filled, it is removed, and all rows above it drop down by one.
* **Levels:** The game starts at Level 1. The level increases every 10 lines cleared.
* **Gravity Speed:** The gravity speed (time between automatic drops) decreases as the level increases.
* **Scoring:** Points are awarded for clearing lines (Single, Double, Triple, Tetris). Higher levels yield a larger score multiplier.

### 6. Game Over

The game ends when a piece attempts to spawn or lock but overlaps with existing blocks in the stack at the top of the board (block out/lock out).

## Acceptance Conditions

1. **Initialization:** The game loads in the browser, displaying an empty 10x20 board, a score of 0, Level 1, an empty Hold UI, and a Next Queue showing upcoming pieces.
2. **Input Handling:** Arrow keys (or designated mapping) smoothly move and rotate the piece. Hard Drop works instantly. Hold works and correctly prevents double-holding.
3. **Collision & Locking:** Pieces stop at the floor and on top of each other. The Lock Delay works exactly as specified (one gravity interval).
4. **Line Clears:** Filling a row clears it visually, drops the stack above, and updates the score.
5. **Game Over:** Stacking pieces to the top triggers a Game Over state, preventing further input.
