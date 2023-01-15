import './style.scss'
import './welcome.js'
import Data from './db_detective.js';

const options_list = document.getElementsByClassName('option-list');
const options = document.querySelectorAll('.option');
const navHeader = document.querySelector('.ul-nav');
const scorePoint = document.querySelector('.score');
const navHeader2 = document.getElementsByClassName('ul-nav');
const next_button = document.querySelector('.next');
const img = document.querySelector('.poster');
let step = 0;
let score = 10;
let btnLock = false;

const query = []

while (query.length < 10) {
    const res = Math.ceil(Math.random()*10);
    if (!query.includes(res)) {
        query.push(res);
    };  
}

function getRandomWinOption(step) {
    return Data[step][Math.ceil(Math.random()*6) - 1];
}

let winOption = getRandomWinOption(step);

function optionClick(event) {
    if (!btnLock) {
        if (event.target.innerHTML == winOption.name) {
            event.target.classList.add('right');
            scorePoint.innerHTML = `Score: ${score}`;
            btnLock = true;
            img.src = winOption.image;
        } else {
            event.target.classList.add('wrong');
            score -= 2;
        }
    }  
}

function nextClick() {
    if (step < 5) {
        navHeader.children[step].classList.remove('active');
        step++;
        score += 10;
        btnLock = false;
        navHeader.children[step].classList.add('active');
        winOption = getRandomWinOption(step);
        console.log('next: ' + winOption);

        for (let i = 0; i < 6; i++) {
            options[i].classList.remove('right');
            options[i].classList.remove('wrong');
            options[i].innerHTML = Data[step][i].name;
        }
    } else {
        navHeader.children[step].classList.remove('active');

    }
}

function init() {    

    options.forEach(item => item.addEventListener('click', optionClick));
    console.log(winOption);
    console.log(next_button);

    next_button.addEventListener('click', nextClick);
}

init();
console.log(query);
console.log(img.src);