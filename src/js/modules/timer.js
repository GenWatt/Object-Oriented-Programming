import {
    parameters
} from "../data/parameters";
import {
    DOMElements
} from "../data/DOMElements";
import {
    init
} from "../index";
import anime from 'animejs/lib/anime.es.js';

let interval;

class Timer {
    constructor() {
        this.wavePos = 100;
        this.seconds;
    }

    static clearTimer() {
        clearInterval(interval);
    }

    timer(seconds) {
        Timer.clearTimer();
        interval = setInterval(() => {
            if (!seconds) {
                clearInterval(interval);
                return init();
            }
            seconds--;
            this.seconds = seconds;
            this.wavePos = (this.seconds / parameters.currentTime) * 100;
            this.moveWaves();
        }, 1000);
    }

    moveWaves() {
        anime({
            targets: DOMElements.waves[0],
            translateY: [0, -10],
            direction: "alternate",
            loop: true,
        });
        anime({
            targets: DOMElements.waves[1],
            translateY: [0, -10],
            direction: "alternate",
            loop: true,
            delay: 200,
        });
        DOMElements.currentTimeElement.innerText = this.seconds;
        DOMElements.waves.forEach(
            (wave) => (wave.style.top = this.wavePos + 5 + "%")
        );
    }
}

export default Timer;