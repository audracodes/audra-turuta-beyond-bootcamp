// ! Document Ready 

// Storing the form in a variable
const form = document.querySelector('form');

// Sumbitting the form
form.addEventListener('submit', (e) =>{ 
    // Prevent Default Submit
    e.preventDefault();
    
    // Ensure a selection has been made for each question
    const storeInputs = function () {
        if (document.querySelector('input[name="caffeine"]:checked') === null || document.querySelector('input[name="feeling"]:checked') === null || document.querySelector('input[name="season"]:checked') === null) {
            alert('Please pick');
        }
    }
    storeInputs();
    // const userCaffeine = document.querySelector('input[name="caffeine"]:checked').value; 
    
    // const userFeeling = document.querySelector('input[name="feeling"]:checked').value;
    
    // const userSeason = document.querySelector('input[name="season"]:checked').value;

    // // Ensure user has selected a choice for each question
    // if (userCaffeine === null || userFeeling === null || userSeason === null) {
    //         alert('Please answer all of the questions')
    //     };
});

// // On click of the submit button
    // submitButton.addEventListener('click', onClick);

