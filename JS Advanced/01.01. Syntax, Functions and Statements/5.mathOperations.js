function mathOperations(a, b, operator) {
    let result;

    switch(operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '/': result = a / b; break;
        case '*': result = a * b; break;
        case '%': result = a % b; break;
        case '**': result = a ** b; break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');