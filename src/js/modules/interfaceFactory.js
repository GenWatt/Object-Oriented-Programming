import {
    StartGame
} from "./startGame";
import ShowResult from "./showResult";
import ShowMenu from "./showMenu";
import {
    parameters
} from "../data/parameters";


class BoardFactory {
    constructor() {
        this.menu = new ShowMenu();
        this.quiz = new StartGame();
        this.result = new ShowResult();
    }

    showInterface() {
        switch (parameters.interface) {
            case "menu": {
                this.menu.displayMenu(this.result);
                break;
            }
            case "start": {
                this.quiz.moveMenuUp();
                break;
            }
            case "result": {
                this.result.hideQuizBoard();
                this.result.createResultBoard();
                break;
            }
        }
    }
}

export default BoardFactory;