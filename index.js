// Elements
const timer = document.getElementById('main-timer');
const breakTimer = document.getElementById('break-timer');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const breakContainer = document.querySelector('.break-container');
const breakBtn = document.querySelector('.break-btn');
const breakPauseBtn = document.querySelector('.break-pause-btn');
let startingMinutes = 25;
let breakStartMin = 5;
let time = startingMinutes * 60;
let breakTime = breakStartMin * 60;
let intervalId = null;
let intervalId2 = null;

/* Sound effects for Alarms*/

// Original setup (doesnt work with Safari on IOS 14 in mobile)
// const alertSound = new Audio("sounds/alert.mp3");
// const breakOver = new Audio("sounds/break.mp3");

// New Way of doing sounds to work with IOS 14 safari
const alertSound = new Audio();
const breakOver = new Audio();

alertSound.autoplay = true;
breakOver.autoplay = true;

alertSound.src = 'sounds/alert.mp3';
breakOver.src = 'sounds/break.mp3';

// Event Listeners
startBtn.addEventListener('click', visibleStart);
pauseBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
breakPauseBtn.addEventListener('click', pauseBreak);

// Makes various elements visible and sets timer interval
function visibleStart () {
  pauseBtn.style.display = 'inline-block';
  resetBtn.style.visibility = 'visible';
  intervalId = setInterval(startTimer, 1000);
}

// Starts Countdown
function startTimer () {
      let x = 0
      startBtn.removeEventListener('click', visibleStart);
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      timer.innerHTML = minutes +":"+seconds;
      if(time === 0 && x === 0) {
        alert.play();
        breakContainer.style.visibility = 'visible';
        breakBtn.addEventListener('click', breakBtnsVisible);
        x++;
      } else {
        time--;
      }
}

// Pauses Countdown
function stopTimer () {
  clearInterval(intervalId);
  startBtn.addEventListener('click', visibleStart);
}

// Clears clock and starts countdown over
function resetTimer() {
  stopTimer();
  pauseBreak();
  breakTime = 300;
  time = 1500;
  breakTimer.innerHTML = "5:00";
  timer.innerHTML = "25:00";
  startBtn.addEventListener('click', visibleStart);
}

function breakBtnsVisible () {
  breakPauseBtn.style.visibility = 'visible';
  intervalId2 = setInterval(startBreak, 1000);
}

function startBreak () {
  breakBtn.removeEventListener('click', breakBtnsVisible);
  const breakMinutes = Math.floor(breakTime / 60);
  let seconds = breakTime % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  breakTimer.innerHTML = breakMinutes + ":" + seconds;
  breakTime !== 0 ? breakTime-- : breakOver.play();
}

function pauseBreak() {
  clearInterval(intervalId2);
  breakBtn.addEventListener('click', breakBtnsVisible);
}
