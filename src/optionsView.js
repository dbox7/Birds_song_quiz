import { optionsController } from './optionsController.js';
import { createEl } from './app.js';
import { gameover } from './welcome.js';
import poster from './default.jpg';

export class optionsView {
    root;
    controller;

    constructor(HTMLblock) {
        this.root = HTMLblock;
        this.controller = new optionsController();

        this.options = [];
        for (let i = 0; i < 6; i++) {
            const optionBtn = createEl('button', 'button', 'option');
            optionBtn.innerHTML = this.controller.getAllOptionsByStep()[i].name;
            this.options.push(optionBtn);
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
                event.target.classList.add('right');
                document.querySelector('.score').innerHTML = `Счёт: ${res[0]}`;
                document.querySelector('.poster').src = res[1];
            } else {
                event.target.classList.add('wrong');
            }
        }
    }

    updatePlayer() {
        const player = document.querySelector('.player');
        player.children[1].classList.remove('paused');
        player.children[0].src = this.controller.getWinOption().audio;
        player.children[2].children[0].style.width = '0';
        player.children[2].children[1].style.left = '-10px';
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
        if (this.controller.getBtnStatus()) {
            document.querySelector('.poster').src = poster;
            this.updatePlayer();
            let res = this.controller.nextClick();
            if (res) {
                this.updateOptionsList(res);
                this.updateNav();
            } else {
                gameover(this.controller.getScore());
                this.controller.toDefault();
                this.nextClick();
            }
        }
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