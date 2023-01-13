import './style.scss'
import './welcome.js'
import './db_detective.js'

const options_list = document.getElementsByClassName('option-list');


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

function init() {
    const step = 0;

    const winOption = getRandomWinOption(step);
    
}

Data

console.log(query);