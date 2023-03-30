import Data from './db_detective.js';

export class WinOption {
    
    #step = 0;
    #winOption = 0;
    #btnLock = false;
    #score = 10;

    setRandomWinOption() {
        this.#winOption = Data[this.#step][Math.ceil(Math.random()*6) - 1];
    }

    getAllOptionsByStep() {
        const res = [];
        Data[this.#step].forEach(item => res.push(item));
        return res;
    }

    getWinOption() {
        return this.#winOption;
    }

    getStep() {
        return this.#step;
    }

    increaseStep() {
        this.#step += 1;
    }

    defaultStep() {
        this.#step = -1;
    }

    defaultScore() {
        this.#score = 0;
    }

    getBtnStatus() {
        return this.#btnLock;
    }

    changeBtnStatus() {
        this.#btnLock == false ? this.#btnLock = true : this.#btnLock = false;
    }

    getScore() {
        return this.#score;
    }

    increaseScore() {
        this.#score += 10;
    }

    decreaseScore() {
        this.#score -= 2;
    }

}
