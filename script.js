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
        console.log('add')
    } else if (o == 'substract') {
        console.log('substract')
    } else if (o == 'divide') {
        console.log('divide')
    } else if (o == 'multiply') {
        console.log('multiply')
    }
}



