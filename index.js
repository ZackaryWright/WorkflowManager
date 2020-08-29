// Elements
const timer = document.getElementById('timer');
const btn = document.querySelector('.start-btn');

var startingMinutes = 20;
let time = startingMinutes * 60;

// Event Listeners
btn.addEventListener('click', startTimer)

setInterval(startTimer, 1000);

function startTimer () {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  timer.innerHTML = minutes +":"+seconds;
  time--;
}
