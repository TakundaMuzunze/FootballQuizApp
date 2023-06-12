const correctAnswers = ['Uruguay', 'Jack Grealish', 'Pele', '91', 'Napoli', 'Cristiano Ronaldo'];
const buttonElements = document.querySelectorAll('.answer');
const proceedButton = document.getElementsByClassName('next-btn');
let currentQuestion = 0;

function toggleRules() {
    var rulesContent = document.querySelector('.rules-container-content');
    var quizComponent = document.querySelector('.quiz-component');
    var newButtonText = document.querySelector(".rules-btn");

    quizComponent.classList.toggle('show-rules');
    rulesContent.classList.toggle('show-rules');
  
    if (rulesContent.classList.contains('show-rules')) {
      newButtonText.innerHTML = 'Back';
    } else {
      newButtonText.innerHTML = 'How to play';
    }
}

function startQuiz() {
    var questionDisplay = document.querySelector('.question-format');
    var quizComponent = document.querySelector('.quiz-component');

    quizComponent.classList.toggle('show-quiz');
    questionDisplay.classList.toggle('show-quiz');
}

function checkAnswer() {
    buttonElements.forEach(button => {
        button.disabled = true;
    });  

    let pickedOption = this.value;
    if (pickedOption === correctAnswers[currentQuestion]) {
      this.style.backgroundColor = 'green';
      this.style.color = 'white';
    } else {
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
     // Find the correct answer button and make it green
     buttonElements.forEach(button => {
        if (button.value === correctAnswers[currentQuestion]) {
          button.style.backgroundColor = 'green';
        }
      });
    }
    currentQuestion++;
    proceedButton.disabled = false;
}

buttonElements.forEach(button => {
  button.addEventListener('click', checkAnswer);
});