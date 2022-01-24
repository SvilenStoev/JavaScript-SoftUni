import { calc } from './calculator.js';

const firstNumberEl = document.getElementById('firstNumber');
const secondNumberEl = document.getElementById('secondNumber');
const signEl = document.getElementById('sign');
const resultEl = document.getElementById('result');
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate(event) {
    event.preventDefault();

    const a = Number(firstNumberEl.value);
    const b = Number(secondNumberEl.value);
    const sign = signEl.value;

    if (isNaN(a) || isNaN(b) || sign == '' || (a == '' && a != 0) || (b == '' && b != 0)) {
        return alert('The input is invalid!');
    }

    const result = calc(a, b, sign);

    if (isNaN(result)) {
        alert(result);
    } else {
        resultEl.textContent = `Result: ${result.toFixed(2)}$`;
    }
}

