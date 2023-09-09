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
  const hour = now.getHours().toString().padStart(2, "0");
  const mins = now.getMinutes().toString().padStart(2, "0");
  const secs = now.getSeconds().toString().padStart(2, "0");
  console.log(hour, mins, secs);

  // update Day
  day.textContent = weekDay[now.getDay()];
  //  update Time
  time.textContent = `${hour}:${mins}:${secs}`;
};
updateDayAndTime();
setInterval(updateDayAndTime, 1000);

const timer = () => {
  console.log(new Date().getTime());
};

// setInterval(timer, 1000);
