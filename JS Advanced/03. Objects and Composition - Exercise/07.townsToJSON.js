function generateJSONfromATable(tableArr) {
    const result = [];
    const [firstCol, secondCol, thirdCol] = tableArr[0]
        .substring(2, tableArr[0].length - 2)
        .split(' | ');

    for (let i = 1; i < tableArr.length; i++) {
        const currRow = tableArr[i];

        const [firstColData, secondColData, thirdColData] = currRow
            .substring(2, currRow.length - 2)
            .split(' | ');

        let secondColNum = Math.round(Number(secondColData) * 100) / 100;
        let thirdColNum = Math.round(Number(thirdColData) * 100) / 100;

        const currObj = {};

        currObj[firstCol] = firstColData;
        currObj[secondCol] = secondColNum;
        currObj[thirdCol] = thirdColNum;

        result.push(currObj);
    }

    console.log(JSON.stringify(result));
}

generateJSONfromATable(['| FirstName | Age | Money |',
    '| Svilen | 27 | 2850.5823113 |',
    '| Pesho | 25 | 850.99 |']);
