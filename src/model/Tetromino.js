import { SHAPES } from '../constants.js';

export class Tetromino {
    constructor(type) {
        this.type = type;
        this.matrices = this._generateRotations(SHAPES[type]);
        this.rotationIndex = 0; // 0: North, 1: East, 2: South, 3: West
    }

    getMatrix() {
        return this.matrices[this.rotationIndex];
    }

    // Helper to see the matrix if we were to rotate, without actually mutating state
    getNextRotationMatrix(direction) {
        let newIndex = this.rotationIndex;
        if (direction === 'cw') {
            newIndex = (newIndex + 1) % 4;
        } else if (direction === 'ccw') {
            newIndex = (newIndex - 1 + 4) % 4;
        }
        return this.matrices[newIndex];
    }

    rotate(direction) {
        if (direction === 'cw') {
            this.rotationIndex = (this.rotationIndex + 1) % 4;
        } else if (direction === 'ccw') {
            this.rotationIndex = (this.rotationIndex - 1 + 4) % 4;
        }
    }

    // Pre-calculate all 4 rotation states upon creation to save CPU later
    _generateRotations(initialMatrix) {
        const rotations = [initialMatrix];
        let current = initialMatrix;
        
        // Generate the next 3 rotations
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
