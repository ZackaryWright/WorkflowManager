// Elements
const timer = document.getElementById('timer');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
let startingMinutes = 25;
let time = startingMinutes * 60;
let intervalId = null;
const alert = new Audio("sounds/alert.mp3");

// Event Listeners
startBtn.addEventListener('click', visibleStart);

pauseBtn.addEventListener('click', stopTimer);

resetBtn.addEventListener('click', resetTimer);

function visibleStart () {
  pauseBtn.style.display = 'inline-block';
  resetBtn.style.visibility = 'visible';
  intervalId = setInterval(startTimer, 1000);
}

// Starts Countdown
function startTimer () {
      startBtn.removeEventListener('click', visibleStart);
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      timer.innerHTML = minutes +":"+seconds;
      time !== 0 ? time-- : alert.play();
}

// Pauses Countdown
function stopTimer () {
  clearInterval(intervalId);
  startBtn.addEventListener('click', visibleStart);
}

// Clears clock and starts countdown over
function resetTimer() {
  stopTimer();
  time = 1500;
  timer.innerHTML = "25:00";
  startBtn.addEventListener('click', visibleStart);
}
