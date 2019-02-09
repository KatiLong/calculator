// C     %
// 7 8 9 x
// 4 5 6 -
// 1 2 3 +
// 0   . =

const buttons = {
    firstRow: ['C', '/'],
    secondRow: [7, 8, 9, 'x'],
    thirdRow: [4, 5, 6, '-'],
    fourthRow: [1, 2, 3, '+'],
    finalRow: [0, '.', '=']
}
const operations = {
    divide: (num, total) => total/parseFloat(num),
    multiply: (num, total) => total*parseFloat(num),
    subtraction: (num, total) => total - parseFloat(num),
    addition: (num, total) => total + parseFloat(num)
}

let total = 0;

// const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
// key.classList.add('playing');

const generateButton = (buttons) => {
    let calculatorHtml = '';
    for (let row in buttons) {
        buttons[row].forEach((val, index, arr) => {
            if (index === arr.length-1) calculatorHtml += `<div class="${row} operator" id="${val}">${val}</div>`;
            else if (typeof(val) === "number") calculatorHtml += `<div class="${row}-${index} number" id="${val}">${val}</div>`;
            else calculatorHtml += `<div class="${row}-${index}" id="${val}">${val}</div>`;
        })
    }
    return calculatorHtml;
}
// Updates displayed Total
const updateDisplay = (num) => document.getElementById("total").innerHTML=num;
// IF total 0 & Number buttons pressed, add to total & Display it
let currentOperator = '';
let currentNum = 0;

const calculate = () => {
    console.log('calculate invoked', currentOperator);
    // calculate & display
    switch (currentOperator) {
        case '/' :
            console.log('divide');
            total = operations.divide(currentNum, total);
            break;
        case 'x' :
            console.log('multiple');
            total = operations.multiply(currentNum, total);
            break;
        case '-' :
            console.log('subtract');
            total = operations.subtraction(currentNum, total);
            break;
        case '+' :
            console.log('add');
            total = operations.addition(currentNum, total);
            break;
        default:
            console.log('No operator, retain total', total);
    }
    updateDisplay(total);
}

// operator functions - need way to validate number or other operator?
// Clear => resets #total content to 0
const clear = () => {
    total = 0;
    updateDiTotal();
}
// Need container function for background total (like state) before displayed?

(() => {
    console.log('document ready');
    // console.log(generateButton(buttons));
    document.getElementById("calculator").innerHTML+=generateButton(buttons);
    // invoke event listeners
})()

// Event Listeners
let operators = document.getElementsByClassName("operator");
let numbers = document.getElementsByClassName("number");

document.getElementById("C").addEventListener("click", (e) => {
    currentOperator = '';
    currentNum = 0;
    total = 0;
    updateDisplay(0);
    console.log(currentOperator, total);
});
document.getElementById(".").addEventListener("click", (e) => {
    console.log(e.target);
    currentNum += '.';
    updateDisplay(currentNum);
});
Array.from(operators).forEach((el) => el.addEventListener("click", (e) => {
    // If new operator pressed & last thing pressed was operator, default to current operator
    if (e.target.id === "=") {
        calculate();
        currentOperator = '';
    } 
    // If currentOperator is defined & current operator not Equals
    else if (currentOperator !== '' && e.target.id !== "=") {
        calculate();
        currentOperator = e.target.id;
    }
    else {
        currentOperator = e.target.id;
    }
    console.log('currentOperator: ', currentOperator);
}));
Array.from(numbers).forEach((el) => el.addEventListener("click", (e) => {
    if (total == 0) { // if total is zero
        console.log('numbers if');
        currentNum = parseFloat(e.target.id);
        total = parseFloat(e.target.id);
        updateDisplay(currentNum);
    } else if (currentOperator !== ''){ // if an operator has been pressed
        console.log('numbers else if');
        currentNum = parseFloat(e.target.id);
        // display current number
        document.getElementById("total").innerHTML=e.target.id;
    } else { //if total doesn't equal zero (and last button pressed a number) concat number string
        console.log('numbers else');
        currentNum += e.target.id; 
        total += e.target.id;
        updateDisplay(currentNum);
    }
    // if (currentOperator === '') {
    //     //concat number string
    // }
    console.log('currentNum:', currentNum);
}));
// document.getElementById("x").addEventListener("click", (e) => console.log(e.target));
// document.getElementById("-").addEventListener("click", (e) => console.log(e.target));
// document.getElementById("+").addEventListener("click", (e) => console.log(e.target));
// document.getElementById("=").addEventListener("click", (e) => console.log(e.target));
