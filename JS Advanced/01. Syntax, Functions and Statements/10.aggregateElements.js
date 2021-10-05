/**
 * 
 * @param {Array} array 
 */

function aggregateElements(array) {
    let sumResult = 0;
    let sumInverse = 0;
    let concatResult = '';
    
    array.forEach(element => {
        sumResult += element;
        sumInverse += 1 / element; 
        concatResult += element;
    });

    console.log(sumResult);
    console.log(sumInverse);
    console.log(concatResult);
}

let array = [1, 2, 3];

aggregateElements(array);