//If counter gets to 0, alert Times Up! and questions are marked incorrect.
$(document).ready(function() {
  var countDown = 30;
 
var countDown = 30;
  var quizTimer = setInterval(function () {
    countDown--;


    if (countDown <= 0)
    clearInterval(quizTimer);
}, 1000)

  setTimeout(timeUp, 1000 * 30);
  function timeUp() {

    $('body').css("background-image", "url(../images/trivia2.png)");  
    $('.resultsBoard').css('font-size', '2em').css('color', '#FF0000');
    $('.trivia').css('visibility', 'hidden');
    $('.rad').css("visibility", "visible");  
  }
});

//
var quizContainer = document.getElementById("quiz");
var resultsArray = document.getElementById("results");
var answerButton = document.getElementById("answers");  



// New Trivia Game
(function() {
  function newTrivia() {
    //Array to store HTML output
    var output = [];

    triviaGame.forEach((newTrivia, tNum) => {
      //Array to store answers
      //Store right and wrong answers
      var answers = []

  
     for (ansLetter in newTrivia.answers) {
        //Add radio button for each answer - Found this snippet on another site and modified.
       answers.push(
          `<label> 
          
          <input type="radio" name="questions${tNum}" value="${ansLetter}">
               ${ansLetter} :
               ${newTrivia.answers[ansLetter]}
          
          
          </label>` 

        
        );
       }
    
//Push question and answers to answers array
output.push(
    `<div class="questions"> ${newTrivia.questions} </div>
    <div class="answers"> ${answers.join("")} </div>`

    );
  });


//Push the questions, answers, and radio buttons to HTML
quizContainer.innerHTML = output.join("");
}


 //Track answers
 function showResults() {
    var answersArrays = quizContainer.querySelectorAll(".answers");
 
  let numCorrect = 0;


//Get users answers
triviaGame.forEach((newTrivia, qNum) => {
    //This section contains some snippets from other sites that have been combined or modified
    var answersArray = answersArrays[qNum];
    var selector = 'input[name=question${qNum}]:checked';
    var userAnswers = (answersArray.querySelector(selector) || {}).value;

    // Increment CORRECT if answer is correct
    if (userAnswers === newTrivia.correctAnswer) {          
      numCorrect++;
  

       //Change correct answers to green/wrong answers to red
       answersArrays[tNum].style.color = "pink";
      } else {
        answersArrays[tNum].style.color = "black";
      }
    });

    
//Display score

resultsArray.innerHTML = `${numCorrect} out of ${triviaGame.length}`;
}


// var quizContainer = document.getElementById("quiz");
// var resultsArray = document.getElementById("results");
// var submitButton = document.getElementById("answers");

//
var triviaGame = [
//    Create an array of objects, each one representing a question
questions =  
    {trivia: "Which of the following is not a member of OPEC?",
        answers: {a1: "United States", a2: "Venezuela", a3: "Singapore", a4: "Saudi Arabia"}, correctAnswer: "a3"},
    {trivia: "What is the only mammal born with horns?", 
        answers: {a1: "Elephants", a2: "Rhinceros", a3: "Giraffe", a4: "Wild Boar"}, correctAnswer: "a3"},
    {trivia: "In what city you would find the Wizard of Oz?", 
        answers: {a1: "Kansas City", a2: "Emerald City", a3: "Lion City", a4: "The City of Gold"}, correctAnswer: "a2"},

];


//Call function newTrivia
newTrivia();
  
//Rad Party Button to display score
answerButton.addEventListener("click", showResults);
$(function () {
  $('.rad').click(function () {
     $('.rad').hide();
    $('.rad').show();
  });
})
})


 




