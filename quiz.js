
const feedback = document.querySelector('#feedback')
const userAnswers = document.querySelector('[name="quiz"]');
const submitButton = document.getElementById('submit-answer');
var answers = userAnswers.value;

function checkAnswer(){
const correctAnswer = "4";

if (userAnswers.value == correctAnswer){
feedback.textContent="Correct! Well done.";
} else {
    feedback.textContent="That's incorrect. Try again!"; 
}

}

submitButton.addEventListener("click", checkAnswer());