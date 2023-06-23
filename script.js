let mainNav = document.getElementById('nav-menu');
let navBarToggle = document.getElementById('navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

function showMore(item) {
  const toggleContent = item.querySelector(".toggle-content");
  toggleContent.classList.toggle("show");
}


const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const userScoreElement = document.getElementById("user-score");
const totalScoreElement = document.getElementById("total-score");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit-answers");

let currentQuiz = 0;
let score = 0;

const questions = [
  {
    question: "Which country won the inaugural World Cup in 1930?",  
    a: "England",  
    b: "Italy",  
    c: "Uruguay",  
    d: "Brazil",
    correct: "c",  
  },
  {
    question: "How many goals did Lionel Messi score in his record-breaking 2011/12 season?",
    a: "91",  
    b: "86",  
    c: "73",  
    d: "92",  
    correct: "a",
  },
  {
    question: "Which players, with 653 games, has made the most Premier League appearances?",
    a: "Ryan Giggs",
    b: "Frank Lampard",
    c: "Gareth Barry",
    d: "James Milner",
    correct: "c",

  },
  {
    question: "Which team in Italy has won the most UEFA Champions League titles?",
    a: "Juventus", 
    b: "Inter Milan", 
    c: "AC Milan", 
    d: "Sampdoria",
    correct: "c",
  },
  {
    question: "How many points did Arsenal achieve in their title winning 'Invincibles' season in 2003/04?",
    a: "100 Points",
    b: "88 Points",
    c: "90 Points",
    d: "95 Points",
    correct: "c",
  },
  {
    question: "Jurgen Klopp has managed two clubs in Germany including Borussia Dortmund and who?",
    a: "Schalke 04",
    b: "Mainz",
    c: "Werder Bremen",
    d: "RB Leipzig",
    correct: "b",
  },
  {
    question: "Who has won the most World Cup medals as a player?",
    a: "Garrincha",
    b: "Ronaldo Nazario",
    c: "Pele",
    d: "Gianluigi Buffon",
    correct: "c",
  },
  {
    question: "Which one of these European teams has not won the treble?",
    a: "Real Madrid",
    b: "Celtic",
    c: "Bayern Munich",
    d: "Ajax",
    correct: "a",
  },
  {
    question: "In which season was the first Premier League played?",
    a: "1997/88",
    b: "1988/89",
    c: "1980/81",
    d: "1992/93",
    correct: "d",
  },
  {
    question: "Can you name the former Germany international who went on to become a professional wrestler in the WWE?",
    a: "Tom Wiese",
    b: "Gerd Muller",
    c: "Mesut Ozil",
    d: "Miroslav Klose",
    correct: "a",
  }
];
const deselectAnswers = function() {
  answerElements.forEach(function(answerElement) {
    answerElement.classList.remove("selected");
  });
};

const selectedAnswer = function() {
  let answer;
  answerElements.forEach(function(answerElement) {
    if (answerElement.classList.contains("selected")) {
      answer = answerElement.id;
    }
  });
  return answer;
};

const updateScore = function() {
  userScoreElement.textContent = score;
  totalScoreElement.textContent = questions.length;
};

const startQuiz = function() {
  deselectAnswers();
  const currentQuizData = questions[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  answerElements.forEach(function(answerElement) {
    answerElement.textContent = currentQuizData[answerElement.id];
  });
  updateScore();
};

startQuiz();

answerElements.forEach(function(answerElement) {
  answerElement.addEventListener("click", function() {
    deselectAnswers();
    answerElement.classList.add("selected");
  });
});

submitButton.addEventListener("click", function() {
  const answer = selectedAnswer();
  if (answer) {
    if (answer === questions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < questions.length) {
      startQuiz();
    } else {
      const result = document.createElement("h2");
      result.classList.add("heading-padding");
      result.textContent = "You answered " + score + "/" + questions.length + " questions correctly";

      const message = document.createElement("p");
      message.classList.add("message-padding");

      const trophy = document.createElement("img");
      trophy.classList.add("trophy-image");

      if (score === questions.length) {
        trophy.src = "/images/gold-cup.png";
        message.innerHTML += "Congratulations! You got a perfect score!<br>You are a KickTrivia champion";
      } else if (score > questions.length / 2) {
        message.textContent = "Great job! You have top-level ball knowledge";
        trophy.src = "/images/silver-cup.png";
      } else {
        message.innerHTML = "Looks like you need to brush up on your football knowledge.<br> Keep playing, and you'll get better!";
        trophy.src = "/images/bronze-cup.png";
      }

      const playAgainButton = document.createElement("button");
      playAgainButton.textContent = "Play Again";
      playAgainButton.classList.add("play-again-button");
      playAgainButton.addEventListener("click", function() {
        location.reload();
      });

      quiz.innerHTML = "";
      quiz.appendChild(trophy);
      quiz.appendChild(result);
      quiz.appendChild(message);
      quiz.appendChild(playAgainButton);
    }
    updateScore();
  }
});