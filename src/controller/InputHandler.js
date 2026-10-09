export class InputHandler {
    constructor() {
        this.keys = {};
        this.commands = {
            moveLeft: false,
            moveRight: false,
            softDrop: false,
            hardDrop: false,
            rotateClockwise: false,
            rotateCounterClockwise: false,
            hold: false
        };

        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));
        
        console.log("InputHandler initialized.");
    }

    handleKeyDown(e) {
        // Prevent default scrolling for game keys
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
            e.preventDefault();
        }

        if (!this.keys[e.code]) {
            this.keys[e.code] = true;
            this.mapKeysToCommands(e.code, true);
            console.log(`Key down: ${e.code}`);
        }
    }

    handleKeyUp(e) {
        if (this.keys[e.code]) {
            this.keys[e.code] = false;
            this.mapKeysToCommands(e.code, false);
            console.log(`Key up: ${e.code}`);
        }
    }

    mapKeysToCommands(code, isPressed) {
        switch(code) {
            case 'ArrowLeft':
                this.commands.moveLeft = isPressed;
                break;
            case 'ArrowRight':
                this.commands.moveRight = isPressed;
                break;
            case 'ArrowDown':
                this.commands.softDrop = isPressed;
                break;
            case 'ArrowUp':
            case 'KeyX':
                this.commands.rotateClockwise = isPressed;
                break;
            case 'KeyZ':
                this.commands.rotateCounterClockwise = isPressed;
                break;
            case 'Space':
                this.commands.hardDrop = isPressed;
                break;
            case 'KeyC':
            case 'ShiftLeft':
            case 'ShiftRight':
                this.commands.hold = isPressed;
                break;
        }
    }
    
    consumeCommand(commandName) {
        if (this.commands[commandName]) {
            // Some commands like rotate/harddrop shouldn't be held down to repeat indefinitely 
            // without custom delay logic, so we consume them instantly for now
            this.commands[commandName] = false;
            return true;
        }
        return false;
    }
}
