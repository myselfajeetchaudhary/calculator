let num1;
let num2;
let operator;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

function handleClick(e) {
  const display = document.querySelector(".output");
  display.textContent += e.target.textContent;
  if (
    e.target.textContent === "+" ||
    e.target.textContent === "-" ||
    e.target.textContent === "x" ||
    e.target.textContent === "/"
  ) {
    num1 = display.textContent.slice(0, display.textContent.length - 1);
    operator = display.textContent.slice(display.textContent.length - 1);
    display.textContent = "";
  } else if (e.target.textContent === "=") {
    num2 = display.textContent.slice(0, display.textContent.length - 1);
    display.textContent = operate(+num1, +num2, operator);
  } else if (e.target.textContent === "Clear") {
    display.textContent = "";
  }
}

function populateDisplay() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}

populateDisplay();
