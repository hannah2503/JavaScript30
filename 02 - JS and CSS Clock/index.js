/* eslint-disable quotes */
window.addEventListener("DOMContentLoaded", function () {
  const secondHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  function clockTick(time, hand) {
    const degrees = (time / 60) * 360 + 90;
    hand.style.transform = `rotate(${degrees}deg)`;
  }

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    clockTick(seconds, secondHand);
    clockTick(mins, minHand);
    clockTick(hours, hourHand);
  }

  setInterval(setDate, 1000);
});
