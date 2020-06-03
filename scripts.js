// ! Document Ready 

// Storing the form in a variable
const form = document.querySelector('form');

// Functions
const checkInputs = function () {
    if (document.querySelector('input[name="caffeine"]:checked') === null || document.querySelector('input[name="feeling"]:checked') === null || document.querySelector('input[name="season"]:checked') === null) {
        alert('Please pick');
    }
};

// Sumbitting the form
form.addEventListener('submit', (e) =>{ 
    // Prevent Default Submit
    e.preventDefault();
    // Ensure a selection has been made for each question
    checkInputs();
    // Store Inputs in variables
    const userCaffeine = document.querySelector('input[name="caffeine"]:checked').value; 
    
    const userFeeling = document.querySelector('input[name="feeling"]:checked').value;
    
    const userSeason = document.querySelector('input[name="season"]:checked').value;
    console.log(userCaffeine, userFeeling, userSeason);

});

//! hide the tea types
// user clicks submit
// prevent default
// check for answers
// store inputs
//! compare them to the tea types
//! pick the tea
//! display the correct tea type

