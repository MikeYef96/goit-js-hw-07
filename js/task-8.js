const refs = {
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  divBoxes: document.getElementById("boxes"),
  newFragment: document.createDocumentFragment(),
  amount: document.querySelector("#controls input"),
};

const getNewElement = () => createBoxes(refs.amount.value);

const setBoxStyles = (index) => {
  const startSize = 30;
  const divBox = document.createElement("div");
  const divBoxSize = startSize + index * 10;

  divBox.style.width = `${divBoxSize}px`;
  divBox.style.height = `${divBoxSize}px`;
  divBox.style.backgroundColor = randomColor();

  refs.newFragment.append(divBox);
};

const createBoxes = (amount) => {
  for (let index = 0; index < amount; index++) {
    setBoxStyles(index);
  }
  refs.divBoxes.append(refs.newFragment);
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgba(${red},${green},${blue})`;
};

const destroyBoxes = () => (refs.divBoxes.textContent = "");

refs.renderBtn.addEventListener("click", getNewElement);
refs.destroyBtn.addEventListener("click", destroyBoxes);
