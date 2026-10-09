import { SHAPES } from '../constants.js';

export class PieceQueue {
    constructor() {
        this.bag = [];
        this.queue = [];
        
        // Populate the initial queue with enough pieces
        this.fillBag();
        this.fillQueue(7); // Next queue usually shows 1-5 pieces
    }

    // Standard 7-bag randomizer
    fillBag() {
        const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
        
        // Fisher-Yates shuffle
        for (let i = pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
        }
        
        this.bag = pieces;
    }

    fillQueue(minCount) {
        while (this.queue.length < minCount) {
            if (this.bag.length === 0) {
                this.fillBag();
            }
            this.queue.push(this.bag.pop());
        }
    }

    getNextPieceType() {
        if (this.queue.length === 0) {
            this.fillQueue(1);
        }
        const next = this.queue.shift();
        
        // Ensure the queue always has at least 5 pieces ready for preview
        this.fillQueue(5); 
        
        return next;
    }

    // Returns an array of the next `count` piece types without removing them
    getPreview(count) {
        this.fillQueue(count);
        return this.queue.slice(0, count);
    }
}
