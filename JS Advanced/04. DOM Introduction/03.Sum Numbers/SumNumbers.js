function calc() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    let sum = num1 + num2;

    if (Number.isNaN(sum)) {
        document.getElementById('sum').value = 'Error!';
    } else {
        document.getElementById('sum').value = sum;
    }
}
