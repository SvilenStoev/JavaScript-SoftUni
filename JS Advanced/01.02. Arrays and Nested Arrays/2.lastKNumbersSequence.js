function generateSequence(n, k) {
    
    const arrResult = [1];

    for (let i = 0; i < n - 1; i++) {
        let currSum = 0;

        for (let i = 0; i < k; i++) {
            
            let currNumber = arrResult[arrResult.length - 1 - i];

            if (currNumber != undefined) {
                currSum += currNumber;
            }
            
        }

        arrResult.push(currSum);
    }

    return arrResult;
}

console.log(generateSequence(6, 3));
console.log(generateSequence(8, 2));