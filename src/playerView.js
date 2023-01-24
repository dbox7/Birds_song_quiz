import { playerController } from './playerController.js'
import { createEl } from './app.js';

export class playerView {
    root;
    controller;

    constructor(HTMLblock) {
        this.root = HTMLblock;
        this.controller = new playerController();
        this.audio = document.createElement('audio');
        this.button = createEl('div', 'player__button');
        this.progressBar = createEl('div', 'player__progress-bar');
        this.progressPointer = createEl('div', 'player__progress-pointer');

        this.bindListeners();
        this.root.innerHTML = 'Loading...';
        this.loadAudio(this.audio);
    }

    loadAudio(audio) {
        this.controller.loadAudio(audio);
    }

    playerBtnClick = () => {
        this.controller.playerPlayPause(this.audio);
    }

    playing = () => {
        this.progressBar.style.width = this.controller.progress(this.audio);
    }

    changeProgress = () => {
        console.log('change');
        console.log(options.test);
    }

    render = () => {
        this.root.innerHTML = ''; 
        this.root.appendChild(this.audio);
        this.root.appendChild(this.button);
        this.root.appendChild(this.progressBar);
        this.progressBar.appendChild(this.progressPointer);
    }

    bindListeners() {
        this.audio.addEventListener('canplaythrough', this.render);
        this.audio.addEventListener('timeupdate', this.playing);
        this.button.addEventListener('click', this.playerBtnClick);
        this.progressBar.addEventListener('click', this.changeProgress);
        this.progressPointer.addEventListener('click', this.movePointer);
    }
}

export class options {
    test;

    constructor() {
        this.test = 10;
        console.log(this.test);
    }
}