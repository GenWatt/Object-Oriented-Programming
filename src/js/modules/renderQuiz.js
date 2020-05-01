import {
    quiz
} from "../data/quiz";
import {
    parameters
} from "../data/parameters";
import {
    DOMElements
} from "../data/DOMElements";

class RenderQuiz {
    constructor() {
        this.currentSetUp = parameters.index[parameters.currentQuestion];
        this.questionIndex = this.currentSetUp[0];
        this.arrOfAnswerIndex = this.currentSetUp[1];
        this.answer = quiz["question" + (this.questionIndex + 1)].answers;
        this.question = quiz["question" + (this.questionIndex + 1)].question;
        this.showQuestion();
        this.removePreviousAnswers();
        this.showAnswers();
        this.showInfo();
    }

    showInfo() {
        anime.remove(DOMElements.info);
        anime.remove(DOMElements.questionElement);
        anime.remove(DOMElements.nextBtn);
        DOMElements.info.style.display = "flex";
        anime({
            targets: DOMElements.info,
            translateX: 0,
        });

        anime({
            targets: DOMElements.questionElement,
            scale: 1,
        });

        anime({
            targets: DOMElements.nextBtn,
            rotate: 0,
            scale: 1,
        });
    }
    // set question
    showQuestion() {
        parameters.interface = "start";
        parameters.value = false;
        parameters.currentQuestion++;
        DOMElements.nextBtn.disabled = true;
        DOMElements.questionElement.innerText = this.question;
    }
    //remove existing answers
    removePreviousAnswers() {
        if (DOMElements.answersElements) {
            DOMElements.answersElements.forEach((element) => {
                element.remove();
            });
        }

        if (DOMElements.reslutBoard) DOMElements.reslutBoard.remove();
    }
    // show random positoned answer buttons
    showAnswers() {
        this.arrOfAnswerIndex.forEach((answer) => {
            const button = document.createElement("button");
            button.className = "answer";
            button.innerText = this.answer["answer" + (answer + 1)].text;
            button.dataset.correct = this.answer["answer" + (answer + 1)].correct;

            DOMElements.box.appendChild(button);
            DOMElements.answersElements = document.querySelectorAll(".answer");
        });

        anime({
            targets: DOMElements.answersElements,
            opacity: [0, 1],
            translateY: [700, 0],
            delay: anime.stagger(100),
        });
    }
}

export default RenderQuiz;