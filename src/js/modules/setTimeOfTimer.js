import {
    options
} from "../data/options";
import {
    DOMElements
} from "../data/DOMElements";
import {
    parameters
} from "../data/parameters";

class SetTime {
    constructor() {
        this.time = options.time;
    }

    createOptionsBtn() {
        const sortedData = this.time.sort((a, b) => a - b);
        sortedData.forEach(val => {
            const btn = document.createElement("button");
            btn.value = val;
            btn.innerText = val + "s";
            val == parameters.currentTime ? btn.className = "active" : null;
            btn.addEventListener("click", (e) =>
                this.setValue(e.target)
            );

            DOMElements.timeOptionConteiner.appendChild(btn);
        })
    }

    setValue(element) {
        parameters.currentTime = parseFloat(element.value);
        DOMElements.timeOptionConteiner.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
        element.classList.add("active");

    }
}

export {
    SetTime
};