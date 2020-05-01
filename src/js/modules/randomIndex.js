import {
    quiz
} from "../data/quiz";
import {
    parameters
} from "../data/parameters";

class Random {
    constructor() {
        this.randomNumber = this.randomQuestion();
        this.answer = quiz["question" + (this.randomNumber + 1)].answers;
        this.arrOfAnswerIndex = this.randomAnswersIndexArr();
    }

    randomQuestion() {
        let randomQuestionIndex = Math.floor(
            Math.random() * Object.keys(quiz).length
        );

        for (let i = 0; i <= parameters.arrQuestionsIndex.length; i++) {
            if (parameters.arrQuestionsIndex.indexOf(randomQuestionIndex) !== -1)
                return this.randomQuestion();
        }

        parameters.arrQuestionsIndex.push(randomQuestionIndex);
        return randomQuestionIndex;
    }

    randomAnswersIndexArr() {
        const indexArr = [];
        const self = this;

        function randomAnswersIndex() {
            let randomNumber = Math.floor(
                Math.random() * Object.keys(self.answer).length
            );
            if (indexArr.length === Object.keys(self.answer).length) return;

            for (let i = 0; i <= indexArr.length; i++) {
                if (indexArr.indexOf(randomNumber) === -1) {
                    indexArr.push(randomNumber);
                    randomAnswersIndex();
                }
            }
            randomAnswersIndex();
        }
        randomAnswersIndex();
        return indexArr;
    }

    returnRandomCounts() {
        return parameters.index.push([this.randomNumber, this.arrOfAnswerIndex]);
    }
}

export default Random;