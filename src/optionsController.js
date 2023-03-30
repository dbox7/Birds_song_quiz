import { optionsModel } from './optionsModel.js';

export class optionsController {
    model;

    constructor() {
        this.model = new optionsModel();
    }

    getWinOption() {
        return this.model.getWinOption();
    }

    getAllOptionsByStep() {
        return this.model.getAllOptionsByStep();
    }

    getScore() {
        return this.model.getScore();
    }

    getBtnStatus() {
        return this.model.getBtnStatus();
    }

    toDefault() {
        return this.model.toDefault();
    }

    optionBtnClick(event) {
        if (!this.model.getBtnStatus()) {
            return this.model.ifSuccess(event);
        }
    }

    nextClick() {
        return this.model.nextClick();
    }

}