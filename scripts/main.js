const main = document.getElementById("main");
const QuestionNumberContainer = document.getElementById("question-number-container");
const CurrentQuestionCount = document.getElementById("current-question-count");
const FinalQuestionCount = document.getElementById("final-question-count");
const TimeCounting = document.getElementById("Time-counting");
const TimeRemaining = document.getElementById("Time-remaining");
const QuestionContainer = document.getElementById("question-container");
const CurrentQuestionNumber = document.getElementById("Current-question-number");
const options = document.getElementById("option");
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
    }
];

class QuizApp{
    constructor(){

    }

    static LoadQuiz (){
        console.log("QuizApp");
    }

    static StartTime(){

    }
    
    static DeselectAnswers(){

    }

    static EvaluateAnswers(){

    }

    static ResetQuiz (){

    }

   
}


QuizApp.LoadQuiz();