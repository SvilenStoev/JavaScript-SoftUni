export function calc(a, b, sign) {
    let result = 1;

    switch (sign) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/':
            if (b == 0) {
                return 'Ne mojesh da delish na 0!!! Glupak!';
            }
            result = a / b;
            break;

        case '^':
            for (let i = 1; i <= b; i++) {
                result *= a;
            }
            break;

        default: result = 'Enter valid sign!';
    }

    return result;
}