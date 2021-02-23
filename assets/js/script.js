//variables
let highScores = [];

var questionNumber = 0;

var secondsLeft = 0;

var timer;

pageContentEl = document.querySelector("#page-content");

answerEl = document.querySelector("#answers");

submitEl = document.querySelector("#playerInitialsButton");

highScoresEl = document.querySelector("#highScoresList");

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
    //event.preventDefault(); 
    // used console.dir(taskNameInput); to find this

    //show questions on page, hide opening page
    var element = document.getElementById("start");
    element.classList.add("hide");
    var element1 = document.getElementById("QuizQ");
    element1.classList.remove("hide");
    
    //start the timer, set the questionNumber to 0 and go to the show questions function
    startTimer();
    questionNumber = 0;
    showQuestions();
}; 

//start button handler
var buttonHandler = function(event) {
    //console.log(event.target); //console shows what each object is on click
    var targetEl = event.target;

    if (targetEl.matches("#start-quiz")) {
        //get the elements task id
        startQuiz();
    }
    else if (targetEl.matches("#highScoresLink")) {
        showHighScores();
    }    
};

//quiz list button handler
var quizButton = function(event) {
    var targetEl = event.target
    var element;

    if (targetEl.matches("#b0")) {
        element = 0;
    }
    else if (targetEl.matches("#b1")) {
        element = 1;
    }
    else if (targetEl.matches("#b2")) {
        element = 2;
    }
    else if (targetEl.matches("#b3")) {
        element =3;
    }
    else {
        alert("pick an answer");
    }

    //buttonIndex = parseInt(element, 10);
    console.log(element);
    checkAnswer(element);
};

//hide answer
var hideAnswer = function() {
    var element1 = document.getElementById("answer");
    element1.classList.add("hide");
};

//get the highscores from memory and load them into an array called highScoreArray
var loadHighScores = function() {
    var highScoresArray = localStorage.getItem("highScores");
    console.log(highScoresArray);
    if (highScoresArray) //if not undefined
    {
      highScores = JSON.parse(highScoresArray);  //make sure there is a highscores object
    }
    else {
      localStorage.setItem("highScores", JSON.stringify(highScores));  //if not make one and store it to local storage
    }
};

var showHighScores = function (highScores) {
    var element1 = document.getElementById("header");
    element1.classList.add("hide");

    var element1 = document.getElementById("QuizQ");
    element1.classList.add("hide");

    var element1 = document.getElementById("start");
    element1.classList.add("hide");

    var element1 = document.getElementById("finish-page");
    element1.classList.add("hide");

    var element1 = document.getElementById("highScores-page");
    element1.classList.remove("hide");

    //console.log(highScores);
    //loadHighScores();
    console.log(highScores);

    for(var i = 0; i < highScores.length; i++) {
        var counter = i + 1; 
        var listItemEl = document.createElement("li");
        listItemEl.innerHTML = counter + ". " + highScores[i].initials + " - " + highScores[i].score; 
        console.log(highScoresEl);
        console.log(listItemEl);
        highScoresEl.appendChild(listItemEl);
    }
    setTimer();
};

//set highscores with list items/highscores array
var userScore = function() {
    
    var playerInitials = document.querySelector("input[id='playerInitials']").value;
    console.log(playerInitials);

    document.getElementById("timerValue").innerHTML = secondsLeft;

    if (playerInitials !== "") {
        var score = {
            initials: playerInitials,
            score: secondsLeft
        }

        highScores.push(score);
        console.log(score);

        localStorage.setItem("highScores", JSON.stringify(highScores));
        
        showHighScores(highScores);
    }
    else {
        alert("You must enter your initials to record a score.");
    }
};

function startOver() {
    hideAnswer();

    var element1 = document.getElementById("start");
    element1.classList.remove("hide");

    var element2 = document.getElementById("QuizQ");
    element2.classList.add("hide");

    var element1 = document.getElementById("highScores-page");
    element1.classList.add("hide");
};

var clearHighScores = function() {
    highScores = [];
    localStorage.setItem("highScores", JSON.stringify(highScores));

    //empty highscores
};

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
    
    if (questionNumber != qAndA.length) {

        //get question from quiz object
        var question = qAndA[questionNumber].question;
        document.getElementById("question").innerHTML = question;
        hideAnswer();
        
        var choices = qAndA[questionNumber].choice;

        for (var i = 0; i < choices.length; i++) {
            var counter = i + 1;
            document.getElementById("b"+i).innerHTML = choices[i]
        }
        //onClick="this.disabled=true; this.value='Sending…'";
    }
    else {
        stopTimer();

        //hide the questions
        var element1 = document.getElementById("QuizQ");
        element1.classList.add("hide");

        //show finish page
        var element = document.getElementById("finish-page");
        element.classList.remove("hide");

        //show the last answer
        var element2 = document.getElementById("answer");
        element2.classList.add("hide");

        //set score
        let score = secondsLeft;

        questionNumber = 0;
    }

};

var checkAnswer = function(buttonIndex) {
    if (questionNumber < qAndA.length) {

        var answer = qAndA[questionNumber].answer; //get answer

        console.log("Question: " + questionNumber + ", answer: " + answer + ", buttonIndex: " + buttonIndex);

        if (answer === buttonIndex) {
            document.getElementById("answerStatus").innerHTML = "correct";
        }
        //if user doesnt click a button, run function again to avoid getting question wrong
        else if (buttonIndex === undefined) {
            checkAnswer(buttonIndex);
        }
        else {
            document.getElementById("answerStatus").innerHTML ="wrong";
            if (secondsLeft >= 10) {
                secondsLeft -= 10;
            }
        }
        
        questionNumber++;
        var element1 = document.getElementById("answer");
        element1.classList.remove("hide");

        setTimeout(() => {
            showQuestions();
        }, 1500);
    }
};

//load high scores
highscores1 = loadHighScores();
highScores.push(highscores1);

//button handler
pageContentEl.addEventListener("click", buttonHandler);

//quiz answers
answerEl.addEventListener("click", quizButton);

//submit high scores
submitEl.addEventListener("click", userScore);

//show highscores
highScoresEl.addEventListener("click", showHighScores);

setTimer();