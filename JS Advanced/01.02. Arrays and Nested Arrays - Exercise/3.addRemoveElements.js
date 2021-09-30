function addRemoveElements(array) {
    const resultArr = [];

    for (let i = 1; i <= array.length; i++) {
        if (array[i - 1] == 'add') {
            resultArr.push(i);
        }
        else {
            resultArr.pop();
        }
    }

    return resultArr.length != 0 ? console.log(resultArr.join('\n')) : console.log('Empty');
}

addRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']);