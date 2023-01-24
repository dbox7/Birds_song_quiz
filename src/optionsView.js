import { optionsController } from './optionsController.js';
import { createEl } from './app.js';
import poster from './img32.jpg';

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

    nextClick = () => {
        document.querySelector('.poster').src = poster;
        const activeNav = document.getElementsByClassName('active');
        if (activeNav[0].nextElementSibling) {
            activeNav[0].nextElementSibling.classList.add('active');
        }
        activeNav[0].classList.remove('active');
        let res = this.controller.nextClick();
        document.getElementsByTagName('audio')[0].src = this.controller.getWinOption().audio;
        if (res) {
            this.options.forEach((item, idx) => {
                item.classList.remove('wrong');
                item.classList.remove('right');
                item.innerHTML = res[idx].name;
            })
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