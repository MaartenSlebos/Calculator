// script.js

// Basic math functions
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
        return "N/A";
    }
    return a / b;
}

function operate(operator, num1, num2) {
    const a = Number(num1);
    const b = Number(num2);
    const result = (() => {
        switch(operator) {
            case '+': return add(a, b);
            case '-': return subtract(a, b);
            case 'x': return multiply(a, b);
            case '÷': return divide(a, b);
            default: return "Error: Invalid operator";
        }
    })();
    return typeof result === 'number' ? Number(result.toFixed(10)) : result;
}

// Calculator state variables
let firstNumber = '';
let operator = '';
let secondNumber = '';
let lastResult = null; // Tracks if we have a result
const MAX_DIGITS = 10;

// Get DOM elements
const screenText = document.querySelector('#screenText');
const numberButtons = document.querySelectorAll('#num');
const operatorButtons = document.querySelectorAll('#operatorButton');
const clearButton = document.querySelector('#c');

// Function to update display
function updateDisplay(value) {
    screenText.textContent = value;
}

// Function to reset state fully
function clearCalculator() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    lastResult = null;
    updateDisplay('0');
}

// Function to handle digit button clicks
function handleDigitClick(digit) {
    if (lastResult !== null && operator === '') { // Only clear if no operator after result
        clearCalculator();
    }
    if (operator === '') { // Building first number
        if (firstNumber.length < MAX_DIGITS) {
            firstNumber += digit;
            updateDisplay(firstNumber);
        }
    } else { // Building second number
        if (secondNumber.length < MAX_DIGITS) {
            secondNumber += digit;
            updateDisplay(`${firstNumber} ${operator} ${secondNumber}`);
            lastResult = null; // Reset lastResult as we’re building a new operation
        }
    }
}

// Function to handle operator button clicks
function handleOperatorClick(op) {
    if (op === '=') {
        if (firstNumber && operator && secondNumber) { // Only evaluate with all parts
            const result = operate(operator, firstNumber, secondNumber);
            updateDisplay(result);
            firstNumber = result.toString();
            operator = '';
            secondNumber = '';
            lastResult = result; // Mark that we have a result
        }
    } else {
        // If we have a complete operation, evaluate it first
        if (firstNumber && operator && secondNumber) {
            const result = operate(operator, firstNumber, secondNumber);
            firstNumber = result.toString();
            secondNumber = '';
            lastResult = result;
            operator = op; // Use new operator for next operation
            updateDisplay(`${firstNumber} ${operator}`);
        } else if (firstNumber !== '') { // Just set operator if no second number yet
            operator = op;
            lastResult = null; // Reset lastResult since we’re continuing
            updateDisplay(`${firstNumber} ${operator}`);
        }
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
    clearCalculator();
});

// Initial display
updateDisplay('0');