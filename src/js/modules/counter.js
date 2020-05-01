import {
    parameters
} from "../data/parameters";
import {
    quiz
} from "../data/quiz";

class CounterPoints {
    constructor() {
        if (parameters.index[0] === undefined) return
        this.index = parameters.index[parameters.currentQuestion - 1];
        this.points = quiz["question" + (this.index[0] + 1)].points;
    }
    //check correct answer
    checkAnswer() {
        const checkedBtn = document.querySelectorAll(".checked");
        const content = [];
        const currentAnswers = [];

        checkedBtn.forEach(btn => {
            const answer = btn.dataset.correct;

            currentAnswers.push(answer);
            content.push(btn.innerText);
        })

        let isCorrect = currentAnswers.every((answer) => answer === "true");

        if (currentAnswers.length === 0) isCorrect = false;

        if (isCorrect)
            parameters.points += this.points;

        parameters.usersAnswers[parameters.currentQuestion - 1] = content;
    }
}

export default CounterPoints;