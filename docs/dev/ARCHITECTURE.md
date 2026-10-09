# ARCHITECTURE: Tetris

## Overview

The Tetris game is a client-side web application running entirely in the browser. It follows a Model-View-Controller (MVC) architectural pattern to separate game logic, rendering, and user input.

## Major Blocks

1. **Model (Game State & Logic):**
    * **Responsibility:** Maintains the absolute truth of the game. It handles the grid representation, the active piece, the hold piece, the queue (7-bag randomization), scoring, and game over conditions. It enforces the rules of Tetris (gravity, lock delay, wall kicks).
    * **Dependencies:** Independent. It does not know about the View or the Controller.

2. **View (Rendering):**
    * **Responsibility:** Draws the current state of the game (Model) to the screen using the HTML5 Canvas API. It renders the playfield, the active piece, the ghost piece, the held piece, the next piece queue, and UI elements (score, level, lines cleared).
    * **Dependencies:** Reads from the Model to know what to draw.

3. **Controller (Input & Loop):**
    * **Responsibility:** Listens for user input (keyboard events) and translates them into actions on the Model (move, rotate, drop, hold). It also manages the main game loop (`requestAnimationFrame`), driving the game forward over time by calling the Model's update mechanisms and instructing the View to re-render.
    * **Dependencies:** Depends on the Model to apply actions and the View to trigger renders.

## Dependency Direction

`Controller -> Model`
`Controller -> View`
`View -> Model` (Read-only)

The Model is the core block. It has no dependencies on the View or Controller. The View reads the Model's state. The Controller coordinates the two by intercepting inputs, modifying the Model, and instructing the View.

## Design Patterns and Principles

* **MVC Pattern:** For clear separation of concerns, making the logic testable independently of the DOM.
* **Single-Threaded Game Loop:** Utilizing `requestAnimationFrame` for a consistent, smooth update-and-render cycle synchronized with the browser's display refresh rate.

## System-Wide Invariants

* The playfield is a 10x20 grid (with hidden rows above the visible area for piece spawning).
* All state mutations happen synchronously within a single frame update to prevent race conditions.
