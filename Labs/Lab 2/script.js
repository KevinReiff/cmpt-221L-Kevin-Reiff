// Initializes string variables
let currentInput = "";
let operator = "";
let firstNumber = "";
let secondNumber = "";

// Clears the display of the calculator and resets variables
function clearDisplay() {
  document.getElementById("display").value = "";
  currentInput = "";
  operator = "";
  firstNumber = "";
  secondNumber = "";
}

// This function adds the numbers pressed on the calculator buttons
// to the display and allows the first number, operator and
// second number to be displayed all at once
function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = firstNumber + operator + currentInput;
}

// Checks to see if the 'firstNumber' variable is empty, (or if 'firstNumber' is set,
// then it checks to see if the operator is not set), if either are true then the user input gets assigned 
// to 'firstNumber', 'currentInput' is cleared, the operator is then set and the display is updated
function executeOperation(op) {
  if (!firstNumber || firstNumber && !operator) {
    if (!firstNumber) {
      firstNumber = currentInput;
    }
    currentInput = "";
    operator = op;
    document.getElementById("display").value = firstNumber + operator;

    // If there is a firstNumber and an operator already set, then it alerts the user
  } else {
    alert("Operator already set!");
  }
}


// The current input of the user is assigned to secondNumber, the result is set to 0.
// and depending on the operator, a different calculation is made, if division; it checks
// to make sure the number is not 0 before the calculation
function calculate() {
  secondNumber = currentInput;
  let result = 0;

  switch (operator) {
    case "+":

      // ParseFloat converts characters in a string to numbers
      // (Ignores letters for the most part except scientific notation)  
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      if (secondNumber !== "0") {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
      } else {
        alert("Cannot divide by zero!");
        clearDisplay();
        return;
      }
      break;

    // If operator doesn't match any of these or no operation has been pressed
    // alert user and exit function
    default:
      alert("Invalid operation/No Operator Pressed!");
      return;
  }

  // Displays the result and resets input and operation for next calculation
  document.getElementById("display").value = result;
  firstNumber = result;
  currentInput = "";
  operator = "";
}

