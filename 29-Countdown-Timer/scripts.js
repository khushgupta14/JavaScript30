let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const progressBar = document.querySelector(".progress__filled");
const alarmSound = new Audio("audio.mp3");
const stopAlarmBtn = document.querySelector(".stop-alarm");
function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  alarmSound.pause();
  alarmSound.currentTime = 0;
  stopAlarmBtn.classList.add("hidden");

  const now = Date.now();
  const then = now + seconds * 1000; // convert seconds to milliseconds
  const totalSeconds = seconds;
  displayTimeLeft(seconds);
  displayEndTime(then);
  progressBar.style.width = "100%";

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); // convert back to seconds
    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      alarmSound.play();
      document.title = "Time's Up!";
      stopAlarmBtn.classList.remove("hidden");
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
    const percentage = (secondsLeft / totalSeconds) * 100;
    progressBar.style.width = `${percentage}%`;
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer() {
  alarmSound.play().catch(e => console.log("Audio play allowed"));// This is to ensure that the audio context is unlocked on mobile devices, allowing it to play when the timer ends.
  alarmSound.pause();
  alarmSound.currentTime = 0;
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  alarmSound.play().catch(e => console.log("Audio play allowed"));
  alarmSound.pause();
  alarmSound.currentTime = 0;
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});

stopAlarmBtn.addEventListener("click", () => {
  alarmSound.pause();
  stopAlarmBtn.classList.add("hidden");
  alarmSound.currentTime = 0;
  timerDisplay.textContent = "0:00";
  document.title = "Timer";
});
