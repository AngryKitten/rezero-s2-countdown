const timerRef = document.getElementById('timer');
let airDate;

(function() {
  let now = new Date();
  const utcOffset = now.getUTCHours() - now.getHours();
  airDate = new Date(2020, 6, 8, 1 - utcOffset, 30, 0, 0).getTime();
  updateTimer();
  setInterval(() => {
    updateTimer();
  }, 1000);
})();

function updateTimer() {
  now = new Date().getTime();
  const timeleft = airDate - now;
  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = formatTime(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = formatTime(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = formatTime(Math.floor((timeleft % (1000 * 60)) / 1000));
  timerRef.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
}

function formatTime(time) {
  if (time < 10) {
    time = `0${time}`;
  }
  return time;
}