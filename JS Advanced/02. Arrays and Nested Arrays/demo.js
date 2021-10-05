// const myArr = [10, 20, 30, 40];

// const [...rest] = myArr;

// console.log(rest); //[10, 20, 30, 40]

// function test(...params) {
//     console.log(params);
//     console.log(...params);
// }

// test(1, 2, 3);

// let arr = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];

// arr.sort((a, b) => a.localeCompare(b));

// console.log(arr);

// const compareNumbers = (a, b) => a - b;
// const compareStrings = (a, b) => a.localeCompare(b);

let arr = [[4, 5, 6],
           [6, 5, 4],
           [5, 5, 5]];

for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < arr[i].length; y++) {
        console.log(arr[i][y]);
    }
}