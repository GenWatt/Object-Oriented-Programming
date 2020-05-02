const quiz = {
    question1: {
        question: "Webpack jest...",
        answers: {
            answer1: {
                text: "Narzędziem",
                correct: true,
            },
            answer2: {
                text: "Językiem",
                correct: false,
            },
            answer3: {
                text: "Loaderem",
                correct: false,
            },
            answer4: {
                text: "Pluginem",
                correct: false,
            },
        },
        points: 2,
    },
    question2: {
        question: "Czy javascript jest tylko synchronicznym językiem?",
        answers: {
            answer1: {
                text: "Tak",
                correct: false,
            },
            answer2: {
                text: "Nie",
                correct: true,
            },
        },
        points: 1,
    },
    question3: {
        question: "Plik .gitignore sprawia,że...",
        answers: {
            answer1: {
                text: "Git pomija zawarte w nim nazwy plików przed dodaniem do repozytorium.",
                correct: true,
            },
            answer2: {
                text: "Pliki  w nim zawarte zostaną dodane na nowy branch.",
                correct: false,
            },
            answer3: {
                text: "Wymienione pliki zostaną w nim usunięte.",
                correct: false,
            },
            answer4: {
                text: "Pliki będą w repozytorium, ale nie będzie można ich pobrać.",
                correct: false,
            },
        },
        points: 2,
    },
    question4: {
        question: "Co nie jest preprocesorem?",
        answers: {
            answer1: {
                text: "Typescript",
                correct: true,
            },
            answer2: {
                text: "Scss",
                correct: false,
            },
            answer3: {
                text: "React",
                correct: true,
            },
            answer4: {
                text: "Sass",
                correct: false,
            },
        },
        points: 1,
    },
    question5: {
        question: "Arrow Function została dodana w:",
        answers: {
            answer1: {
                text: "ES6",
                correct: true,
            },
            answer2: {
                text: "2016r.",
                correct: false,
            },
            answer3: {
                text: "ES7",
                correct: false,
            },
            answer4: {
                text: "2015r",
                correct: true,
            },
        },
        points: 3,
    },
};

export {
    quiz
};