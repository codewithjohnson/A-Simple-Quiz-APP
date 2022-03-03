const main = document.getElementById("main");
const QuestionNumberContainer = document.getElementById(
  "question-number-container"
);
const CurrentQuestionCount = document.getElementById("current-question-count");
const Timer = document.getElementById("timer");
const QuestionContainer = document.getElementById("question-container");

// ANSWERS
const answers = document.querySelectorAll(".option");

const option1 = document.getElementById("option1");
const option1Answer = option1.nextElementSibling;

const option2 = document.getElementById("option2");
const option2Answer = option2.nextElementSibling;

const option3 = document.getElementById("option3");
const option3Answer = option3.nextElementSibling;

const option4 = document.getElementById("option4");
const option4Answer = option4.nextElementSibling;

// NEXT AND PREVIOUS BUTTON
const start = document.getElementById("start");
const PrevBtn = document.getElementById("prev-btn");
const NextBtn = document.getElementById("next-btn");

const questions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

class QuizApp {
  constructor() {}

  static ShowStartBtn() {
    window.onload = function () {
      start.classList.remove("d-none");
    };
  }

  static PreloadQuiz() {
    start.addEventListener("click", () => {
      console.log("Questions will now be loaded");
      start.classList.add("d-none");
      QuizApp.LoadQuiz();
      QuizApp.StartTimer();
    });
  }

  static LoadQuiz() {
    let QuestionIndex = 0;
    QuizApp.UnselectAnswers();
    CurrentQuestionCount.innerHTML = `<span> ${QuestionIndex+1}</span>`;
    QuestionContainer.textContent = questions[QuestionIndex].question;
    option1Answer.textContent = questions[QuestionIndex].a;
    option2Answer.textContent = questions[QuestionIndex].b;
    option3Answer.textContent = questions[QuestionIndex].c;
    option4Answer.textContent = questions[QuestionIndex].d;
  }

  static StartTimer() {
    const time = 8;
    let timett = time * 60;
    const CountDown = setInterval(QuizAppTimer, 1000);
    function QuizAppTimer() {
      let minutes = Math.floor(timett / 60);
      let seconds = timett % 60;
      Timer.innerHTML = "";
      Timer.innerHTML = `${minutes} : ${seconds}`;
      timett--;
      if (minutes < 0) {
        clearInterval(CountDown);
      }
    }
  }

  static UnselectAnswers() {
    answers.forEach((answer) => {
      answer.checked = false;
    });
  }

  static EvaluateAnswers() {}

  static ResetQuiz() {
    location.reload();
  }
}

QuizApp.ShowStartBtn();
QuizApp.PreloadQuiz();