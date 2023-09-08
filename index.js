"use strict";
const day = document.querySelector(".day");
const time = document.querySelector(".time");

const now = new Date();
// console.log(now);
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day.textContent = weekDay[now.getDay()];

const updateDayAndTime = function () {
  time.textContent = `${now.getTime()} ms`;
};
updateDayAndTime();
setInterval(updateDayAndTime, 1000);
