import "./style.scss";

const quiz = {
  questions: {
    question1: {
      question: "Ile jest koni?",
      answers: {
        answer1: {
          text: "2",
          correct: true
        },
        answer2: {
          text: "4",
          correct: false
        },
        answer3: {
          text: "3",
          correct: false
        },
        answer4: {
          text: "1",
          correct: false
        },
      },
    },
    question2: {
      question: "Ile dmg ma nocturne?",
      answers: {
        answer1: {
          text: "300",
          correct: true
        },
        answer2: {
          text: "150",
          correct: false
        },
      },
    },
    question3: {
      question: "Jesienne głębokie przekopanie ziemi polega na?",
      answers: {
        answer1: {
          text: "Obróceniu o 180 stopni brył ziemi",
          correct: true
        },
        answer2: {
          text: "Obróceniu o 90 stopni brył ziemi",
          correct: false
        },
        answer3: {
          text: "Obróceniu o 70 stopni brył ziemi",
          correct: false
        },
        answer4: {
          text: "Obróceniu o 50 stopni brył ziemi",
          correct: false
        },
      },
    },
  },
  currentQuestion: 0,
  points: 0,
};
let value;
// DOM elements
let answersElements;
const conteiner = document.querySelector(".conteiner");
let box = conteiner.querySelector(".box");
let questionElement = conteiner.querySelector(".question");
const nextBtn = conteiner.querySelector(".next");
const overlay = nextBtn.querySelector(".overlay")

class LoadQuiz {
  constructor(quiz) {
    this.question = quiz.questions["question" + quiz.currentQuestion].question;
    this.answer = quiz.questions["question" + quiz.currentQuestion].answers;
  }

  showQuestion() {
    questionElement.innerText = this.question;
  }

  showAnswers() {
    Object.keys(this.answer).forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = "answer";
      button.innerText = this.answer["answer" + (index + 1)].text;
      button.dataset.correct = this.answer["answer" + (index + 1)].correct;
      button.addEventListener("click", markAnswer);

      box.appendChild(button);
    });
    const answersElements = document.querySelectorAll(".answer");

    anime({
      targets: answersElements,
      opacity: [0, 1],
      translateY: [700, 0],
      delay: anime.stagger(100),
    });

    return answersElements;
  }
}

class Counter {
  constructor(quiz) {
    this.points = quiz.points;
    this.correct = quiz.questions["question" + quiz.currentQuestion].correct;
  }

  checkAnswer() {
    if (value === "true") quiz.points++;
  }

  hideQuizBoard() {
    const duration = 1000;
    anime({
      targets: nextBtn,
      scale: 0,
      complete: function () {
        anime({
          targets: nextBtn,
          rotate: 90,
        });
      },
    });
    anime({
      targets: questionElement,
      rotate: 720,
      scale: 0,
      duration: duration,
    });
    anime({
      targets: answersElements[0],
      translateX: -1000,
      translateY: -500,
      duration: duration,
    });
    anime({
      targets: answersElements[1],
      translateX: 1000,
      translateY: -500,
      duration: duration,
    });
    anime({
      targets: answersElements[2],
      translateX: -1000,
      translateY: 500,
      duration: duration,
    });
    anime({
      targets: answersElements[3],
      translateX: 1000,
      translateY: 500,
      duration: duration,
    });

    this.createResultBoard();
  }

  createResultBoard() {
    // remove question and answers elements
    box.remove();
    const div = document.createElement("div");
    div.className = "result-board";
    div.innerHTML = `
      <h1>Koniec Quizu</h1>
      <p>Udało Ci się zdobyć <strong>${quiz.points} punkty</strong>!</p>
      <button class="play-again-btn">Zagraj jeszcze raz</button>
    `;

    conteiner.appendChild(div);

    const reslutBoard = document.querySelector(".result-board");
    const playAgainBtn = reslutBoard.querySelector(".play-again-btn");
    const resultHeader = reslutBoard.querySelector("h1");
    const reslutParagraph = reslutBoard.querySelector("p");

    playAgainBtn.addEventListener("click", playAgain);

    anime({
      targets: reslutBoard,
      scaleY: [0, 1],
      delay: 200,
    });

    anime({
      targets: resultHeader,
      translateX: [-400, 0],
      opacity: [0, 1],
      delay: 300,
      duration: 300,
      easing: "cubicBezier(.5, .05, .1, .3)",
    });

    anime({
      targets: reslutParagraph,
      skewX: [40, 0],
      rotateX: [40, 0],
      delay: 350,
    });

    anime({
      targets: playAgainBtn,
      rotateY: [90, 0],
      translateY: [50, 0],
      delay: 350,
    });

    function playAgain() {
      quiz.currentQuestion = 0;
      quiz.points = 0;

      const div = document.createElement("div");
      div.className = "box";

      conteiner.appendChild(div);

      box = conteiner.querySelector(".box");
      questionElement = conteiner.querySelector(".question");

      anime({
        targets: reslutBoard,
        scaleY: 0,
        transformOrigin: "right",
        duration: 300,
        complete: () => reslutBoard.remove(),
      });

      anime({
        targets: questionElement,
        scale: 1,
      });

      anime({
        targets: nextBtn,
        rotate: 0,
        scale: 1,
      });

      nextQuestion();
    }
  }
}

function nextQuestion() {
  //remove existing answers
  if (answersElements)
    answersElements.forEach((element) => {
      element.remove();
    });
  //check correct answer
  if (quiz.currentQuestion) new Counter(quiz).checkAnswer();
  //check if end of quiz
  if (Object.keys(quiz.questions).length === quiz.currentQuestion)
    return new Counter(quiz).hideQuizBoard();

  quiz.currentQuestion++;
  //create new answer btn
  answersElements = new LoadQuiz(quiz).showAnswers();
  answersElements.forEach((element) => element.classList.remove("cheked"));

  nextBtn.disabled = true;
  // load quetion
  new LoadQuiz(quiz).showQuestion();
}

nextQuestion();

//listeners
nextBtn.addEventListener("click", nextQuestion);
//animation on hover
nextBtn.addEventListener("mousemove", function (e) {
  const clientX = e.offsetX;
  const clientY = e.offsetY;

  overlay.style.left = clientX + "px";
  overlay.style.top = clientY + "px";
  overlay.classList.add("show");
});

nextBtn.addEventListener("mouseleave", function () {
  overlay.classList.remove("show");
});

function markAnswer() {
  answersElements.forEach((element) => element.classList.remove("cheked"));
  this.classList.add("cheked");
  value = this.dataset.correct;
  nextBtn.disabled = false;
}