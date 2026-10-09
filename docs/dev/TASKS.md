# TASKS: Tetris

## Phase 1 — Core Engine MVP

- [ ] Phase 1 — Core Engine MVP
    - [x] Milestone 1.1 — Project Setup and Loop
        - [x] T-001 — Setup project files
            Scope: `index.html`, `style.css`, `src/main.js`.
            Evidence: HTML loads, basic CSS layout is visible, JS console runs without errors.
        - [x] T-002 — Implement GameLoop
            Scope: `src/controller/GameLoop.js`, `src/main.js`.
            Evidence: `requestAnimationFrame` loop runs, calculates `deltaTime`, and logs ticks to the console.
        - [x] T-003 — Implement InputHandler skeleton
            Scope: `src/controller/InputHandler.js`, `src/main.js`.
            Evidence: Arrow keys and spacebar log events to the console; `keyup`/`keydown` logic prevents duplicate events.
        - [x] T-004 — Review, test and report milestone 1.1
            Depends on: T-001, T-002, T-003. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/1/1.1.md.
    - [ ] Milestone 1.2 — Board and Tetrominoes
        - [x] T-005 — Implement GameBoard state
            Scope: `src/model/GameBoard.js`, `src/constants.js`.
            Evidence: 10x20 grid array initialized correctly, helper method to get/set cell values.
        - [x] T-006 — Define Tetromino shapes and basic rotations
            Scope: `src/model/Tetromino.js`, `src/constants.js`.
            Evidence: All 7 shapes have correct 4x4 or 3x3 matrices for all 4 rotation states.
        - [x] T-007 — Implement GameState skeleton
            Scope: `src/model/GameState.js`.
            Evidence: Holds instances of `GameBoard` and an active `Tetromino` at a valid starting position.
        - [ ] T-008 — Implement basic Canvas Renderer
            Scope: `src/view/Renderer.js`.
            Evidence: Draws the 10x20 grid background and the active `Tetromino` on the screen based on `GameState`.
        - [ ] T-009 — Review, test and report milestone 1.2
            Depends on: T-005, T-006, T-007, T-008. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/1/1.2.md.
    - [ ] Milestone 1.3 — Gravity and Collision
        - [ ] T-010 — Connect Input to GameState movements
            Scope: `src/controller/InputHandler.js`, `src/model/GameState.js`.
            Evidence: Left/Right inputs move the active piece position; Left/Right limits enforced by grid boundaries.
        - [ ] T-011 — Implement basic gravity
            Scope: `src/model/GameState.js`, `src/controller/GameLoop.js`.
            Evidence: Active piece moves down one row automatically based on a basic timer integrated with `deltaTime`. Soft drop key speeds this up.
        - [ ] T-012 — Implement collision detection
            Scope: `src/model/GameBoard.js`, `src/model/GameState.js`.
            Evidence: `isValidMove` checks floor boundary. Piece cannot move down past row 19.
        - [ ] T-013 — Review, test and report milestone 1.3
            Depends on: T-010, T-011, T-012. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/1/1.3.md.
    - [ ] Milestone 1.4 — Basic Locking and Line Clears
        - [ ] T-014 — Implement stack locking
            Scope: `src/model/GameBoard.js`, `src/model/GameState.js`.
            Evidence: When piece hits floor or stack, it transfers its shape to the `GameBoard` grid. A new piece spawns at the top.
        - [ ] T-015 — Update collision for stack
            Scope: `src/model/GameBoard.js`.
            Evidence: `isValidMove` checks against locked pieces on the board; pieces stack on top of each other.
        - [ ] T-016 — Implement basic line clearing
            Scope: `src/model/GameBoard.js`.
            Evidence: Filled rows are detected, removed, and blocks above drop down.
        - [ ] T-017 — Review, test and report milestone 1.4
            Depends on: T-014, T-015, T-016. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/1/1.4.md.
    - [ ] Milestone 1.5 — Phase 1 Review
        - [ ] T-018 — Review, test and report phase 1
            Depends on: milestone 1.1, 1.2, 1.3, 1.4 completion/closure. Evidence: phase review, MVP functionality verified in browser, exits, repairs and committed report.
            Report: docs/dev/reports/phases/1/PHASE-REPORT.md.

## Phase 2 — Modern Mechanics

- [ ] Phase 2 — Modern Mechanics
    - [ ] Milestone 2.1 — 7-Bag Randomizer
        - [ ] T-019 — Implement 7-Bag piece generation
            Scope: `src/model/PieceQueue.js`.
            Evidence: Pieces are dealt in shuffled sets of 7, ensuring all shapes appear before repeating the bag.
        - [ ] T-020 — Render Next Piece queue
            Scope: `src/view/Renderer.js`.
            Evidence: UI shows the next upcoming pieces based on the `PieceQueue`.
        - [ ] T-021 — Review, test and report milestone 2.1
            Depends on: T-019, T-020. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/2/2.1.md.
    - [ ] Milestone 2.2 — Hard Drop and Ghost Piece
        - [ ] T-022 — Implement Hard Drop logic
            Scope: `src/model/GameState.js`.
            Evidence: Spacebar instantly calculates lowest valid position, moves piece, and locks it immediately.
        - [ ] T-023 — Calculate and render Ghost Piece
            Scope: `src/model/GameState.js`, `src/view/Renderer.js`.
            Evidence: A translucent outline of the piece is rendered at its hard-drop location, updating as the piece moves.
        - [ ] T-024 — Review, test and report milestone 2.2
            Depends on: T-022, T-023. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/2/2.2.md.
    - [ ] Milestone 2.3 — Hold Piece
        - [ ] T-025 — Implement Hold logic
            Scope: `src/model/GameState.js`.
            Evidence: Pressing Hold swaps current piece to hold slot. Only allows one hold per piece-spawn.
        - [ ] T-026 — Render Hold slot
            Scope: `src/view/Renderer.js`.
            Evidence: UI displays the currently held piece (if any).
        - [ ] T-027 — Review, test and report milestone 2.3
            Depends on: T-025, T-026. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/2/2.3.md.
    - [ ] Milestone 2.4 — Lock Delay and Wall Kicks
        - [ ] T-028 — Implement standard SRS Wall Kicks
            Scope: `src/model/Tetromino.js`, `src/model/GameState.js`, `src/constants.js`.
            Evidence: Rotations near walls/stack test alternative offsets before failing, allowing piece manipulation in tight spaces.
        - [ ] T-029 — Implement exact 1-gravity-interval Lock Delay
            Scope: `src/model/GameState.js`.
            Evidence: Piece landing on stack does not lock instantly; player has time equal to current gravity speed to slide/rotate it. Timer resets correctly based on movement, respecting infinite-stall limits.
        - [ ] T-030 — Review, test and report milestone 2.4
            Depends on: T-028, T-029. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/2/2.4.md.
    - [ ] Milestone 2.5 — Phase 2 Review
        - [ ] T-031 — Review, test and report phase 2
            Depends on: milestone 2.1, 2.2, 2.3, 2.4 completion/closure. Evidence: phase review, modern mechanics verified in browser, exits, repairs and committed report.
            Report: docs/dev/reports/phases/2/PHASE-REPORT.md.

## Phase 3 — Progression and Polish

- [ ] Phase 3 — Progression and Polish
    - [ ] Milestone 3.1 — Scoring and Levels
        - [ ] T-032 — Implement scoring system
            Scope: `src/model/GameBoard.js`, `src/model/GameState.js`.
            Evidence: Points awarded based on lines cleared (1, 2, 3, 4) multiplied by current level.
        - [ ] T-033 — Implement level progression and gravity curve
            Scope: `src/model/GameState.js`.
            Evidence: Level increases every 10 lines; gravity interval shortens as level increases.
        - [ ] T-034 — Render score and level UI
            Scope: `src/view/Renderer.js`, `index.html`, `style.css`.
            Evidence: Score, level, and total lines cleared are visible and update accurately.
        - [ ] T-035 — Review, test and report milestone 3.1
            Depends on: T-032, T-033, T-034. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/3/3.1.md.
    - [ ] Milestone 3.2 — Game Over
        - [ ] T-036 — Implement Game Over detection
            Scope: `src/model/GameState.js`.
            Evidence: Game halts and ignores input if a newly spawned piece immediately overlaps the stack (lock out/block out).
        - [ ] T-037 — Render Game Over state
            Scope: `src/view/Renderer.js`.
            Evidence: Visual indicator (e.g., overlay text) shows the game has ended.
        - [ ] T-038 — Review, test and report milestone 3.2
            Depends on: T-036, T-037. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/3/3.2.md.
    - [ ] Milestone 3.3 — UI Polish
        - [ ] T-039 — Implement Game Start / Restart controls
            Scope: `src/controller/InputHandler.js`, `src/model/GameState.js`, `index.html`.
            Evidence: User can start the game and restart after a Game Over without refreshing the page.
        - [ ] T-040 — Finalize CSS and Canvas rendering polish
            Scope: `style.css`, `src/view/Renderer.js`.
            Evidence: Colors, grid lines, and layout match a clean, classic Tetris aesthetic.
        - [ ] T-041 — Review, test and report milestone 3.3
            Depends on: T-039, T-040. Evidence: code review, required tests, blocker repairs and committed report.
            Report: docs/dev/reports/phases/3/3.3.md.
    - [ ] Milestone 3.4 — Phase 3 Review
        - [ ] T-042 — Review, test and report phase 3
            Depends on: milestone 3.1, 3.2, 3.3 completion/closure. Evidence: final end-to-end acceptance testing against SPEC, exits, repairs, final TODO aggregation and committed report.
            Report: docs/dev/reports/phases/3/PHASE-REPORT.md.
