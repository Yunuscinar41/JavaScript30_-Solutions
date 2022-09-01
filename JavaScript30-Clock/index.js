const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
var secondsSum = 0;
var minsSum = 0;
var hoursSum = 0;

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  if (seconds === 0) secondsSum++;

  const secondsDegrees = 360 * ((secondsSum * 60 + seconds) / 60) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  if (mins === 0) minsSum++;

  const minsDegrees =
    360 * ((minsSum * 60 + mins) / 60) + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  if (hour === 0) hoursSum++;

  const hourDegrees = 360 * (hoursSum * 12 + hour / 12) + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
