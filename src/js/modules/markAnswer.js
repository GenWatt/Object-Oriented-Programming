import {
    parameters
} from "../data/parameters";
import {
    DOMElements
} from "../data/DOMElements";

class UpdateQuestionIndex {
    constructor() {}

    updateIndex() {
        anime({
            targets: DOMElements.currentQuestionText,
            innerText: [0, parameters.currentQuestion],
            round: 1,
        });

        DOMElements.questionsIndexElement.innerText = `/${
        parameters.numberOfQuestions
      }`;
    }
}

class MarkAnswer {
    constructor(btn) {
        this.btn = btn;
    }

    markBtn() {
        if (this.btn.classList.contains("checked")) return this.btn.classList.remove("checked");

        this.btn.classList.add("checked");
        DOMElements.nextBtn.disabled = false;
    }
}

export {
    UpdateQuestionIndex,
    MarkAnswer
};