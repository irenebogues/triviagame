// from https://trivia.fyi/

//If counter gets to 0, alert Times Up! and questions are marked incorrect.
$(document).ready(function() {

  setTimeout(timeUp, 1000 * 30);
  function timeUp() {

    $('body').css("background-image", "url(../images/trivia2.png)");  
    $('.resultsBoard').css('font-size', '2em').css('color', '#FF0000');
    $('.trivia').css('visibility', 'hidden');
    $('.rad').css("visibility", "visible");  
  }
});

  // var countDown = 30;
  // var quizTimer = setInterval(function () {
  //   countDown--;



  // document.getElementById('timer').textContent = countDown;

  // if (countDown <= 0)
  //         clearInterval(quizTimer);
  //     }, 1000)
  //   });

  //   var timeleft = 120;
  //   var downloadTimer = setInterval(function(){
  //   timeleft--;
  //    document.getElementById('timer').textContent = timeleft;
    
  //   if(timeleft <= 0)
  //       clearInterval(downloadTimer);
  //   },1000);
  // });

// New Trivia Game
(function() {
  function newTrivia() {
    //Array to store HTML output
    var output = [];

//     //For each question loop
    triviaGame.forEach((newTrivia, tNum) => {
      //Array to store answers
      //Store right and wrong answers
      var answers = [];

  
     for (ansLetter in newTrivia.answers) {
        //Add radio button for each answer - Found this snippet on another site and modified.
       answers.push(
          `<label> </label>` 

        
        );
    
//Push question and answers to answers array
output.push(
    `<div class="question"> ${newTrivia.question} </div>
    <div class="answers"> ${answers.join("")} </div>`
  );


//Push the questions, answers, and radio buttons to HTML
quizContainer.innerHTML = output.join("");
}


 //Track answers
 function showResults() {
    var answerArrays = quizContainer.querySelectorAll(".answers");
 
  let numCorrect = 0;


//Get users answers
triviaGame.forEach((newTrivia, qNum) => {
    //This section contains some snippets from other sites that have been combined or modified
    var answerArray = answerArrays[qNum];
    var selector = 'input[name=question${qNum}]:checked';
    var userAnswer = (answerArray.querySelector(selector) || {}).value;

    // Increment CORRECT if answer is correct
    if (userAnswer === newTrivia.correctAnswer) {          
      numCorrect++;
    }
    });

//Display score

resultsArray.innerHTML = `${numCorrect} out of ${triviaGame.length}`;
}

var quizContainer = document.getElementById("quiz");
var resultsArray = document.getElementById("results");
var submitButton = document.getElementById("answers");

var triviaGame = [
//    Create an array of objects, each one representing a question
questions =  
    {trivia: "Which of the following is not a member of OPEC?",
        answer: {a1: "United States", a2: "Venezuela", a3: "Singapore", a4: "Saudi Arabia"}, correctAnswer: "a3"},
    {trivia: "What is the only mammal born with horns?", 
        answer: {a1: "Elephants", a2: "Rhinceros", a3: "Giraffe", a4: "Wild Boar"}, correctAnswer: "a3"},
    {trivia: "In what city you would find the Wizard of Oz?", 
        answer: {a1: "Kansas City", a2: "Emerald City", a3: "Lion City", a4: "The City of Gold"}, correctAnswer: "a2"},

];


//Call function newTrivia
newTrivia();
  
//Rad Party Button to display score
submitButton.addEventListener("click", showResults);
$(function () {
  $('.rad').click(function () {
     $('.rad').hide();
    $('.rad').show();
  });
})
})


 


//Call newTrivia function.
//
//Trigger random questions.

    //var random = Math.floor((Math.random() * triviaGame.questions.length));
    //var currentObject = triviaGame.questions[random];
    //$("#question").html(currentObject.q);
    //currentObject.read = true;

    //Start with the easy assignment first where the timer and questions are all in 

       






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

