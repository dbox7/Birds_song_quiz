const welcome = document.getElementsByClassName('welcome');
const welcome__button = document.getElementsByClassName('welcome__button');

function welcome__button_click() {
    welcome[0].classList.add('disable');
}

console.log(welcome);
welcome__button[0].addEventListener('click', welcome__button_click);