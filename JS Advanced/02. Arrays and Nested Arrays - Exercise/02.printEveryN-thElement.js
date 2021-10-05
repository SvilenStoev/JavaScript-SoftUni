function printArrayOnGivenStep(array, step) {
    // const resultArr = [];

    // for (let i = 0; i < array.length; i += step) {
    //     resultArr.push(array[i]);
    // }

    //return resultArr;

    return array.filter((v, i) => i % step == 0);
}

console.log(printArrayOnGivenStep(['dsa',
'asd', 
'test', 
'tset'], 
2));