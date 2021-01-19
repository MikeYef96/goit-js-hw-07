const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const divBoxesRef = document.getElementById("boxes");
const newFragment = document.createDocumentFragment();

const getNewElement = () => {
  let amount = document.querySelector("#controls input").value;
  return createBoxes(amount);
};

const setBoxStyles = (index) => {
  const startSize = 30;
  const divBox = document.createElement("div");
  const divBoxSize = startSize + index * 10;

  divBox.style.width = `${divBoxSize}px`;
  divBox.style.height = `${divBoxSize}px`;
  divBox.style.backgroundColor = randomColor();

  newFragment.append(divBox);
};

const createBoxes = (amount) => {
  for (let index = 0; index < amount; index++) {
    setBoxStyles(index);
  }
  divBoxesRef.append(newFragment);
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgba(${red},${green},${blue})`;
};
const destroyBoxes = () => (divBoxesRef.textContent = "");

renderBtnRef.addEventListener("click", getNewElement);
destroyBtnRef.addEventListener("click", destroyBoxes);
