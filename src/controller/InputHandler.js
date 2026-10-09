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
            hold: false,
            restart: false
        };

        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));
        
        console.log("InputHandler initialized.");
    }

    handleKeyDown(e) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
            e.preventDefault();
        }

        if (!this.keys[e.code]) {
            this.keys[e.code] = true;
            this.mapKeysToCommands(e.code, true);
        }
    }

    handleKeyUp(e) {
        if (this.keys[e.code]) {
            this.keys[e.code] = false;
            this.mapKeysToCommands(e.code, false);
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
            case 'KeyR':
                this.commands.restart = isPressed;
                break;
        }
    }
    
    consumeCommand(commandName) {
        if (this.commands[commandName]) {
            this.commands[commandName] = false;
            return true;
        }
        return false;
    }
}
