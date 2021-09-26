function biggerHalf(array) {
    array.sort((a, b) => a - b);

    const startIndex = Math.floor(array.length / 2);

    const resultArr = array.slice(startIndex);

    return resultArr;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));