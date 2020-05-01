import {
    options
} from "../data/options";
import {
    DOMElements
} from "../data/DOMElements";
import {
    parameters
} from "../data/parameters";

class SetQuestion {
    constructor() {
        this.numberQuestions = options.numberQuestions;
    }

    createOptionsBtn() {
        const sortedData = this.numberQuestions.sort((a, b) => a - b);
        sortedData.forEach(val => {
            const btn = document.createElement("button");
            btn.value = val;
            btn.innerText = val;
            val == parameters.numberOfQuestions ? btn.className = "active" : null;
            btn.addEventListener("click", (e) =>
                this.setValue(e.target)
            );

            DOMElements.questionOptionConteiner.appendChild(btn);
        })
    }

    setValue(element) {
        parameters.numberOfQuestions = parseFloat(element.value);
        DOMElements.questionOptionConteiner.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
        element.classList.add("active");
    }
}

export {
    SetQuestion
};