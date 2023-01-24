import { winOption } from "./app";

export class optionsModel {

    getAllOptionsByStep() {
        return winOption.getAllOptionsByStep();
    }

    getWinOption() {
        return winOption.getWinOption();
    }

    getBtnStatus() {
        return winOption.getBtnStatus();
    }

    ifSuccess(event) {  
        if (event.target.innerHTML === winOption.getWinOption().name) {
            winOption.changeBtnStatus();
            return [winOption.getScore(), winOption.getWinOption().image];
        } else {
            winOption.decreaseScore();
            return [];
        }
    }

    nextClick() {
        if (winOption.getStep() < 5) {
            winOption.increaseStep();
            winOption.setRandomWinOption();
            winOption.increaseScore();
            winOption.changeBtnStatus();
            return winOption.getAllOptionsByStep();
        }
    }

}