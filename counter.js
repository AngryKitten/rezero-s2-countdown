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
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  timerRef.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
}