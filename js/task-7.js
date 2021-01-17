const fontSize = document.querySelector("#font-size-control");
const textFontSize = document.getElementById("text");

const changeFontSize = () => {
  textFontSize.style.fontSize = fontSize.value / 1.5 + "px";
};

fontSize.addEventListener("input", changeFontSize);
