const welcome = document.getElementsByClassName('welcome');
const welcome__buttons = document.querySelectorAll('.welcome__button');

function welcome__button_click() {
    welcome[0].classList.add('disable');
    document.querySelector('.score').innerHTML = `Счёт: 0`;
}

export function gameover(score) {
    const welcomeBlock = document.querySelector('.welcome__info');
    welcomeBlock.children[0].innerHTML = 'Игра окончена!';
    welcomeBlock.children[1].innerHTML = `Ваш счет: ${score}`;
    welcomeBlock.children[1].classList.remove('disable');
    welcomeBlock.children[2].classList.add('disable');
    welcomeBlock.children[3].innerHTML = 'Сыграть еще раз!';
    welcomeBlock.parentElement.classList.remove('disable');
}

welcome__buttons[0].addEventListener('click', welcome__button_click);