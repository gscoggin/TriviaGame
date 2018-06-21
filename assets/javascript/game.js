//Javascript for Triva Game

//####################################################
// Psuedocode for the Trivia Game
//####################################################
// 1) when the page renders, show a title and a start start button
// 2) When the user clicks the start button, show a timer and a list of multiple choice questions. You will need an event listener for the start button and an on click event for the start button to render the rest of the page.
// 3) Each question will have multiple choices, you will need to store the user's selection, match it against the correct answer, to see if the user is right. If the user is right, add it to correct answers, if the user is wrong, add it to wrong answers. If the user doesn't answer any questions, the number of unanswered questions needs to be counted as unanswered questions when the clock runs out. 
// 4) When the user clicks done, show the results of correct, incorrect and unasnwered questions. 
// 4a) or if the clock runs out first, show the results of correct, incorrect and unanswered questions. 

var correctAnswer = [];
var incorrectAnswer = []; 
var notAnswer = [];
var questions = [{
  //question1
  question: "What classic horror film was called production 9401 during filming?",
  choices: ["Psycho", "Don't Look Now", "Frankenstein", "The House on Hauted Hill"],
  correctAnswer: "Psycho"
}, {
  //question2
  question: "In the movie Jaws, what was the name of the police chief?",
  choices: ["Mike Brody", "Matt Hooper", "Martin Brody", "Martin Hooper"],
  correctAnswer: "Martin Broody"
}, {
  //question3
  question: "In the movie Terminator, Sarah Conner was played by which Actor?",
  choices: ["Helen Mirin", "Emilia Clarke", "Julia Roberts", "Linda Hamilton"],
  correctAnswer: "Linda Hamilton"
}, {
  //question4
  question: "In the Big Lebowski, which of the characters in the bowling alley never actually bowls?",
  choices: ["The Dude", "Walter", "Smokey", "Jesus"],
  correctAnswer: "The Dude"
}, {
  //question5
  question: "In total, how many pairs of glasses did Daniel Radcliffe go through while filming the Harry Potter series?",
  choices: [1, 37, 160, 554],
  correctAnswer: 160
}];

//onclick event to start the game, and start the timer. 
$("#startButton").on("click", function () {
  $("#start").empty();
  console.log("the game has started");

  addQuestions();
  createRadios();  
  //timer set for 15 seconds
  setTimeout(timeUp, 1000 * 60);

  function timeUp() {
    // in the div element with an id of start add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#start").append("<h2>Time's Up!</h2>");
    console.log("time is up");
  }

});

function addQuestions() {

  // Creating a div to hold the questions
  var questionsDiv = $("<div class='questions col-sm-12 shadow-lg p-3 mb-5 bg-white'>");

  // Storing the rating data
  var question1 = questions[0].question;
  console.log(question1);

  // Creating an element to have the rating displayed
  var pOne = $("<div>").text("Question 1: " + question1);

  // Displaying the rating
  questionsDiv.append(pOne);
  var radioButtons = createRadios(0);
  pOne.append(radioButtons);
  // Storing the release year
  var question2 = questions[1].question;
  console.log(question2);

  // Creating an element to hold the release year
  var pTwo = $("<div>").text("Question 2: " + question2);

  // Displaying the release year
  questionsDiv.append(pTwo);
  var radioButtons = createRadios(1);
  pTwo.append(radioButtons);
  
  // Storing the plot
  var question3 = questions[2].question;
  console.log(question3);
  // Creating an element to hold the plot
  var pThree = $("<div>").text("Question 3: " + question3);

  // Appending the plot
  questionsDiv.append(pThree);
  var radioButtons = createRadios(2);
  pThree.append(radioButtons);
  
  // Retrieving the URL for the image
  var question4 = questions[3].question;
  console.log(question4);
  // Creating an element to hold the image
  var pFour = $("<div>").text("Question 4: " + question4);

  // Appending the image
  questionsDiv.append(pFour);
  var radioButtons = createRadios(3);
  pFour.append(radioButtons);
  

  var question5 = questions[4].question;
  console.log(question5);
  //Creating an element to hold the image
  var pFive = $("<div>").text("Question 5: " + question5);

  // Appending the image
  questionsDiv.append(pFive);
  var radioButtons = createRadios(4);
  pFive.append(radioButtons);
  
  // Putting the entire movie above the previous movies
  $("#questionGroup").append(questionsDiv);
};

function createRadios(index) {
  var radioList = $('<ul>');
  var item;
  var input = '';
  for (var i = 0; i < questions[index].choices.length; i++) {
    item = $('<li>');
    input = '<input type="radio" name="answer" value=' + i + ' />';
    input += questions[index].choices[i];
    item.append(input);
    radioList.append(item);
  }
  return radioList;
}


