//variables
var highScores = [];

var questionNumber = 0;

var secondsLeft = 0;

var timer;

//object to contain questions and answers
var qAndA = [

    {
        question: "Commonly used data types DO NOT include: ",
        choice: ["strings", "booleans", "alerts", "numbers"],
        answer: 2 //alerts
    },

    {
        question: "The condition in an if/else statement is enclosed with _____?",
        choice: ["[ ]", "{ }", "( )", " ' ' "],
        answer: 1 //curly braces
    },

    {
        question: ""
    },

    {
        question: ""
    },

    {
        question: ""
    }
];

//startQuiz function
var startQuiz = function(event) { 
    event.preventDefault(); 
    // used console.dir(taskNameInput); to find this
    var startButton = document.querySelector("start-quiz");
    
    //if button is clicked, run quiz
    if (startButton) {
        showQuestions();
    }

}; 


//loadHighScores function

//answer right/wrong function

//display highscores with list items/highscores array

//save to local storage

//show quiz start page

//clear high scores

//set timer
var setTimer = function () {
    secondsLeft = 0;
    document.getElementById("timerValue").innerHTML = secondsLeft;
};

//start timer
var startTimer = function() {
    secondsLeft = 75;
    timerInterval = setInterval(function() {
        secondsLeft--;
        document.getElementById("timerValue").innerHTML = secondsLeft;
        if (secondsLeft === 0) {
            stopTimer();
            //hide the questions
            //show the finish page
            //show the last answer
            //score
        }
    }, 1000);
};


//clear timer
var stopTimer = function() {
    clearInterval(timerInterval);
};

//show questions
var showQuestions = function() {

};


// compare user choice to answer


//event listeners
//start quiz


//hide answer

//highscore click

//start over button

//clear highscores button

//player initials submit button

setTimer();