# Architecture

The game uses a Model-View-Controller (MVC) or typical game loop architecture running entirely in the browser client.

## Major Blocks
1.  **Game Engine (Model)**: Holds the game state, grid (10x20), current piece, next piece, score, and level. Handles game logic (collision detection, line clearing, piece rotation/movement, game over).
2.  **Renderer (View)**: Renders the game state to the screen. Uses HTML5 Canvas or HTML DOM elements. Let's choose HTML5 Canvas for performance and ease of drawing a grid.
3.  **Input Handler (Controller)**: Captures keyboard events and translates them into game actions (move left/right, rotate, drop).
4.  **Game Loop**: Coordinates updates between the Model and Renderer based on a timer/requestAnimationFrame.

## Dependency Direction
*   The Renderer depends on the Model to read state.
*   The Input Handler calls methods on the Game Loop or Model to trigger actions.
*   The Game Loop coordinates the Model and Renderer.
*   The Model is independent of the Renderer and Input Handler.
