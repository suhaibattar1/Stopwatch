let startTime;
let elapsedTime = 0;
let timerInterval;
let laps = [];
let lapId = 1;
let isPaused = false;

function startStopwatch() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
  }
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  displayTime(elapsedTime);
}

function displayTime(time) {
  const display = document.getElementById('display');
  const formattedTime = new Date(time).toISOString().substr(11, 11);
  display.textContent = formattedTime;
}

function pauseStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    displayTime(elapsedTime);
    laps = [];
    lapId = 1;
    document.getElementById('lapRecords').innerHTML = ''; // Clear lap records
}
  

function lapTime() {
    laps.push(elapsedTime);
    const lapRecordsContainer = document.getElementById('lapRecords');
    const lapItem = document.createElement('div');
    lapItem.textContent = `Lap ${lapId}: ${new Date(elapsedTime).toISOString().substr(11, 11)}`;
    lapItem.style.color = 'white';
    lapRecordsContainer.appendChild(lapItem);
    lapId++;
  }
  