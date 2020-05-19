const quizContainer = document.getElementsByClassName('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementsByClassName('results');

function buildQuiz(){
    // Storing the html output of the questions
    const output = [];
    // Going over each question
    teaQuestions.forEach( (currentQuestion, questionNumber) => {
        // Storing the possible answers
        const answers = [];

        for (letter in currentQuestion.answers) {
            // Adding the radio buttons
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: 
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        // Add the question and answers to the html output
        output.push(
            // ! Check if we're allowed to use .join, make sure it's up-to-date
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
        );
    });

    // Combine the buttons, questions, and potential answers into one div in the html
    // ! Check on innerHTML and .join, make sure they're up-to-date
    quizContainer.innerHTML = output.join("");
    
};
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