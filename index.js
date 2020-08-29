const timer = document.getElementById('clock')

var time = 20

const btn = document.querySelector('start-btn')

btn.addEventListener('click', function() {
  document.style.backgroundColor = 'black'
})

function startTimer () {
  if (time >= 0) {
    timer.innerHTML = time
    time--
  }
}
