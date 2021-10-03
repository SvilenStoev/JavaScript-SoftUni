function evenPositionElements(array) {
    let resultArr = [];
    
    for(let i = 0; i < array.length; i += 2) {
        resultArr.push(array[i]);
    }

    console.log(resultArr.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);