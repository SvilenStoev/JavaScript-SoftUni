function solve(matrix) {
    const length = matrix.length;
    let firstRowSum = 0;
    let firstColSum = 0;

    matrix[0].forEach(el => firstRowSum += el)

    for (let i = 0; i < length; i++) {
        firstColSum += matrix[i][0];
    }

    let isMagic = true;

    for (let y = 0; y < length; y++) {
        let rowSum = 0;
        let colSum = 0;
        matrix[y].forEach(el => rowSum += el);

        for (let i = 0; i < length; i++) {
            colSum += matrix[i][y];
        }

        if (rowSum != colSum || firstColSum != colSum || firstRowSum != rowSum) {
            isMagic = false;
        }
    }

    return isMagic;
}

console.log(solve([[1, 0],
                   [0, 0]]));