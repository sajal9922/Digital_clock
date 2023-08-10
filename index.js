const hoursElm = document.querySelector('.hours');
const minutesElm = document.querySelector('.minutes');
const secondsElm = document.querySelector('.seconds');
const ampmElm = document.querySelector('.ampm');

function updateClock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = 'AM';
  if (hour > 12) {
    hour = 12 - hour;
    ampm = 'pm';
  }
  hoursElm.innerText = hour > 9 ? hour : '0' + hour;
  minutesElm.innerText = minute > 9 ? minute : '0' + minute;
  secondsElm.innerText = second > 9 ? second : '0' + second;
  ampmElm.innerText = ampm;
}
setInterval(() => {
  updateClock();
}, 1000);

updateClock();
