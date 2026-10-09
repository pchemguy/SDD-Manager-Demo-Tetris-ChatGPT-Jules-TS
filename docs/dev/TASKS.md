# Tasks

## Phase 1: Core Engine and Rendering MVP

### Milestone 1.1: Static Grid and Rendering
- [ ] **Task 1.1.1**: Set up project skeleton (`index.html`, `style.css`, `src/constants.js`) and canvas element.
- [ ] **Task 1.1.2**: Implement `src/view.js` to draw an empty 10x20 grid on the canvas.
- [ ] **Task 1.1.3**: Implement basic `src/model.js` structure and draw a single static block on the grid to verify rendering.

### Milestone 1.2: Falling Piece and Input
- [ ] **Task 1.2.1**: Define the 'O' tetromino shape in `constants.js` and add piece state to `model.js`.
- [ ] **Task 1.2.2**: Implement `src/game.js` with a `requestAnimationFrame` loop that drops the piece over time.
- [ ] **Task 1.2.3**: Implement keyboard event listeners in `game.js` mapped to lateral movement and soft drop in `model.js`.

### Milestone 1.3: Collision and Locking
- [ ] **Task 1.3.1**: Implement boundary collision detection in `model.js` to prevent moving off-screen.
- [ ] **Task 1.3.2**: Implement locking logic: when a piece hits the bottom, copy its cells into the grid array and spawn a new piece at the top.
- [ ] **Task 1.3.3**: Update `view.js` to render both the falling piece and the locked blocks in the grid.

### Milestone 1.4: Phase 1 Review
- [ ] **Task 1.4.1**: Review and test Phase 1 mechanics (rendering, movement, basic collision, game loop). Document findings in `PHASE-1-REPORT.md`.

## Phase 2: Full Mechanics and Polish

### Milestone 2.1: All Shapes and Rotation
- [ ] **Task 2.1.1**: Define all 7 standard tetromino shapes and colors in `constants.js`. Modify spawn logic to pick randomly.
- [ ] **Task 2.1.2**: Implement basic rotation matrix logic in `model.js`.
- [ ] **Task 2.1.3**: Implement rotation collision checks (prevent rotation if it would cause overlap/out-of-bounds). Bind rotation to the UP arrow/W key.

### Milestone 2.2: Line Clearing and Scoring
- [ ] **Task 2.2.1**: Implement line detection and removal in `model.js` after a piece locks.
- [ ] **Task 2.2.2**: Implement gravity for remaining blocks (shifting rows down) after line removal.
- [ ] **Task 2.2.3**: Add UI elements for score. Implement scoring logic based on the number of lines cleared simultaneously.

### Milestone 2.3: Levels and Game Over
- [ ] **Task 2.3.1**: Implement level scaling: track total lines cleared, increase level every 10 lines, and decrease the drop interval accordingly.
- [ ] **Task 2.3.2**: Implement game over condition: check if a newly spawned piece immediately collides. Stop the game loop and render "Game Over".
- [ ] **Task 2.3.3**: Add hard drop functionality (Space key) and final polish.

### Milestone 2.4: Phase 2 Review
- [ ] **Task 2.4.1**: Review and test full game mechanics. Document findings in `PHASE-2-REPORT.md`.
