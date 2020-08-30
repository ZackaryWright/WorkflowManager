// Elements
const timer = document.getElementById('timer');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');

var alert = new Audio("sounds/alert.mp3");

var startingMinutes = 25;
let time = startingMinutes * 60;
let intervalId = null;

let pressed = 0;

// Event Listeners
startBtn.addEventListener('click', function() {
  resetTimer();
  pauseBtn.style.display = 'inline-block';
  resetBtn.style.visibility = 'visible';
  intervalId = setInterval(startTimer, 1000);
})

pauseBtn.addEventListener('click', stopTimer);

resetBtn.addEventListener('click', resetTimer);

function startTimer () {

      pressed = 1;
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;

      timer.innerHTML = minutes +":"+seconds;
      time !== 0 ? time-- : alert.play();
}

function stopTimer () {
  clearInterval(intervalId);
}

function resetTimer() {
  pressed = 0;
  stopTimer();
  timer.innerHTML = "20:00";
}
