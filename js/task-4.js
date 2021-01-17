let counterValue = document.getElementById("value");
let counter = 0;
const counterIncrease = document.querySelector(
  "button[data-action='increment']"
);
const counterDecrease = document.querySelector(
  "button[data-action='decrement']"
);

const increment = () => (counterValue.textContent = ++counter);
const decrement = () => (counterValue.textContent = --counter);

counterIncrease.addEventListener("click", increment);
counterDecrease.addEventListener("click", decrement);
