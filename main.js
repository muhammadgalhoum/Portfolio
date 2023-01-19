// Scroll to top
let up = document.querySelector(".up");
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Getting our skills section and all it's spans for making animation for the spans progress
let ourSkills = document.querySelector(".our-skills");
let spans = ourSkills.querySelectorAll(".skills > .skill > .progress > span");

// Create Counter from 0 to the data-goal value attribute for each span
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .box .number");
let isStarted = false;

function startCounter(ele) {
  let goal = ele.dataset.goal;
  let counter = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

window.onscroll = function () {
  window.scrollY > 1200
    ? up.classList.add("show")
    : up.classList.remove("show");
  
  if (window.scrollY >= ourSkills.offsetTop - 250) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY >= statsSection.offsetTop) {
    if (!isStarted) {
      nums.forEach((num) => startCounter(num));
    }
    isStarted = true;
  }
};

// Event Countdown
const countDownDate = new Date("Dec 12, 2023 23:59:59").getTime(); // The time will be in mill seconds

const counter = setInterval(() => {
  const dateNow = new Date().getTime();
  const diffDate = countDownDate - dateNow;

  const days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (diffDate < 0) {
    clearInterval(counter);
  }
}, 1000);