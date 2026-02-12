let hour = 0;
let minute = 0;
let sec = 0;
let timer = null;

let button = document.getElementById("start");
let stopButton = document.getElementById("stop");
let textContents = document.getElementById("textContent");

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

function stopWatch() {
  if (timer !== null) return; // dobara start na ho

  timer = setInterval(() => {
    sec++;

    if (sec === 60) {
      minute++;
      sec = 0;
    }

    if (minute === 60) {
      hour++;
      minute = 0;
    }

    textContents.innerHTML = 
      `${formatTime(hour)}:${formatTime(minute)}:${formatTime(sec)}`;
  }, 1000);
}

function stopStopWatch() {
  clearInterval(timer);
  timer = null;
}

button.addEventListener("click", stopWatch);
stopButton.addEventListener("click", stopStopWatch);
