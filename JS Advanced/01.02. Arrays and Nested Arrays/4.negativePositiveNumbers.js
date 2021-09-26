function shiftElements(array) {
    const resultArr = [];

    for (let num of array) {
        if (num < 0) {
            resultArr.unshift(num);
        }
        else {
            resultArr.push(num);
        }
    }

    console.log(resultArr.join("\n"));
}

shiftElements([7, -2, 8, 9]);
console.log("--------------");
shiftElements([3, -2, 0, -1]);