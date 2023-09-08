"use strict";
const day = document.querySelector(".day");
const time = document.querySelector(".time");

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

const updateDayAndTime = function () {
  const now = new Date();

  // update Day
  day.textContent = weekDay[now.getDay()];
  //  update Time
  time.textContent = `${now.getTime()} ms`;
};
updateDayAndTime();
setInterval(updateDayAndTime, 1000);

const timer = () => {
  console.log(new Date().getTime());
};

// setInterval(timer, 1000);
