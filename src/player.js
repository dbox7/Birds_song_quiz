import { winOption, createEl } from './app.js';

const player = document.querySelector('.player');
const button = createEl('div', 'player__button');
const progressBar = createEl('div', 'player__progress-bar');
const progressPointer = createEl('div', 'player__progress-pointer');
const audio = document.createElement('AUDIO');

function play() {
    if (audio.paused) {
        audio.play();
        button.classList.add('paused');
    } else {
        audio.pause();
        button.classList.remove('paused');
    }
}

function playing() {

    progressBar.style.width = `${audio.currentTime * 100 / audio.duration}%`;
}

function changeWidth(event) {
    progressBar.style.width = `${event.pageX - progressBar.offsetLeft}px`;
    console.log(progressBar.offsetWidth);
    if (progressBar.style.width > progressBar.offsetWidth) {
        progressBar.style.width = '400px';
        progressPointer.style.left = '400px';
        console.log('here');
    }
    console.log(`${progressPointer.offsetLeft} -- ${progressBar.style.width}`)
    if (progressPointer.offsetLeft - 8 < progressBar.style.width) {
        progressPointer.style.left = `${event.pageX - progressBar.offsetLeft - 8}px`;
    }
}

function changeTime(event) {
    progressBar.style.width = `${event.pageX - progressBar.offsetLeft}px`;
    progressPointer.style.left = `${event.pageX - progressBar.offsetLeft - 8}px`;
    // progressBar.addEventListener('mousemove', changeWidth);
    // progressBar.addEventListener('mouseup', () => {
    //     progressBar.removeEventListener('mousemove', changeWidth);
    // });
}

function moving() {
    document.addEventListener('mousemove', changeWidth);

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', changeWidth);
    });
}

function canPlay() {
    player.innerHTML = '';
    button.addEventListener('click', play);
    progressBar.append(progressPointer);
    player.append(button, progressBar);
}

export function initPlayer() {
    audio.src = winOption.getWinOption().audio;
    console.log(audio);
    player.innerHTML = '<span>Loading...</span>';
    audio.addEventListener('canplaythrough', canPlay);
    audio.addEventListener('timeupdate', playing);
    progressBar.addEventListener('mousedown', changeTime);
    progressPointer.addEventListener('mousedown', moving);
}


