let currentInput = "";

function appendToScreen(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function clearScreen() {
  currentInput = "";
  document.getElementById("result").value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById("result").value = currentInput;
  } catch (error) {
    currentInput = "Error";
    document.getElementById("result").value = currentInput;
  }
}
