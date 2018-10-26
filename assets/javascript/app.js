// from https://trivia.fyi/






// 

$(document).ready(function() {
    var timeleft = 60;
    var downloadTimer = setInterval(function(){
    timeleft--;
     document.getElementById('timer').textContent = timeleft;
    
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000)
  });





  





// var triviaGame = {
//     Create an array of objects, each one representing a question
//     questions: [ { q: "Which of the following is not a member of OPEC?", a1: "United States", a2: "Venezuela", a3: "Singapore", a4: "Saudi Arabia", correct: 3, comment: "Singapore is not a member of OPEC"},
//                  { q: "What is the only mammal born with horns?", a1: "Elephants", a2: "Rhinceros", a3: "Giraffe", a4: "Wild Boar", correct: 3, comment: "Giraffe is the only mammal with horns"},
//                  { q: "In what city you would find the Wizard of Oz?", a1:"Kansas City", a2: "Emerald City", a3: "Lion City", a4: "The City of Gold", correct: 2, comment: "The correct answer is Emerald City"},
//                  { q: "?", a1: "", a2: "", a3: "", a4: "", correct: 0, comment: "" } ],
//     winCount: 0,
//     loseCount: 0,
//  };

// function triggerQuestions () {
//     $("#trivia").empty();
 


//Call triggerQuestions function.
//
//Trigger random questions.

    //var random = Math.floor((Math.random() * triviaGame.questions.length));
    //var currentObject = triviaGame.questions[random];
    //$("#question").html(currentObject.q);
    //currentObject.read = true;

    //Start with the easy assignment first where the timer and questions are all in 

       //Generating the options with a loop
       //Create a for loop for each array
//        i = 0;
//        for (var i = 1; i < triviaGame.questions.length; i++) { // .length to go thru the questions each
//            //
//         $("#quizzes").append('<input id="quiz' + i + '" type="radio">' + " " + currentObject['a'+i] + '</input><br>'); 
//         //create a variable that reference the question
//         //
//     }
// }








//capture the user inputs
//check the right and wrong
//which option that the user click after the submit button is clicked.

 //I will create a trivia form with multiple choice or true/false options.
//Start button appears when page loads, timer starts counting down 
//The player will have a limited amount of time to finish the quiz.

//If counter gets to 0, alert Times Up! and questions are marked incorrect.
//Display comment and right answer
//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//The players dont have an option to pick one or more answers

// When the user chooses an option and hits the "Confirm" button:
// If user answered incorrectly, display comment "Incorrect" and the comment.
// If user answered right, display comment "Correct!" and the comment.


// After first question is answered, second question appears auntomatically after some time.
// Repeat the process for each question.


// At the end of the game, display correct and incorrect answers, as well as a button to restart the game.
