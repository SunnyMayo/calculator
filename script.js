const buttons = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "clear", "0", "=", "/"];
const numpad = document.querySelector("#numpad");

document.addEventListener("DOMContentLoaded", () => {
    buttons.forEach(buttonText => {
        const button = document.createElement("button");
        button.classList.add("button");
        button.textContent = buttonText;
        if (parseInt(buttonText) || buttonText == 0) {
            button.classList.add("number");
        }
        else if ("+-*/".includes(buttonText)) {
            button.classList.add("operator");
        }
        else if (buttonText == "=") {
            button.classList.add("equals");
        }
        else {
            button.classList.add("clear");
        };
        numpad.appendChild(button);
    });
});

let firstNum;
let secondNum;
let operator;

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};


