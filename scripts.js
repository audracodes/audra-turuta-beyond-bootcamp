// ! Document Ready
    // Functions
    // const onClick = function (event) {
    //     // Prevent Default
    //     event.preventDefault();
    //     // Storing user inputs in variables
    //     const userCaffeine = document.querySelector('input[name="caffeine"]:checked').value; 

    //     const userFeeling = document.querySelector('input[name="feeling"]:checked').value;
        
    //     const userSeason = document.querySelector('input[name="season"]:checked').value;
        
    //     // Ensure user has selected a choice for each question
    //     if (userCaffeine === null || userFeeling === null || userSeason === null) {
    //         alert('Please answer all of the questions')
    //     };
    // };
    
    // Storing buttons/forms in variables
    // const submitButton = document.getElementById('submit');

    const form = document.querySelector('form');

    form.addEventListener('submit', (e) =>{ 
    e.preventDefault();
    })

    // // On click of the submit button
    // submitButton.addEventListener('click', onClick);

