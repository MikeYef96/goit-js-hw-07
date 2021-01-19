const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const divBoxesRef = document.getElementById("boxes");
const newFragment = document.createDocumentFragment();

const getNewElement = () => {
  let amount = document.querySelector("#controls input").value;
  return createBoxes(amount);
};

const createBoxes = (amount) => {
  let startSize = 30;
  for (let index = 0; index < amount; index++) {
    const divBox = document.createElement("div");
    const divBoxSize = startSize + index * 10;
    divBox.style.cssText = `width: ${divBoxSize}px; height: ${divBoxSize}px;`;
    divBox.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    newFragment.append(divBox);
  }
  divBoxesRef.append(newFragment);
};

const randomColor = () => Math.floor(Math.random() * 256);
const destroyBoxes = () => (divBoxesRef.textContent = "");

renderBtnRef.addEventListener("click", getNewElement);
destroyBtnRef.addEventListener("click", destroyBoxes);
