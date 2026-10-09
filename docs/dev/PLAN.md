# PLAN: Tetris

## Strategy

The delivery strategy prioritizes reaching a playable Minimum Viable Product (MVP) as quickly as possible, ensuring the core game loop and basic mechanics function before adding modern enhancements and polish.

## Phases and Milestones

### Phase 1: Core Engine MVP

**Objective:** Establish the game loop, basic rendering, and core falling block mechanics.

* **Milestone 1.1: Project Setup and Loop.** HTML Canvas setup, `requestAnimationFrame` loop, basic input listener.
* **Milestone 1.2: Board and Tetrominoes.** Implement the 10x20 grid, the 7 basic shapes, and static rendering of pieces.
* **Milestone 1.3: Gravity and Collision.** Pieces fall automatically. Collision detection with the floor and walls prevents illegal moves.
* **Milestone 1.4: Basic Locking and Line Clears.** Pieces lock upon hitting the floor. Completed rows are cleared, and the stack drops.
* **Milestone 1.5: Phase 1 Review.** Code review, functional testing of the MVP loop.

### Phase 2: Modern Mechanics

**Objective:** Implement the modern Tetris enhancements specified in the contracts.

* **Milestone 2.1: 7-Bag Randomizer.** Implement the piece queue and next piece preview.
* **Milestone 2.2: Hard Drop and Ghost Piece.** Implement instant drop and the translucent drop preview.
* **Milestone 2.3: Hold Piece.** Implement the hold mechanism (swap, one-hold-per-lock rule).
* **Milestone 2.4: Lock Delay and Wall Kicks.** Implement the one-gravity-interval lock delay and SRS wall kicks.
* **Milestone 2.5: Phase 2 Review.** Code review, test mechanics against modern standard expectations.

### Phase 3: Progression and Polish

**Objective:** Implement scoring, leveling, game over conditions, and final UI.

* **Milestone 3.1: Scoring and Levels.** Line clear multipliers, level progression, and increasing gravity speed.
* **Milestone 3.2: Game Over.** Detect block out/lock out conditions and halt the game.
* **Milestone 3.3: UI Polish.** Finalize score/level display, start/restart screens or controls.
* **Milestone 3.4: Phase 3 Review.** Final code review and end-to-end acceptance testing against the SPEC.

## Exit Gates

* **Milestone Exits:** Code committed, functionality verified in the browser.
* **Phase Exits:** Code review completed, regression checks passed, phase review task completed.
