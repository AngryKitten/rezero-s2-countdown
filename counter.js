const dRef = document.getElementById('d');
const hRef = document.getElementById('h');
const mRef = document.getElementById('m');
const sRef = document.getElementById('s');
let airDate;

(function() {
  let now = new Date();
  const utcOffset = now.getUTCHours() - now.getHours();
  airDate = new Date(2020, 6, 8, 14 - utcOffset, 30, 0, 0).getTime();
  updateTimer();
  setInterval(() => {
    updateTimer();
  }, 1000);
})();

function updateTimer() {
  now = new Date().getTime();
  const timeleft = airDate - now;
  if (timeleft > 0) {
    dRef.innerHTML = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hRef.innerHTML = formatTime(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    mRef.innerHTML = formatTime(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    sRef.innerHTML = formatTime(Math.floor((timeleft % (1000 * 60)) / 1000));
  } else {
    document.getElementById('counter-main').classList.add('hidden');
    document.getElementById('counter-end').classList.remove('hidden');
  }
}

function formatTime(time) {
  if (time < 10) {
    time = `0${time}`;
  }
  return time;
}