//simple functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}


let firstNumber = '';
let operator = '';
let secondNumber = '';
const MAX_DIGITS = 10;

function operate(operator, num1, num2) {
    const a = Number(num1);
    const b = Number(num2); 

    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return "Error: Invalid operator"; 
    }
}

// this stores the current number being entered
let displayNumber = ''; 

// get DOM elements 
const screenText = document.querySelector('#screenText');
const numberButtons = document.querySelectorAll('#num');
const operatorButtons = document.querySelectorAll('#operatorButton');
const clearButton = document.querySelector('#c');

// function to update display
function updateDisplay(value) {
    screenText.textContent = value;
}

// Function to handle digit button clicks
function handleDigitClick(digit) {
    if (operator === '') { // Building first number
        if (firstNumber.length < MAX_DIGITS) {
            firstNumber += digit;
            updateDisplay(firstNumber);
        }
    } else { // Building second number
        if (secondNumber.length < MAX_DIGITS) {
            secondNumber += digit;
            updateDisplay(`${firstNumber} ${operator} ${secondNumber}`);
        }
    }
}

function handleOperatorClick(op) {
    if (op === '=') {
        if (firstNumber && operator && secondNumber) {
            const result = operate(operator, firstNumber, secondNumber);
            updateDisplay(result);
            // Reset for next calculation
            firstNumber = result.toString();
            operator = '';
            secondNumber = '';
        }
    } else if (firstNumber !== '') { // Set operator if we have a first number
        operator = op;
        updateDisplay(`${firstNumber} ${operator}`);
    }
}

// Add event listeners to digit buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleDigitClick(button.textContent);
    });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperatorClick(button.textContent);
    });
});

// Clear button functionality
clearButton.addEventListener('click', () => {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateDisplay('0');
});

// Initial display
updateDisplay('0');