const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const divBoxesRef = document.getElementById("boxes");

const getNewElement = () => {
  let amount = document.querySelector("#controls input").value;
  return createBoxes(amount);
};

const createBoxes = (amount) => {
  const newFragment = document.createDocumentFragment();
  let startSize = 30;
  for (let index = 0; index < amount; index++) {
    const divBox = document.createElement("div");
    const divBoxSize = startSize + index * 10;
    divBox.style.cssText = `width: ${divBoxSize}px; height: ${divBoxSize}px; background-color: rgb(${createRandomColor()},${createRandomColor()},${createRandomColor()})`;
    newFragment.append(divBox);
  }
  divBoxesRef.append(newFragment);
};

const createRandomColor = () => Math.floor(Math.random() * 256);
const destroyBoxes = () => (divBoxesRef.textContent = "");

renderBtnRef.addEventListener("click", getNewElement);
destroyBtnRef.addEventListener("click", destroyBoxes);
