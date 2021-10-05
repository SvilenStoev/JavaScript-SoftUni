// //solution one:
// function solve(array) {
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < array[i - 1]) {
//             array.splice(i--, 1);
//         }
//     }

//     return array;
// }

// console.log(solve([1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24]));

// // solution two:
// function solve(array) {
//     let biggest = Number.MIN_SAFE_INTEGER;

//     return array.filter(x => {
//         if (x >= biggest) {
//             biggest = x;
//             return true;
//         }

//         return false;
//     });
// }

// console.log(solve([1,
//     3,
//     8,
//     4,
//     10,
//     12,
//     3,
//     2,
//     24]));

// solution three:

function solve(array) {
    const resultArr = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    array.reduce((resultArr, currentValue) => {
        if (currentValue >= biggest) {
            biggest = currentValue;
            resultArr.push(currentValue);
        }

        return resultArr;
    }, resultArr);

    return resultArr;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));