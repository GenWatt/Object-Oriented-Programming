import {
    DOMElements
} from "../data/DOMElements";
import Timer from "./timer";
import {
    reset,
} from "../data/parameters";

class ShowMenu {
    constructor() {}

    displayMenu(result) {
        document.querySelector("body").style.overflowY = "hidden";
        anime({
            targets: DOMElements.startBoard,
            translateY: 0,
        });
        DOMElements.conteiner.classList.remove("show");
        reset();
        result.hideQuizBoard();
        Timer.clearTimer();
    }
}

export default ShowMenu;