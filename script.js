let currentInput = '';

function add(a, b) {
  return a.toString() + b.toString();
}

function subtract(a, b) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.replace(b, ''); 
  } else {
    return parseFloat(a) - parseFloat(b);
  }
}

function multiply(a, b) {
  return "Sorry, I can't do this";
}

function divide(a, b) {
  return "Sorry, I can't do this";
}

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function calculate() {
  let result;

  if (currentInput === '') {
    showImage('error.png', 10000); 
    return;
  }

  if (currentInput === '2+2') {
    showImage('2+2.png', 10000); 
    return;
  }

  try {
    switch (currentInput) {
      case '1488':
        result = 'PASHALKO';
        break;
      case '777':
      case '888':
      case '999':
      case '222':
      case '333':
      case '444':
      case '555':
      case '666':
        result = 'You are so old and cool';
        break;
      default:
        if (currentInput.includes('+')) {
          let parts = currentInput.split('+');
          if (parts.length === 2) {
            result = add(parts[0], parts[1]);
          }
        } else if (currentInput.includes('-')) {
          let parts = currentInput.split('-');
          if (parts.length === 2) {
            result = subtract(parts[0], parts[1]);
          }
        } else if (currentInput.includes('*')) {
          let parts = currentInput.split('*');
          if (parts.length === 2) {
            result = multiply(parseFloat(parts[0]), parseFloat(parts[1]));
          }
        } else if (currentInput.includes('/')) {
          let parts = currentInput.split('/');
          if (parts.length === 2) {
            result = divide(parseFloat(parts[0]), parseFloat(parts[1]));
          }
        } else {
          result = eval(currentInput);
        }
        break;
    }
  } catch {
    result = 'Error';
  }
  
  document.getElementById('display').value = result;
  currentInput = result.toString();
}

function clearDisplay() {
  currentInput = ''; 
  document.getElementById('display').value = ''; 
  showImage('virus.jpg', 10000); 
}

function showImage(src, duration) {
  let img = document.createElement('img');
  img.src = src; 
  img.style.position = 'fixed';
  img.style.top = '0';
  img.style.left = '0';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.zIndex = '9999';
  document.body.appendChild(img);
  setTimeout(() => {
    document.body.removeChild(img);
  }, duration);
}

let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearDisplay);

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value !== '=') {
      appendToDisplay(button.value);
    } else {
      calculate();
    }
  });
});
