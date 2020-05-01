//parameters
const parameters = {
  currentQuestion: 0,
  points: 0,
  currentTime: 20,
  usersAnswers: [],
  arrQuestionsIndex: [],
  numberOfQuestions: 3,
  index: [],
  interface: "menu",

};

function reset() {
  parameters.currentQuestion = 0;
  parameters.points = 0;
  parameters.arrQuestionsIndex.length = 0;
  parameters.index.length = 0;
}

export {
  parameters,
  reset,
};