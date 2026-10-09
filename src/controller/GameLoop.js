export class GameLoop {
    constructor(updateCallback, renderCallback) {
        this.updateCallback = updateCallback;
        this.renderCallback = renderCallback;
        this.lastTime = 0;
        this.accumulator = 0;
        this.step = 1 / 60; // 60 FPS target
        this.animationFrameId = null;
        this.isRunning = false;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.lastTime = performance.now();
            this.animationFrameId = requestAnimationFrame((timestamp) => this.loop(timestamp));
            console.log("Game loop started.");
        }
    }

    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            cancelAnimationFrame(this.animationFrameId);
            console.log("Game loop stopped.");
        }
    }

    loop(timestamp) {
        if (!this.isRunning) return;

        let deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;

        // Prevent huge delta times if user tabs away
        if (deltaTime > 0.25) {
            deltaTime = 0.25;
        }

        this.accumulator += deltaTime;

        while (this.accumulator >= this.step) {
            this.updateCallback(this.step);
            this.accumulator -= this.step;
        }

        this.renderCallback();

        this.animationFrameId = requestAnimationFrame((ts) => this.loop(ts));
    }
}
