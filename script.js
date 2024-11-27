let displayValue = '0';
let firstNum = null;
let secondNum = null;
let operator = null;
let nextOperator = null;
let result = null;

const buttons = document.querySelectorAll('button');

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}

updateDisplay();

function buttonClick() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].classList.contains('number')) {
                inputNumber(buttons[i].value);
                updateDisplay;
            }
            else if (buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            }
            else if (buttons[i].classList.contains('percent')) {
                inputPercent(displayValue);
                updateDisplay();
            }
            else if (buttons[i].classList.contains('clear')) {
                clearAll();
                updateDisplay();
            }
            else if (buttons[i].classList.contains('decimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            }
            else if (buttons[i].classList.contains('applicator')) {
                inputEquals();
                updateDisplay();
            }
            else if (buttons[i].classList.contains('back')) {
                inputBackspace();
                updateDisplay();
            }
        }
    )}
}

function inputNumber(num) {
    if (firstNum === null) {
        if (displayValue === 0 || displayValue === '0') {
            displayValue = num;
        }
        else if (displayValue === firstNum) {
            displayValue = num;
        }
        else {
            displayValue += num;
        }
    }
    else {
        if (displayValue === firstNum) {
            displayValue = num;
        }
        else {
            displayValue += num;
        }
    }
}

function inputOperator(op) {
    if (operator != null && nextOperator === null) {
        nextOperator = op;
        secondNum = displayValue;
        result = operate(Number(firstNum), operator, Number(secondNum));
        displayValue = parseFloat(result).toString();
        firstNum = displayValue;
        result = null;
    }
    else if (firstNum != null && secondNum != null) {
        secondNum = displayValue;
        result = operate(Number(firstNum), nextOperator, Number(secondNum));
        nextOperator = op;
        displayValue = parseFloat(result).toString();
        firstNum = displayValue;
        result = null;
    }
    else {
        operator = op;
        firstNum = displayValue;
    }
}

function inputDecimal(decimal) {
    if (displayValue === firstNum || displayValue === secondNum) {
        displayValue = "0";
        displayValue += decimal;
    }
    else if (!displayValue.includes(decimal)) {
        displayValue += decimal;
    }
}

function inputPercent(num) {
    displayValue = (num/100).toString();
}

function clearAll() {
    displayValue = '0';
    firstNum = null;
    secondNum = null;
    operator = null;
    nextOperator = null;
    result = null;
}

function inputEquals() {
    if (operator === null) {
        displayValue = displayValue;
    }
    else if (nextOperator != null) {
        nextOperator = displayValue;
        result = operate(Number(firstNum), nextOperator, Number(secondNum));
        displayValue = parseFloat(result).toString();
        firstNum = displayValue;
        secondNum = null;
        operator = null;
        nextOperator = null;
        result = null;
    }
    else {
        secondNum = displayValue;
        result = operate(Number(firstNum), operator, Number(secondNum));
        displayValue = parseFloat(result).toString();
        firstNum = displayValue;
        secondNum = null;
        operator = null;
        nextOperator = null;
        result = null;
    }
}

function inputBackspace() {
    if (secondNum != null) {
        let removed = secondNum.slice(0, -1);
        secondNum = removed;
    }
    else if (firstNum != null && operator === null) {
        let removed = firstNum.slice(0, -1);
        firstNum = removed;
    }
}

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

function percent(a) {
    return a / 100;
};

function operate(x, operator, y) {
    x = Number(x)
    y = Number(y)
    switch (operator) {
        case '+':
            return add(x, y)
        case '-':
            return subtract(x, y)
        case '*':
            return multiply(x, y)
        case '/':
            if (b === 0) return null
            else return divide(x, y)
        default:
            return null
    }
}