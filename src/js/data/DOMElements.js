// DOM elements
const DOMElements = {
    startBtn: document.querySelector(".start-game"),
    startBoard: document.querySelector(".start-board"),
    backToMenuBtn: document.querySelector(".back-to-menu"),
    answersElements: document.querySelectorAll(".answer"),
    overlay: document.querySelector(".overlay"),
    conteiner: document.querySelector(".conteiner"),
    box: document.querySelector(".box"),
    questionElement: document.querySelector(".question"),
    nextBtn: document.querySelector(".next"),
    info: document.querySelector(".info"),
    questionsIndexElement: document.querySelector(".total-question"),
    currentQuestionText: document.querySelector(".current-question"),
    currentTimeElement: document.querySelector(".current-time"),
    waves: document.querySelectorAll(".progress"),
    buttons: document.querySelectorAll("button"),
    timeOptionConteiner: document.querySelector(".time-option"),
    questionOptionConteiner: document.querySelector(".count-of-question-option"),
};

export {
    DOMElements
}