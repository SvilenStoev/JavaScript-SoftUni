// function sortNumbers(array) {
//     let length = array.length;
//     array.sort((a, b) => a - b);
//     const resultArr = [];

//     for (let i = 0; i < length / 2; i++) {
//         resultArr.push(array[i]);
        
//         if ((length % 2 != 0) && (i > (length / 2) - 1)) {
//             break;
//         }
//         else {
//             resultArr.push(array[length - 1 - i]);
//         }
//     }

//     return resultArr;
// }

// console.log(sortNumbers([1, 65, 3, 52, 5]));

function sortNumbers(array) {
    array.sort((a, b) => a - b);
    const restultArr = [];

    while(array.length != 0) {
        restultArr.push(array.shift(), array.pop());
    }

    return restultArr;
}

console.log(sortNumbers([1, 65, 3, 52, 5]));