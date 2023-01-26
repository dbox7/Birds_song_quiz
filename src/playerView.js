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
        this.backBar = createEl('div', 'player__progress-bar', 'back-bar');
        this.progressPointer = createEl('div', 'player__progress-pointer');

        this.bindListeners();
        this.root.innerHTML = 'Загрузка...';
        this.loadAudio(this.audio);
    }

    loadAudio(audio) {
        this.controller.loadAudio(audio);
    }

    playerBtnClick = () => {
        this.controller.playerPlayPause(this.audio);
        this.button.classList.toggle('paused');
    }

    playing = () => {
        let offset = this.controller.progress(this.audio);
        console.log(offset)
        this.backBar.style.width = `${offset}%`;
        this.progressPointer.style.left = `${offset - 2}%`;
    }

    changeProgress = (event) => {
        const offset = this.controller.changeProgress(event.pageX,
                                                      this.progressBar, 
                                                      this.audio);
    }

    render = () => {
        this.root.innerHTML = ''; 
        this.root.appendChild(this.audio);
        this.root.appendChild(this.button);
        this.root.appendChild(this.progressBar);
        this.progressBar.appendChild(this.backBar);
        this.progressBar.appendChild(this.progressPointer);
    }

    bindListeners() {
        this.audio.addEventListener('canplaythrough', this.render);
        this.audio.addEventListener('timeupdate', this.playing);
        this.audio.addEventListener('ended', () => {
            this.button.classList.remove('paused');
        });
        this.button.addEventListener('click', this.playerBtnClick);
        this.progressBar.addEventListener('click', this.changeProgress);
        this.progressPointer.addEventListener('click', this.movePointer);
    }
}