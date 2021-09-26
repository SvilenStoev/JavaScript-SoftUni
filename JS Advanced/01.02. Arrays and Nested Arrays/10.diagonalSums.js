function diagonalSum(matrix) {
    let mainSum = 0;
    let secondarySum = 0;
    let length = matrix.length;

    for (let i = 0; i < length; i++) {
        mainSum += matrix[i][i];
        secondarySum += matrix[i][length - 1 - i];
    }

    console.log(mainSum + ' ' + secondarySum);
}

diagonalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);