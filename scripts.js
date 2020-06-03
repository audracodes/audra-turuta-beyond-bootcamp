// ! Document Ready 

// Storing the form in a variable
const form = document.querySelector('form');
// Storing the reset button in a variable
const reset = document.getElementById('reset');
// Storing the submit button in a variable
const submit = document.getElementById('submit');
// Storing the results in variables
const element = document.getElementById('results');
const blackTea = document.getElementById('black');
const greenTea = document.getElementById('green');
const herbalTea = document.getElementById('herbal');
// Putting the final tea choice in a global variable
let yourTea = null; 

// Functions
const checkInputs = function () {
    // Ensures there's an input for each question
    if (document.querySelector('input[name="caffeine"]:checked') === null || document.querySelector('input[name="feeling"]:checked') === null || document.querySelector('input[name="season"]:checked') === null) {
        alert('Please pick');
    };
};

// Show the results title
const showResults = function () {
    // Storing results in variables
    element.classList.remove('visuallyHidden');
    // Show the tea type
    if (yourTea === 'black') {
        blackTea.classList.remove('visuallyHidden');
    } else if (yourTea === 'green') {
        greenTea.classList.remove('visuallyHidden');
    } else {
        herbalTea.classList.remove('visuallyHidden');
    };
};

// Sumbit the form
form.addEventListener('submit', (e) =>{ 
    // Prevent Default Submit
    e.preventDefault();
    // Ensure a selection has been made for each question
    checkInputs();
    // Store Inputs in variables
    const userCaffeine = document.querySelector('input[name="caffeine"]:checked').value; 
    
    const userFeeling = document.querySelector('input[name="feeling"]:checked').value;
    
    const userSeason = document.querySelector('input[name="season"]:checked').value;

    // Find the type of tea
    const findTea = function () {
        if (userCaffeine === 'love-it' || userCaffeine === 'i-am-indifferent') {
           if (userCaffeine === 'i-am-indifferent') {
               if (userFeeling === 'calm' || userFeeling === 'regal') {
                   if (userSeason === 'fall' || userSeason === 'spring-summer') {
                       yourTea = 'green';
                   } else {
                       yourTea = 'black';
                   };
               } else {
                   if (userSeason === 'fall') {
                       yourTea = 'green';
                   } else {
                       yourTea = 'black';
                   };
               };
           } else {
               if (userFeeling === 'regal' || userFeeling === 'calm') {
                   if (userSeason === 'fall' || userSeason === 'spring-summer') {
                       yourTea = 'black';
                   } else {
                       yourTea = 'green';
                   };
               } else {
                   if (userSeason === 'fall' || userSeason === 'spring-summer') {
                       yourTea = 'green';
                   } else {
                       yourTea = 'black';
                   }
               };
           };
        } else {
            yourTea = 'herbal';
        };
    };
    
    findTea();
    showResults();
    submit.classList.add('visuallyHidden');
});

// On Reset
reset.addEventListener('click', function () {
    const hideResults = function () {
        // Hide the results title
        element.classList.add('visuallyHidden');
        // Hide the tea type
        blackTea.classList.add('visuallyHidden');
        greenTea.classList.add('visuallyHidden');
        herbalTea.classList.add('visuallyHidden');
    };
    hideResults();
    submit.classList.remove('visuallyHidden');
});