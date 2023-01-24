import { playerModel } from './playerModel.js'

export class playerController {
    model;

    constructor() {
        this.model = new playerModel();
    }

    loadAudio(audio) {
        if (audio) {
            return this.model.loadAudio(audio);
        } else {
            throw new Error('нет элемента аудио');
        }
    }

    playerPlayPause(audio) {
        if (audio.paused) {
            return this.model.play(audio);
        } else {
            return this.model.pause(audio);
        }
    }

    progress(audio) {
        return this.model.progress(audio);
    }
}