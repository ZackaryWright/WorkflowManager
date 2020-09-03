// Elements
const timer = document.getElementById('main-timer');
const breakTimer = document.getElementById('break-timer');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const breakContainer = document.querySelector('.break-container');
const breakBtn = document.querySelector('.break-btn');
const breakPauseBtn = document.querySelector('break-pause-btn');
let startingMinutes = 1;
let breakStartMin = 5;
let time = startingMinutes * 60;
let breakTime = breakStartMin * 60;
let intervalId = null;
let intervalId2 = null;
const alert = new Audio("sounds/alert.mp3");

// Event Listeners
startBtn.addEventListener('click', visibleStart);
pauseBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
breakBtn.addEventListener('click', )

// Makes various elements visible and sets timer interval
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
      time !== 0 ? time-- : alert.play()
      time === 0 ? breakContainer.style.visibility = 'visible' :
      breakContainer.style.visibility = 'hidden';
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

function breakBtnsVisible() {
  breakPauseBtn.style.visibility = 'visible';
  intervalId2 = setInterval(startBreak, 1000);
}

function startBreak() {
  breakBtn.removeEventListener('click', breakBtnsVisible);
  const minutes = Math.floor(breakTime / 60);
  let seconds = breakTime % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timer.innerHTML = minutes +":"+seconds;
}
