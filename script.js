function workingButton() {
    alert("This button is working")
}

function add(a, b) {
    return a + b; 
}

function substract(a, b) {
    return a - b; 
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    return a / b; 
}

let firstNumber = 0; 
let operator = '';
let secondNumber = 0; 

function operate(o, a, b) {
    if (o == 'add') {
        console.log(add(a, b))
        return add(a, b);
    } else if (o == 'substract') {
        console.log(substract(a, b))
        return substract(a, b)
    } else if (o == 'divide') {
        console.log(divide(a, b))
        return divide(a, b)
    } else if (o == 'multiply') {
        console.log(multiply(a, b))
        return multiply(a, b)
    }
}



