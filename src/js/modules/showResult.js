import {
    parameters
} from "../data/parameters";
import {
    DOMElements
} from "../data/DOMElements";
import {
    playAgain,
} from "../index";
import anime from 'animejs/lib/anime.es.js';

class ShowResult {
    constructor() {}

    hideQuizBoard() {
        const duration = 1000;
        document.querySelector("body").style.overflowY = "auto";
        anime({
            targets: DOMElements.nextBtn,
            scale: 0,
            complete: function () {
                anime({
                    targets: DOMElements.nextBtn,
                    rotate: 90,
                });
            },
        });
        anime({
            targets: DOMElements.questionElement,
            rotate: 720,
            scale: 0,
            duration: duration,
        });
        anime({
            targets: DOMElements.answersElements[0],
            translateX: -1000,
            translateY: -500,
            duration: duration,
        });
        anime({
            targets: DOMElements.answersElements[1],
            translateX: 1000,
            translateY: -500,
            duration: duration,
        });
        anime({
            targets: DOMElements.answersElements[2],
            translateX: -1000,
            translateY: 500,
            duration: duration,
        });
        anime({
            targets: DOMElements.answersElements[3],
            translateX: 1000,
            translateY: 500,
            duration: duration,
        });
        anime({
            targets: DOMElements.info,
            translateX: 2000,
            complete: function () {
                DOMElements.info.style.display = "none";
            },
        });

        DOMElements.conteiner.classList.remove("show");
    }

    createResultBoard() {
        //create result board
        const div = document.createElement("div");
        div.className = "result-board";
        div.innerHTML = `
        <h1>Koniec Quizu</h1>
        <p>Udało Ci się zdobyć <strong>${parameters.points} punkty</strong>!</p>
        <div class="button-box">
          <button class="play-again-btn">Zagraj jeszcze raz</button>
        </div>
      `;

        document.querySelector("main").insertBefore(div, DOMElements.conteiner);
        // animate result board
        DOMElements.playAgainBtn = document.querySelector(".play-again-btn");
        DOMElements.reslutBoard = document.querySelector(".result-board");
        DOMElements.resultHeader = document.querySelector("h1");

        anime({
            targets: DOMElements.reslutBoard,
            scaleY: [0, 1],
            delay: 200,
        });

        anime({
            targets: DOMElements.resultHeader,
            translateX: [-400, 0],
            opacity: [0, 1],
            delay: 300,
            duration: 300,
            easing: "cubicBezier(.5, .05, .1, .3)",
        });

        anime({
            targets: DOMElements.reslutParagraph,
            skewX: [40, 0],
            rotateX: [40, 0],
            delay: 350,
        });

        anime({
            targets: DOMElements.playAgainBtn,
            rotateY: [90, 0],
            translateX: [50, 0],
            delay: 350,
        });
    }
}

export default ShowResult;