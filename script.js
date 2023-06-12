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
