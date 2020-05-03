import "../SCSS/style.scss";
import { DOMElements } from "./data/DOMElements";
import { parameters } from "./data/parameters";
import BoardFactory from "./modules/interfaceFactory";
import Random from "./modules/randomIndex";
import RenderQuiz from "./modules/renderQuiz";
import { UpdateQuestionIndex, MarkAnswer } from "./modules/markAnswer";
import CounterPoints from "./modules/counter";
import Timer from "./modules/timer";
import PlayAgain from "./modules/playAgain";
import { ButtonsOnHoverCursor } from "./modules/startGame";
import { SetTime } from "./modules/setTimeOfTimer";
import { SetQuestion } from "./modules/setQuestionNumber";
import { ShowCorrectAnswers } from "./modules/showCorrectAnswers";

const configTimeForAnswer =  new SetTime();
const configNumberQuestions =  new SetQuestion();
const again = new PlayAgain();
const showAnswers = new ShowCorrectAnswers();

configTimeForAnswer.createOptionsBtn();
configNumberQuestions.createOptionsBtn();

function init() {
  const factory = new BoardFactory();
  const points = new CounterPoints();
  const timer = new Timer();
  const updateQuestionIndex = new UpdateQuestionIndex();
  const buttonsCursor = new ButtonsOnHoverCursor();

  DOMElements.backToMenuBtn.addEventListener("click", () => {
    parameters.interface = "menu";
    factory.showInterface();
  });
  //check if answer  is correct
  if (parameters.currentQuestion) points.checkAnswer();
  //check if end of quiz
  if (parameters.numberOfQuestions === parameters.currentQuestion) {
    if (parameters.interface !== "menu") parameters.interface = "result";
    Timer.clearTimer();
    factory.showInterface();
    DOMElements.playAgainBtn.addEventListener("click",  ()=> {
      again.playAgain(document.querySelector(".show-answers-conteiner"));
      showAnswers.resetCounter();
    });
    return showAnswers.createBoxForAnswers();
  }
  const randomNumbers = new Random().returnRandomCounts();
  const renderQuiz = new RenderQuiz(randomNumbers);
  factory.showInterface();

  buttonsCursor.buttonsOnHoverCursor();
  timer.timer(parameters.currentTime);
  updateQuestionIndex.updateIndex();

  //Mark clicked answer
  DOMElements.answersElements.forEach((btn) =>
    btn.addEventListener("click", (e) => new MarkAnswer(e.target).markBtn())
  );
}

DOMElements.startBtn.addEventListener("click", init);
DOMElements.nextBtn.addEventListener("click", init);

export {init };
