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

const laLigaQuestions = [
    {
      question: "Who is the all-time leading goalscorer in La Liga?",
      a: "Cristiano Ronaldo",  
      b: "Karim Benzema",  
      c: "Lionel Messi",  
      d: "Raul Gonzalez",  
      correct: "c",
    },
  {
    question: "'El Clasico', is the name given for a match between two rival clubs. Which teams are they?",  
    a: "Real Madrid & FC Barcelona",  
    b: "Atletico Madrid & Real Madrid",  
    c: "FC Barcelona & RCD Espanyol",  
    d: "Atletico Madrid & Sevilla FC",
    correct: "a",  
  },
  {
    question: "Which team has won the most league titles in La Liga history?",
    a: "FC Barcelona",
    b: "Valencia CF",
    c: "Atletico Madrid",
    d: "Real Madrid",
    correct: "d",

  },
  {
    question: "Who is the only player to score 50 goals in a single La Liga season?",
    a: "Karim Benzema", 
    b: "Lionel Messi", 
    c: "Cristiano Ronaldo", 
    d: "Luis Suarez",
    correct: "b",
  },
  {
    question: "Who was in charge of Real Madrid when they won the Champions League 3x in a row?",
    a: "Zinedine Zidane",
    b: "Jose Mourinho",
    c: "Carlo Ancelotti",
    d: "Rafa Benitez",
    correct: "a",
  },
  {
    question: "What is the name of FC Barcelona's home ground?",
    a: "Santiago Bernabeu",
    b: "Mestalla",
    c: "Estadio La Cartuja",
    d: "Camp Nou",
    correct: "d",
  },
  {
    question: "Which player famously made the controversial transfer from Real Madrid to FC Barcelona in 2000?",
    a: "Luis Figo",
    b: "Ronaldo Nazario",
    c: "Michael Laudrup",
    d: "Luis Enrique",
    correct: "a",
  },
  {
    question: "Which la liga player won the 2018 Balon D'or, ending the Messi & Ronaldo streak?",
    a: "Karim Benzema",
    b: "Antoinne Griezmann",
    c: "Luka Modrid",
    d: "Luis Suarez",
    correct: "c",
  },
  {
    question: "Which rival club did Atletico Madrid lose to in the 2014 UCL final, also known as 'La Decima'?",
    a: "Athletico Bilbao",
    b: "Sevilla FC",
    c: "FC Barcelona",
    d: "Real Madrid",
    correct: "d",
  },
  {
    question: "Which player broke the transfer record fee, going from Tottenham Hotspur to Real Madrid?",
    a: "Gareth Bale",
    b: "Luka Modric",
    c: "Rafael van der Vaart",
    d: "Jonathan Woodgate",
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
  totalScoreElement.textContent = laLigaQuestions.length;
};

const startQuiz = function() {
  deselectAnswers();
  const currentQuizData = laLigaQuestions[currentQuiz];
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
    if (answer === laLigaQuestions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < laLigaQuestions.length) {
      startQuiz();
    } else {
      const result = document.createElement("h2");
      result.classList.add("heading-padding");
      result.textContent = "You answered " + score + "/" + laLigaQuestions.length + " questions correctly";

      const message = document.createElement("p");
      message.classList.add("message-padding");

      const trophy = document.createElement("img");
      trophy.classList.add("trophy-image");

      if (score === laLigaQuestions.length) {
        trophy.src = "/images/gold-cup.png";
        message.innerHTML += "Congratulations! You got a perfect score!<br>You are a KickTrivia champion";
      } else if (score > laLigaQuestions.length / 2) {
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