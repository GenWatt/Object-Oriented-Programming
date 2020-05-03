import {
    DOMElements
} from "../data/DOMElements";
import {
    init
} from "../index";
import {
    reset
} from "../data/parameters";
import anime from 'animejs/lib/anime.es.js';
class PlayAgain {
    constructor() {}
    // play again
    playAgain(conteiner) {

        anime({
            targets: DOMElements.reslutBoard,
            scaleY: 0,
            transformOrigin: "right",
            duration: 300,
        });
        anime({
            targets: conteiner,
            scaleY: 0,
            transformOrigin: "top",
            duration: 150,
            complete: function () {
                conteiner.remove();
            }
        })
        reset();
        init();
    }
}

export default PlayAgain;