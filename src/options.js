import { winOption } from './app.js';
import Data from './db_detective.js';
import poster from './img32.jpg';

const scorePoint = document.querySelector('.score');
const img = document.querySelector('.poster');
const navHeader = document.querySelector('.ul-nav')
const options = document.querySelectorAll('.option');
const next_button = document.querySelector('.next');

function optionClick(event) {
    if (!winOption.getBtnStatus()) {
        if (event.target.innerHTML == winOption.getWinOption().name) {
            event.target.classList.add('right');
            scorePoint.innerHTML = `Score: ${winOption.getScore()}`;
            winOption.changeBtnStatus();
            img.src = winOption.getWinOption().image;
        } else {
            event.target.classList.add('wrong');
            winOption.decreaseScore();
        }
    }  
}

function nextClick() {
    let step = winOption.getStep();
    if (step < 5) {
        navHeader.children[step].classList.remove('active');
        winOption.increaseStep();
        step = winOption.getStep();
        winOption.setRandomWinOption();
        winOption.increaseScore();
        winOption.changeBtnStatus();
        navHeader.children[step].classList.add('active');
        img.src = poster;

        for (let i = 0; i < 6; i++) {
            options[i].classList.remove('right');
            options[i].classList.remove('wrong');
            options[i].innerHTML = Data[step][i].name;
        }
    } else {
        navHeader.children[step].classList.remove('active');
    }
}

export function initOption() {
    options.forEach(item => item.addEventListener('click', optionClick));
    next_button.addEventListener('click', nextClick);
}