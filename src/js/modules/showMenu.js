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
        anime.remove(DOMElements.startBoard);
        anime({
            targets: DOMElements.startBoard,
            translateY: 0,
            height: [0, 450],
        });
        reset();
        result.hideQuizBoard();
        Timer.clearTimer();
    }
}

export default ShowMenu;