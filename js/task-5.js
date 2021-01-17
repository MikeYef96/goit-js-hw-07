let input = document.getElementById("name-input");
let output = document.getElementById("name-output");

const getNameOutput = (event) => {
  const userInput = event.currentTarget.value;
  userInput === ""
    ? (output.textContent = "незнакомец")
    : (output.textContent = userInput);
};

input.addEventListener("input", getNameOutput);
