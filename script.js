let currentInput = ''; 

function add(a, b) {
  return a.toString() + b.toString();
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function calculate() {
    let result;
    let parts = currentInput.split('+');
  
    if (currentInput === '1488') {
      result = 'Пасхалко';
    } else if (parts.length === 2) {
      let a = parseFloat(parts[0]);
      let b = parseFloat(parts[1]);
  
      if (!isNaN(a) && !isNaN(b)) {
        result = add(a, b);
      } else {
        result = 'Error';
      }
    } else {
      result = 'Error';
    }
  
    document.getElementById('display').value = result;
  }

function clearDisplay() {
  currentInput = ''; 
  document.getElementById('display').value = ''; 
}

let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearDisplay);