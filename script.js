const correctAnswers = ['Uruguay', 'Enzo Fernandez', 'Pele', '91', 'AC Milan', '90 Points', 'Real Madrid', 'Tom Wiese', 'Mainz', 'Gareth Barry', '1992/93'];
const questionFormats = document.querySelectorAll('.question-format');
const buttonElements = document.querySelectorAll('.answer');
const proceedButton = document.querySelector('.next-btn');
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
    questionDisplay[0].classList.add('show-question');
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
    // Find the correct answer button and highlight it
    buttonElements.forEach(correctButton => {
      if (correctButton.value === correctAnswers[currentQuestion]) {
        correctButton.style.backgroundColor = 'green';
        correctButton.style.color = 'white';
      }
    });
  }
  proceedButton.disabled = false;
}

buttonElements.forEach(button => {
  button.addEventListener('click', checkAnswer);
});


nextButton.addEventListener('click', nextQuestion);

function nextQuestion() {
  questionFormats[currentQuestion].classList.add('hidden');

  currentQuestion++;
  if (currentQuestion < questionFormats.length) {
    questionFormats[currentQuestion].classList.remove('hidden');
  } else {
    showCompletionMessage();
  }
}