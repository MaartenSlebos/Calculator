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
const MAX_DIGITS = 10;  // Maximum digits allowed

// get DOM elements 
const screenText = document.querySelector('#screenText'); 
const numberButtons = document.querySelectorAll('#num')

// function to update display
function updateDisplay(value) {
    screenText.textContent = value;
}

// Function to handle digit button clicks
function handleDigitClick(digit) {
    if (displayNumber.length < MAX_DIGITS) { // Check if under limit
        displayNumber += digit; // Add the clicked digit to the number
        updateDisplay(displayNumber); // Update the screen with the current number
    }
    // If limit reached, do nothing (or could show an error)
}

// Add event listeners to digit buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleDigitClick(button.textContent);
    });
});

// Initial display
updateDisplay('0');