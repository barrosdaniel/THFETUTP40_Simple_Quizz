// Quizz questions
var question1 = 'What is the language used to structure webpages?';
var question2 = 'What is the language used to style webpages?';
var question3 = 'What is the language used to create interaction for  webpages?';
var question4 = 'What is the most popular styling language used to implement a font-end style architecture?';
var question5 = 'What is the most popular JavaScript framework in 2019?';

// Quantion answers
var question1Answer = 'HTML';
var question2Answer = 'CSS';
var question3Answer = 'JavaScript';
var question4Answer = 'Sass';
var question5Answer = 'React';

// Initialise counter variables
var correctAnswers = 0;
var questionsRemaining = 5;

// Start game with initial state message
alert('Welcome to the Programming Quizz. Press OK to continue to the quizz.');
alert('You have answered ' + correctAnswers + ' questions right. You have ' + questionsRemaining + ' questions left to answer.');

// Get reponse for question 1 and compare to answer. Then write new state
var question1Response = prompt(question1);
if (question1Response === question1Answer) {
  correctAnswers += 1;
  questionsRemaining -= 1;
} else {
  questionsRemaining -= 1;
}
alert('You have answered ' + correctAnswers + ' questions right. You have ' + questionsRemaining + ' questions left to answer.');

// Get reponse for question 2 and compare to answer. Then write new state
var question2Response = prompt(question2);
if (question2Response === question2Answer) {
  correctAnswers += 1;
  questionsRemaining -= 1;
} else {
  questionsRemaining -= 1;
}
alert('You have answered ' + correctAnswers + ' questions right. You have ' + questionsRemaining + ' questions left to answer.');

// Get reponse for question 3 and compare to answer. Then write new state
var question3Response = prompt(question3);
if (question3Response === question3Answer) {
  correctAnswers += 1;
  questionsRemaining -= 1;
} else {
  questionsRemaining -= 1;
}
alert('You have answered ' + correctAnswers + ' questions right. You have ' + questionsRemaining + ' questions left to answer.');

// Get reponse for question 4 and compare to answer. Then write new state
var question4Response = prompt(question4);
if (question4Response === question4Answer) {
  correctAnswers += 1;
  questionsRemaining -= 1;
} else {
  questionsRemaining -= 1;
}
alert('You have answered ' + correctAnswers + ' questions right. You have ' + questionsRemaining + ' questions left to answer.');

// Get reponse for question 5 and compare to answer. Then write new state
var question5Response = prompt(question5);
if (question5Response === question5Answer) {
  correctAnswers += 1;
  questionsRemaining -= 1;
} else {
  questionsRemaining -= 1;
}

// Check what crown type the player gets
var crownType;
if (correctAnswers > 4) {
  crownType = 'Gold';
} else if (correctAnswers > 2) {
  crownType = 'Silver';
} else if (correctAnswers > 0) {
  crownType = 'Bronze';
}

// Print game result message to page
if (crownType) {
  document.write('<p>You have answered ' + correctAnswers + ' questions right. You receive the ' + crownType + ' Crown.</p>');
} else {
  document.write('<p>You have answered ' + correctAnswers + ' questions right. You do not receive any Crowns.</p>');
}