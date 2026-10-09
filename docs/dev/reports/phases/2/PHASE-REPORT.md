# Phase 2 Review Report: Modern Mechanics

## Scope
Milestones 2.1 through 2.4: 7-Bag randomizer, hard drop, ghost piece, hold piece, SRS wall kicks, and lock delay.

## Evidence
- `PieceQueue` enforces the standard 7-bag logic, providing a more balanced game without streaks of the same piece.
- The `Renderer` has been expanded to accommodate UI sidebars, cleanly separating the main board from the Hold and Next queues.
- `GameState` implements the modern "Hard Drop" mechanic, instantly locking the piece at its lowest point.
- A "Ghost Piece" accurately predicts this landing spot using an alpha-blended render pass.
- The "Hold" mechanic works identically to standard guidelines, allowing piece swaps but preventing infinite holding.
- The "Lock Delay" mechanic allows pieces to be maneuvered after touching a surface, constrained by the current gravity interval and a hard cap on resets to prevent stalling.
- SRS wall kicks accurately permit rotations in tight spaces.
- **End-to-End Check:** The game feels noticeably "modern". The piece distribution is fair, and players can execute advanced maneuvers like sliding pieces under overhangs before they lock.

## Final TODO Aggregation
- Hard drop and soft drop currently do not award additional score points.
- Gravity remains fixed at 1.0; Phase 3 must implement dynamic difficulty scaling based on `linesClearedTotal`.
- Game Over condition must be explicitly checked upon piece spawn.

## Check
Phase 2 is complete. Ready to merge `phase/2-modern-mechanics` into `main`.
