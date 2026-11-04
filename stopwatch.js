const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const historyList = document.getElementById("historyList");

let startTime = 0;
let elapsed = 0;
let timerId = null;
let running = false;
let sessionCount = 0;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const millis = ms % 1000;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    "." +
    String(millis).padStart(3, "0")
  );
}

function updateDisplay() {
  const now = Date.now();
  elapsed = now - startTime;
  display.textContent = formatTime(elapsed);
}

function start() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsed;
    timerId = setInterval(updateDisplay, 10);
    startBtn.textContent = "暂停";
    startBtn.classList.add("running");
  } else {
    running = false;
    clearInterval(timerId);
    startBtn.textContent = "运行";
    startBtn.classList.remove("running");
  }
}

function reset() {
  if (elapsed > 0) {
    sessionCount++;
    addToHistory(elapsed, sessionCount);
  }
  clearInterval(timerId);
  running = false;
  elapsed = 0;
  startTime = 0;
  timerId = null;
  display.textContent = "00:00:00.000";
  startBtn.textContent = "运行";
  startBtn.classList.remove("running");
}

function addToHistory(duration, count) {
  const item = document.createElement("div");
  item.className = "history-item";
  item.innerHTML =
    '<span class="history-rank">#' +
    count +
    '</span><span class="history-duration">' +
    formatTime(duration) +
    '</span><span class="history-count">第' +
    count +
    "次</span>";
  historyList.insertBefore(item, historyList.firstChild);
}

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
