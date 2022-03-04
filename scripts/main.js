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
const ResetBtn = document.getElementById("reset-btn");
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

let QuestionIndex = 0;
let QuizScore = 0;



class QuizApp {
  constructor() {}

  static ShowStartBtn() {
    window.onload = function () {
      start.classList.remove("d-none");

    };
  }

  static PreloadQuiz() {
    start.addEventListener("click", () => {
      QuestionNumberContainer.classList.remove("d-none");
      start.classList.add("d-none");
      QuizApp.LoadQuiz();
      QuizApp.StartTimer();
      QuizApp.PreviousQuestion();
      QuizApp.NextQuestion();
    });
  }

  static UnselectAnswers() {
    answers.forEach(answer => {answer.checked = false; });
    }
  
  static LoadQuiz() {
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

  static EvaluateAnswers() {
    answers.forEach(answer =>{
      if(answer.checked){
        let PickedAnswer = answer.nextElementSibling;
        const CurrentAnswer = questions[QuestionIndex].correct;
        if(PickedAnswer.classList.contains(CurrentAnswer)){
          QuizScore++;
          console.log(QuizScore);
          
        }
      }
    });
  }

  static NextQuestion() {
    NextBtn.addEventListener('click',()=>{
        if (QuestionIndex > questions.length){
          return false;
        }
        else{
          QuizApp.EvaluateAnswers();
          QuestionIndex++;
          QuizApp.LoadQuiz();
        }
       
    });
  }

  static PreviousQuestion() {
    PrevBtn.addEventListener('click',()=>{
      QuizScore--;
      QuestionIndex--;
      if(QuestionIndex<0){
        return;
      }
      else{
        QuizApp.LoadQuiz();
      }
      
    });
  }


  static ResetQuiz() {
    ResetBtn.addEventListener('click',()=>{
      location.reload();
    });
  }
}

QuizApp.ShowStartBtn();
QuizApp.PreloadQuiz();
QuizApp.ResetQuiz();