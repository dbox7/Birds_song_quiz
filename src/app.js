import './style.scss'
import './welcome.js'

import { WinOption } from './winOption.js';
import { playerView } from './playerView.js';
import { optionsView } from './optionsView.js';

export const winOption = new WinOption;

export function createEl(type, ...cl) {
    const res = document.createElement(type);
    cl.forEach(item => res.classList.add(item));
    return res;
}

function init() {
    winOption.setRandomWinOption();
    const player = new playerView(document.querySelector('.player'));
    const optionsList = new optionsView(document.querySelector('.options-list'));
}

init();

