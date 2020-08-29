const var startingMinutes = 20;
const timer = document.getElementById('clock');
var time = startingMinutes * 60;

setInterval(clockCountdown(), 1000);

function clockCountdown() {
  const minutes = Math.floor(time/60);
  const seconds = time % 60;

  if(seconds < 10) {
    seconds = '0' + seconds;
  }

  timer.innerHTML = minutes + ":" + seconds;

  time--;
}
