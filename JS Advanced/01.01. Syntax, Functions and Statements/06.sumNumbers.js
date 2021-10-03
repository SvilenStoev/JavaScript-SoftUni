function sumBetweenTwoNumber(x, y) {
    let result = 0;
    let startNumber = Number(x);
    let endNumber = Number(y);

    for (let i = startNumber; i <= endNumber; i++) {
        result += i;
    }

    console.log(result);
}

sumBetweenTwoNumber('1', '5');