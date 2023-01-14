import './style.scss'
import './welcome.js'
import Data from './db_detective.js'

const options_list = document.getElementsByClassName('option-list');
const step = 0;
const winOption = getRandomWinOption(step);

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

function optionClick(event) {
    event.target.innerHTML == winOption.name ? 
        event.target.classList.add('right') :
        event.target.classList.add('wrong');
}

function init() {    
    const options = document.querySelectorAll('.option');

    options.forEach(item => item.addEventListener('click', optionClick));
    console.log(winOption);
}

init();
console.log(query);