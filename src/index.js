import './style.scss'
import './welcome.js'
import Data from './db_detective.js'

const options_list = document.getElementsByClassName('option-list');
const options = document.querySelectorAll('.option');
const next_button = document.querySelector('.next');
let step = 0;

const query = []

while (query.length < 10) {
    const res = Math.ceil(Math.random()*10);
    if (!query.includes(res)) {
        query.push(res);
    };  
}

function getRandomWinOption(step) {
    return Data[step][Math.ceil(Math.random()*6)];
}

let winOption = getRandomWinOption(step);

function optionClick(event) {
    //event.target.classList.add('button_active');
    event.target.innerHTML == winOption.name ? 
        event.target.classList.add('right') :
        event.target.classList.add('wrong');
    // event.target.addEventListener('transitionend', () => {
        
    // })  
}

function nextClick() {
    step++;
    winOption = getRandomWinOption(step);
    for (let i = 0; i < 6; i++) {
        options[i].classList.remove('right');
        options[i].classList.remove('wrong');
        options[i].innerHTML = Data[step][i].name;
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