let userInput = document.getElementById("validation-input");
const validDataInput = parseInt(userInput.getAttribute("data-length"));

const checkValidInput = (event) => {
  const input = event.currentTarget.value;
  input.length === validDataInput
    ? (userInput.style.borderColor = "#4caf50")
    : (userInput.style.borderColor = "#f44336");
};

userInput.addEventListener("blur", checkValidInput);
