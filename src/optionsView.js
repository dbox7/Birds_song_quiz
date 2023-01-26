import { optionsController } from './optionsController.js';
import { createEl } from './app.js';
import poster from './default.jpg';

export class optionsView {
    root;
    controller;

    constructor(HTMLblock) {
        this.root = HTMLblock;
        this.controller = new optionsController();

        this.options = [];
        for (let i = 0; i < 6; i++) {
            const li = createEl('li', 'button', 'option');
            li.innerHTML = this.controller.getAllOptionsByStep()[i].name;
            this.options.push(li);
        }
        this.nextButton = createEl('li', 'button', 'next');
        this.nextButton.innerHTML = 'Next';

        this.bindHandlers();
        this.render();
    }

    optionBtnClick = (event) => {
        let res = this.controller.optionBtnClick(event);
        if (res) {    
            if (res.length != 0) {
                console.log(res)
                event.target.classList.add('right');
                document.querySelector('.score').innerHTML = `Score: ${res[0]}`;
                document.querySelector('.poster').src = res[1];
            } else {
                event.target.classList.add('wrong');
            }
        }
    }

    updatePlayer() {
        const player = document.querySelector('.player');
        console.log(player.children);
        player.children[1].classList.remove('paused');
        player.children[0].src = this.controller.getWinOption().audio;
        player.children[2].children[0].style.width = '0';
        player.children[2].children[1].style.left = '-1px';
    }

    updateNav() {
        const activeNav = document.getElementsByClassName('active');
        if (activeNav[0].nextElementSibling) {
            activeNav[0].nextElementSibling.classList.add('active');
            activeNav[0].classList.remove('active');
        } else {
            activeNav[0].parentElement.children[0].classList.add('active');
            activeNav[1].classList.remove('active');
        }        
    }

    updateOptionsList(res) {
        this.options.forEach((item, idx) => {
            item.classList.remove('wrong');
            item.classList.remove('right');
            item.innerHTML = res[idx].name;
        })
    }

    nextClick = () => {
        document.querySelector('.poster').src = poster;
        this.updatePlayer();
        this.updateNav();
        let res = this.controller.nextClick();
        if (res) {
            this.updateOptionsList(res);
        } else {
            this.renderGameOver();
        }
    }

    renderGameOver() {
        const welcomeBlock = document.querySelector('.welcome__info');
        Array.from(welcomeBlock.children).forEach(item => item.classList.toggle('disable'));
        document.querySelector('.welcome').classList.remove('disable');
    }

    render() {
        this.options.forEach(item => this.root.appendChild(item));
        this.root.appendChild(this.nextButton);
    }

    bindHandlers() {
        this.options.forEach(item => item.addEventListener('click', this.optionBtnClick));
        this.nextButton.addEventListener('click', this.nextClick);
    }
}