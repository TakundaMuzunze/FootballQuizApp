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

const premierLeagueQuestions = [
  {
    question: "Which team has won the most Premier League titles?",  
    a: "Manchester United",  
    b: "Liverpool",  
    c: "Arsenal",  
    d: "Chelsea",
    correct: "a",  
  },
  {
    question: "Who is the all-time leading goalscorer in the Premier League?",
    a: "Andy Cole",  
    b: "Harry Kane",  
    c: "Alan Shearer",  
    d: "Wayne Rooney",  
    correct: "c",
  },
  {
    question: "Which player has the most Premier League appearances for a single club?",
    a: "Ryan Giggs",
    b: "Frank Lampard",
    c: "Gareth Barry",
    d: "James Milner",
    correct: "a",

  },
  {
    question: "Which team earned the nickname 'Centurions', for winning the league with 100 points?",
    a: "Liverpool", 
    b: "Manchester City", 
    c: "Manchester United", 
    d: "Chelsea",
    correct: "b",
  },
  {
    question: "Which player recently broke the record for most goals in a season with 36 goals?",
    a: "Erling Haaland",
    b: "Harry Kane",
    c: "Mohammed Salah",
    d: "Luis Suarez",
    correct: "a",
  },
  {
    question: "Who was the manager that won Chelsea's first Premier League title?",
    a: "Carlo Ancelotti",
    b: "Antonio Conte",
    c: "Roberto Di Matteo",
    d: "Jose Mourinho",
    correct: "d",
  },
  {
    question: "Which one of these players has the joint most red cards in PL history?",
    a: "Roy Keane",
    b: "Nemanja Vidic",
    c: "Patrick Vieira",
    d: "Vinnie Jones",
    correct: "c",
  },
  {
    question: "Which team won a Premier League game whilst have the lowest recorded possession with 18%?",
    a: "Nottingham Forest",
    b: "Swansea",
    c: "West Ham",
    d: "West Brom",
    correct: "a",
  },
  {
    question: "In which season was the first Premier League game played?",
    a: "1997/88",
    b: "1988/89",
    c: "1980/81",
    d: "1992/93",
    correct: "d",
  },
  {
    question: "Who holds the record for the most clean sheets in Premier League history?",
    a: "Peter Cech",
    b: "Peter Schmeichel",
    c: "Edwin van de Sar",
    d: "David Seaman",
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
  totalScoreElement.textContent = premierLeagueQuestions.length;
};

const startQuiz = function() {
  deselectAnswers();
  const currentQuizData = premierLeagueQuestions[currentQuiz];
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
    if (answer === premierLeagueQuestions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < premierLeagueQuestions.length) {
      startQuiz();
    } else {
      const result = document.createElement("h2");
      result.classList.add("heading-padding");
      result.textContent = "You answered " + score + "/" + premierLeagueQuestions.length + " questions correctly";

      const message = document.createElement("p");
      message.classList.add("message-padding");

      const trophy = document.createElement("img");
      trophy.classList.add("trophy-image");

      if (score === premierLeagueQuestions.length) {
        trophy.src = "/images/gold-cup.png";
        message.innerHTML += "Congratulations! You got a perfect score!<br>You are a KickTrivia champion";
      } else if (score > premierLeagueQuestions.length / 2) {
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