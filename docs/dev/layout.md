# Physical Layout: Tetris

## Overview

The project is a simple, client-side web application. To avoid over-engineering, the source files will reside in the root directory or a flat `src/` directory, rather than a deeply nested structure, since no build tools or bundlers are currently planned.

## Logical to Physical Mapping

* **Entry Point & UI Shell:**
    * `index.html`: The main document. Contains the Canvas element and UI containers.
    * `style.css`: All styling.
* **Source Code (`src/`):**
    * `src/constants.js`: Game constants (board size, colors, shape matrices, wall kick data).
    * **Model:**
        * `src/model/GameBoard.js`
        * `src/model/Tetromino.js`
        * `src/model/PieceQueue.js`
        * `src/model/GameState.js`
    * **View:**
        * `src/view/Renderer.js`
    * **Controller:**
        * `src/controller/InputHandler.js`
        * `src/controller/GameLoop.js`
        * `src/main.js`: Bootstraps the MVC components and starts the game.
* **Documentation:**
    * `docs/dev/`: All SDD Manager documents (PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout, TASKS).
    * `README.md`: Public-facing project overview.
    * `AGENTS.md`: Agent orientation and instructions.
