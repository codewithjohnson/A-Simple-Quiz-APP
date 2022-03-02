

// let Interval = setInterval(Timer,1000);
// function Timer(){
//     countdown.textContent = `${minutes}`;
//     minutes--;
//     if (minutes<0){
//        clearInterval(Interval);
//     }
// }
const countdown = document.getElementById('time');
const time = 10;
let timett = time*60;

// const CountDown = setInterval(QuizAppTimer,100);
function QuizAppTimer(){
    minutes = Math.floor(timett/60);
    seconds = timett % 60;
    console.log(minutes,seconds);
    timett--;
}




