import {questions} from "./test.js";

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
const SubmitBtn = document.getElementById("submit-btn");
const ResultCustom = document.getElementById("ResultCustom");
const restart = document.getElementById("restart");
const UnhideResultContainer = document.getElementById("ResultContainer");
const TotalNumberOfQuestions = document.getElementById("final-question-count");

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
    TotalNumberOfQuestions.innerHTML =`<span> ${questions.length}</span>`;
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
        }
      }
    });
  }

  static NextQuestion() {
    NextBtn.addEventListener('click',()=>{
        QuizApp.EvaluateAnswers();
        if (QuestionIndex > questions.length - 2){
          NextBtn.hidden = true;
          return;
        }
        else{
          // console.log(QuizScore);
          QuestionIndex++;
          QuizApp.LoadQuiz();
        }
       
    });
  }

  static PreviousQuestion() {
    PrevBtn.addEventListener('click',()=>{
      if(QuestionIndex<=0){
        return;
      }
      else{
        QuestionIndex--;
        QuizScore--;
        QuizApp.LoadQuiz();
      }
      
    });
  }

  static SubmitQuiz(){
    SubmitBtn.addEventListener('click',()=>{
      PrevBtn.hidden = true;
      NextBtn.hidden = true;
      start.hidden = true;
      main.hidden = true;
      UnhideResultContainer.classList.remove('d-none');
      ResultCustom.innerHTML = `${QuizScore}`;
    });
  }

  static RestartQuiz(){
    restart.addEventListener('click',()=>{
      location.reload();
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
QuizApp.SubmitQuiz();
QuizApp.RestartQuiz();

console.log(questions.length);



