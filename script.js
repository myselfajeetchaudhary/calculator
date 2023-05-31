let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = 0;

function operate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "x") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
}

function updateDisplay() {
  const display = document.querySelector('.display');
  display.textContent = displayValue;
}

updateDisplay();

function handleClick() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (button.className === "operand") {
          onOperandClick(e.target.textContent);
          updateDisplay();
      } else if (button.className === "operator") {
          onOperatorClick(e.target.textContent);
      } else if (button.className === "equal") {
          onEqualClick();
          updateDisplay();
      } else if (button.className === "clear") {
          onClearClick();
          updateDisplay();
      }
    });
  });
}

handleClick();

function onOperandClick(operand) {
  if (firstOperand === null) {
    // 1st input click- if display = 0
    if (displayValue === 0 || displayValue === "0") {
      displayValue = operand;
    } else {
      displayValue += operand;
    }
  } else {
    // 3rd input click
    if (displayValue === firstOperand) {
      displayValue = operand;
    } else {
      displayValue += operand;
    }
  }
}

function onOperatorClick(operator) {
  firstOperand = displayValue;
  firstOperator = operator;
}

function onEqualClick() {
  secondOperand = displayValue;
  displayValue = operate(+firstOperand, +secondOperand, firstOperator);
  firstOperand = displayValue;

  console.log(firstOperand);
  console.log(secondOperand);
}

function onClearClick() {
  displayValue = 0;
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
}

// PASTE INSIDE onOperatorClick()

// 4th input click
//   if (firstOperator && secondOperator === null) {
//     secondOperand = displayValue;
//     secondOperator = operator;
//   } else {
//     // 2nd input click
//     firstOperand = displayValue;
//     firstOperator = operator;
//   }

//     if (firstOperand && secondOperand) {
//       displayValue = operate(+firstOperand, +secondOperand, firstOperator);
//       updateDisplay();
//       firstOperand = displayValue;
//       secondOperand = null;
//     }

//   console.log(firstOperand);
//   console.log(firstOperator);
//   console.log(secondOperand);
//   console.log(secondOperator);
