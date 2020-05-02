import {
    parameters
} from "../data/parameters";
import {
    quiz
} from "../data/quiz";
import {
    DOMElements
} from "../data/DOMElements";

class ShowCorrectAnswers {
    constructor() {
        this.index = parameters.index;
        this.counter = 0;
    }

    resetCounter() {
        this.counter = 0;
    }

    createBoxForAnswers() {
        const div = document.createElement("div");
        div.className = "show-answers-conteiner";
        div.innerHTML = "<h2>Odpowiedzi</h2>"

        document.querySelector("main").insertBefore(div, DOMElements.conteiner);
        this.index.forEach(element => this.createItems(element));
    }
    createItems(element) {
        const showAnswersConteiner = document.querySelector(".show-answers-conteiner");
        const questionIndex = element[0];
        const answersIndex = element[1];
        const question = quiz["question" + (questionIndex + 1)].question;
        const answers = quiz["question" + (questionIndex + 1)].answers;
        const correctAnswer = answersIndex.map((i) => answers["answer" + (i + 1)].correct);
        const textAswers = answersIndex.map((i) => answers["answer" + (i + 1)].text);
        const points = quiz["question" + (questionIndex + 1)].points;
        const questionElement = document.createElement("div");

        questionElement.innerHTML = `${this.counter+1}/${parameters.numberOfQuestions} ${question}<span>Punkty:${points}</span>`;

        showAnswersConteiner.appendChild(questionElement);

        textAswers.map((answer, index) => {
            const setCorrectAtrr = correctAnswer[index];
            const element = document.createElement("p");

            element.innerText = answer;
            element.dataset.correct = setCorrectAtrr;

            if (parameters.usersAnswers[this.counter]) {
                parameters.usersAnswers[this.counter].forEach(usersAns => {
                    if (element.innerText.toString() === usersAns) element.classList.add("wrong");
                });
            }
            if (setCorrectAtrr) element.classList.add("correct");

            showAnswersConteiner.appendChild(element);
        })
        this.counter++;
    }
}

export {
    ShowCorrectAnswers
};