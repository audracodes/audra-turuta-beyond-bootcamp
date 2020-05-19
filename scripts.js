const quizContainer = document.getElementsByClassName('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementsByClassName('results');

function buildQuiz(){};
function showResults(){};

// Display Quiz 
buildQuiz();

// Show Results on Submit
submitButton.addEventListener('click', showResults);

//? These are sample questions to help with the logic, logic still needs to be added

const teaQuestions = [
    {
        question: "How do you feel about caffeine?",
        answers: {
            a: "Love it", 
            b: "No thanks",
            c: "Doesn't matter",
        },
        teaAnswers: {
            blackTea: "a",
            herbalTea: "b",
            greenTea: "c",
        },
    },    

    {
        question: "How are you feeling?",
        answers: {
            a: "Fancy",
            b: "Regal",
            c: "Calm",
        },
        teaAnswers: {
            blackTea: "b",
            herbalTea: "a",
            greenTea: "c",
        }
    },

    //! Maybe change the last question?
    {
        question: "Are you excited for your tea choice?",
        answers: {
            a: "Sure",
            b: "You bet!",
            c: "I guess?",
        },
        teaAnswers: {
            blackTea: "c",
            herbalTea: "b",
            greenTea: "a",
        }
    },
]