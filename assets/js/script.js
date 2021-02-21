//variables
var highScores = [];

var questionNumber = 0;

var secondsLeft = 0;

var timer;

pageContentEl = document.querySelector("#page-content");

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
        question: "Arrays in JavaScript can be used to store: ",
        choice: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        answer: 3 // all of the above
    },

    {
        question: "String values must be inclosed within _____ when assigned to variables",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: 2 //quotes
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger: ",
        choice: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: 3 //console log
    }
];

//startQuiz function
var startQuiz = function(event) { 
    event.preventDefault(); 
    // used console.dir(taskNameInput); to find this

}; 

//start button handler
var buttonHandler = function(event) {
    //console.log(event.target); //console shows what each object is on click

    var targetEl = event.target;

    if (targetEl.matches("#start-quiz")) {
        //get the elements task id
        showQuestions();
    }
    else if (targetEl.matches("#highScoresLink")) {
        highScores();
    }
    
};

//loadHighScores function

//answer right/wrong function

//display highscores with list items/highscores array
var highScores = function() {
    console.log("highscore");
};

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
    console.log("hello");
};


// compare user choice to answer


//event listeners
//start quiz


//button handler
pageContentEl.addEventListener("click", buttonHandler);

//hide answer

//highscore click

//start over button

//clear highscores button

//player initials submit button

setTimer();