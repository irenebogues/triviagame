$(document).ready(function() {


//Setting Trivia Timer  
var countDown = 30;
var triviaTimer = setInterval(function () {
    countDown--;
document.getElementById('timer').textContent = countDown;
    if (countDown <= 0)
    clearInterval(triviaTimer);
}, 1000);


//Setting Time-up Event, reveal liquid rainbow party colors and highlight score
  setTimeout(timeUp, 1000 * 30);
  function timeUp() {

    $('body').css('background-image', 'url(./assets/images/trivia2.png)');
    $('.resultsBoard').css('font-size', '2em').css('color', '#FF0000');
    $('.triv').css('visibility', 'hidden');
    $('.rad').css('visibility', 'visible');
  }
});
  


// New Trivia Game, immediately invoking game on page load
(function() {
  function newTrivia() {
    //Array to store HTML output
    var output = [];

    triviaGame.forEach((newTrivia, tNum) => {
      //Array to store answers
      //Store right and wrong answers
      var answers = [];

  //for each trivia loop
     for (ansLetter in newTrivia.answers) {
        //Add radio button for each answer - Found this snippet on another site and modified.
       answers.push(
          `<label> 
          
          <input type="radio" name="triv${tNum}" value="${ansLetter}">
               ${ansLetter} :
               ${newTrivia.answers[ansLetter]}

          </label>` 
        );
       }
    
//Push trivia and answers to answers array
output.push(
    `<div class="trivia"> ${newTrivia.trivia} </div>
    <div class="answers"> ${answers.join("")} </div>` 

    );
  });


//Push the trivia, answers, and radio buttons to HTML
triviaContainer.innerHTML = output.join("");
}


 //Track answers
 function showResults() {
    var answersArrays = triviaContainer.querySelectorAll(".answer");
 
  let numCorrect = 0;


//Get users answers
triviaGame.forEach((newTrivia, tNum) => {
    //This section contains some snippets from other sites that have been combined or modified
    var answersArray = answersArrays[tNum];
    var selector = 'input[name=trivia${tNum}]:checked';
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


var triviaContainer = document.getElementById("triv");
var resultsArray = document.getElementById("results");
var submitButton = document.getElementById("submit");

//start Trivia
var triviaGame = [
//    Create an array of objects, each one representing a trivia
 
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
submitButton.addEventListener("click", showResults);
$(function () {
  $('.rad').click(function () {
     $('.rad').hide();
    $('.rad').show();
  });
});
})();

 




