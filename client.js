// C     %
// 7 8 9 x
// 4 5 6 -
// 1 2 3 +
// 0   . =

const buttons = {
    firstRow: ['C', '/'],
    secondRow: [7, 8, 9, 'x'],
    thirdRow: ['4', '5', '6', '-'],
    fourthRow: ['1', '2', '3', '+'],
    finalRow: ['0', '.', '=']
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
// IF total 0 & Number buttons pressed, add to total & Display it

// operator functions - need way to validate number or other operator?
// Clear => resets #total content to 0
const clear = () => {
    total = 0;
    document.getElementById("total").innerHTML=total;
}
// Divide => Divides total by pressed number
const divide = (num, total) => total/num;
// multiply
const multiply = (num, total) => total*num;
// subtract
const subtraction = (num, total) => total -= num;
// adds
const addition = (num, total) => total += num;

// Need container function for background total (like state) before displayed?

(() => {
    console.log('document ready');
    // console.log(generateButton(buttons));
    document.getElementById("calculator").innerHTML+=generateButton(buttons);
    // invoke event listeners
})()

// Event Listeners
let operators = document.getElementsByClassName("operator");
let numbers = document.getElementsByClassName("operator");

document.getElementById("C").addEventListener("click", (e) => console.log(e.target));
document.getElementById(".").addEventListener("click", (e) => console.log(e.target));
Array.from(operators).forEach((el) => el.addEventListener("click", (e) => console.log(e.target)));
Array.from(numbers).forEach((el) => el.addEventListener("click", (e) => console.log(e.target)));
// document.getElementById("x").addEventListener("click", (e) => console.log(e.target));
// document.getElementById("-").addEventListener("click", (e) => console.log(e.target));
// document.getElementById("+").addEventListener("click", (e) => console.log(e.target));
// document.getElementById("=").addEventListener("click", (e) => console.log(e.target));
