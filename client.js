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
    divide: (num, total) => total/num,
    multiply: (num, total) => total*num,
    subtraction: (num, total) => total -= num,
    addition: (num, total) => total += num
}

let total = 0;

// const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
// key.classList.add('playing');

const generateButton = (buttons) => {
    let calculatorHtml = '';
    for (let row in buttons) {
        console.log(row);
        buttons[row].forEach((val, index, arr) => {
            if (index === arr.length-1) calculatorHtml += `<div class="${row} operator" id="${val}">${val}</div>`;
            else if (typeof(val) === "number") calculatorHtml += `<div class="${row}-${index} number" id="${val}">${val}</div>`;
            else calculatorHtml += `<div class="${row}-${index}" id="${val}">${val}</div>`;
        })
    }
    return calculatorHtml;
}
// Updates displayed Total
const updateTotal = () => document.getElementById("total").innerHTML=total;
// IF total 0 & Number buttons pressed, add to total & Display it
let currentOperator = '';

const calculate = ({operations} = add, subtract, divide, multiply) => {
    // calculate & display
    switch (currentOperator) {
        default:
            console.log('No operator, retain total', total);
    }
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
    total = 0;
    updateTotal();
    console.log(e.target, currentOperator, total);
});
document.getElementById(".").addEventListener("click", (e) => console.log(e.target));
Array.from(operators).forEach((el) => el.addEventListener("click", (e) => {
    console.log(e.target);
    // If new operator pressed & last thing pressed was operator, default to current operator
    // If currentOperator is defined & current operator not Equals
    if (e.target.id === "=") {
        calculate();
    } else if (currentOperator !== '' && e.target.id !== "=") {
        calculate();
        currentOperator = e.target.id;
    }
    
}));
Array.from(numbers).forEach((el) => el.addEventListener("click", (e) => {
    console.log(e.target.id, total);
    if (total == 0) { //if total is zero
        total += parseInt(e.target.id);
        updateTotal();
    } else { //if total doesn't equal zero (and last button pressed a number) concat number string
        total += e.target.id;
        updateTotal();
    }
    // if (currentOperator === '') {
    //     //concat number string
    // }
    console.log(total);
}));
// document.getElementById("x").addEventListener("click", (e) => console.log(e.target));
// document.getElementById("-").addEventListener("click", (e) => console.log(e.target));
// document.getElementById("+").addEventListener("click", (e) => console.log(e.target));
// document.getElementById("=").addEventListener("click", (e) => console.log(e.target));
