const showResult = (op) => {
  const numberOne = parseFloat(document.querySelector("#number-one").value);
  const numberTwo = parseFloat(document.querySelector("#number-two").value);
  let result;

  switch (op) {
    case "+":
      result = numberOne + numberTwo;
      break;
    case "-":
      result = numberOne - numberTwo;
      break;
    case "*":
      result = numberOne * numberTwo;
      break;
    case "/":
      result =
        numberTwo === 0 ? "Error: Division by zero" : numberOne / numberTwo;
      break;
  }

  const resultElement = document.querySelector("#result");
  resultElement.innerHTML = result % 1 !== 0 ? result.toFixed(2) : result;
};

const clearInput = (index) => {
  const input = document.querySelector(
    index === 0 ? "#number-one" : "#number-two"
  );
  input.value = "";
};

document.querySelectorAll(".clear-field").forEach((input, i) => {
  input.addEventListener("click", () => clearInput(i));
});

const operations = ["+", "-", "*", "/"];
const operationsNames = ["sum", "sub", "mul", "div"];

operationsNames.forEach((op, i) => {
  const button = document.querySelector(`.button-${op}`);
  button.addEventListener("click", () => showResult(operations[i]));
});
