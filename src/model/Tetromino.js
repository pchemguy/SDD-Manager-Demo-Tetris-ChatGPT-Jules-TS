import { SHAPES, WALL_KICKS } from '../constants.js';

export class Tetromino {
    constructor(type) {
        this.type = type;
        this.matrices = this._generateRotations(SHAPES[type]);
        this.rotationIndex = 0; // 0: N, 1: E, 2: S, 3: W
    }

    getMatrix() {
        return this.matrices[this.rotationIndex];
    }

    getNextRotationMatrix(direction) {
        let newIndex = this.rotationIndex;
        if (direction === 'cw') {
            newIndex = (newIndex + 1) % 4;
        } else if (direction === 'ccw') {
            newIndex = (newIndex - 1 + 4) % 4;
        }
        return this.matrices[newIndex];
    }

    getWallKicks(direction) {
        if (this.type === 'O') {
            return [{x: 0, y: 0}];
        }

        const stateFrom = this.rotationIndex;
        let stateTo = this.rotationIndex;

        if (direction === 'cw') {
            stateTo = (stateTo + 1) % 4;
        } else if (direction === 'ccw') {
            stateTo = (stateTo - 1 + 4) % 4;
        }

        const transitionKey = `${stateFrom}->${stateTo}`;
        
        if (this.type === 'I') {
            return WALL_KICKS.I[transitionKey] || [{x: 0, y: 0}];
        } else {
            return WALL_KICKS.JLSTZ[transitionKey] || [{x: 0, y: 0}];
        }
    }

    rotate(direction) {
        if (direction === 'cw') {
            this.rotationIndex = (this.rotationIndex + 1) % 4;
        } else if (direction === 'ccw') {
            this.rotationIndex = (this.rotationIndex - 1 + 4) % 4;
        }
    }

    _generateRotations(initialMatrix) {
        const rotations = [initialMatrix];
        let current = initialMatrix;
        
        for (let i = 0; i < 3; i++) {
            current = this._rotateMatrixClockwise(current);
            rotations.push(current);
        }
        return rotations;
    }

    _rotateMatrixClockwise(matrix) {
        const N = matrix.length;
        const result = Array.from({ length: N }, () => Array(N).fill(0));
        
        for (let y = 0; y < N; y++) {
            for (let x = 0; x < N; x++) {
                result[x][N - 1 - y] = matrix[y][x];
            }
        }
        return result;
    }
}
