const startQuizButton = document.getElementById("start-quiz");
const rulesSection = document.getElementById("rules");
const quizSection = document.getElementById("laliga-quiz");

startQuizButton.addEventListener("click", function() {
  rulesSection.style.display = "none";
  quizSection.style.display = "block";
  startQuiz();
});

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

const bundesligaQuestions = [
    {
      question: "Who were the last team to win the Bundesliga before Bayern Munich?",  
      a: "VfL Woflsburg",  
      b: "Borussia Dortmund",  
      c: "Schalke 04",  
      d: "Werder Bremen",
      correct: "b",  
    },
    {
      question: "How many teams compete in the Bundesliga?",
      a: "20",  
      b: "16",  
      c: "18",  
      d: "24",  
      correct: "c",
    },
  {
    question: "Which team has won the most league titles in Bundesliga history?",
    a: "VfB Stuttgart",
    b: "Borussia Dortmund",
    c: "Schalke 04",
    d: "Bayern Munich",
    correct: "d",

  },
  {
    question: "Who holds the record for the most goals scored in a Bundesliga season, netting 41 goals?",
    a: "Pierre Emerick Aubameyang", 
    b: "Robert Lewandowski", 
    c: "Edin Dzeko", 
    d: "Mario Gomez",
    correct: "b",
  },
  {
    question: "Which player has won the most Bundesliga titles?",
    a: "Thomas Müller",
    b: "Manuel Neuer",
    c: "Oliver Kahn",
    d: "Gerd Muller",
    correct: "a",
  },
  {
    question: "What is the name of Borussia Dortmund's home ground?",
    a: "Allianz Arena",
    b: "Borussia Park",
    c: "Red Bull Arena",
    d: "Signal Iduna Park",
    correct: "d",
  },
  {
    question: "Who scored the winner when Bayern Munich beat Borussia Dortmund in the Champions League final at Wembley in 2013",
    a: "Arjen Robben",
    b: "Mario Mandzukic",
    c: "David Alaba",
    d: "Franck Ribery",
    correct: "a",
  },
  {
    question: "Which manager led Borussia Dortmund to the 2010/11 and 2011/12 Bundesliga titles?",
    a: "Thomas Tuchel",
    b: "Udo Lattek",
    c: "Jurgen Klopp",
    d: "Lucien Favre",
    correct: "c",
  },
  {
    question: "Which of these Bundesliga clubs has never won the Champions League/European Cup?",
    a: "Borussia Dortmund",
    b: "Hamburger SV",
    c: "Bayern Munich",
    d: "Bayer Leverkusen",
    correct: "d",
  },
  {
    question: "Who is the all time record goalscorer of the Bundesliga1?",
    a: "Gerd Muller",
    b: "Robert Lewandowski",
    c: "Claudio Pizarro",
    d: "Jupp Heynckes",
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
  totalScoreElement.textContent = bundesligaQuestions.length;
};

const startQuiz = function() {
  deselectAnswers();
  const currentQuizData = bundesligaQuestions[currentQuiz];
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
    if (answer === bundesligaQuestions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < bundesligaQuestions.length) {
      startQuiz();
    } else {
      const result = document.createElement("h2");
      result.classList.add("heading-padding");
      result.textContent = "You answered " + score + "/" + bundesligaQuestions.length + " questions correctly";

      const message = document.createElement("p");
      message.classList.add("message-padding");

      const trophy = document.createElement("img");
      trophy.classList.add("trophy-image");

      if (score === bundesligaQuestions.length) {
        trophy.src = "/images/gold-cup.png";
        message.innerHTML += "Congratulations! You got a perfect score!<br>You are a KickTrivia champion";
      } else if (score > bundesligaQuestions.length / 2) {
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