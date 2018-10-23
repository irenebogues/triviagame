var triviaGame = {
    // Create an array of objects, each one representing a question
    questions: [ { q: "Which of the following is not a member of OPEC?", a1: "United States", a2: "Venezuela", a3: "Singapore", a4: "Saudi Arabia", correct: 3, comment: "Singapore is not a member of OPEC" },
                 { q: "?", a1: "", a2: "", a3: "", a4: "", correct: 0, comment: "" } ],
    winCount: 0,
    loseCount: 0,
 };


 //I will create a trivia form with multiple choice or true/false options (my choice).
//Start button appears when page loads
//The player will have a limited amount of time to finish the quiz.
//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//The players dont have an option to pick one or more answers
//A countdown timer is included to add more challenge to the players.
