function pieceOfPie(flavorsArr, flavor1, flavor2) {
    const startIndex = flavorsArr.indexOf(flavor1);
    const endIndex = flavorsArr.indexOf(flavor2);

    const resultArr = flavorsArr.slice(startIndex, endIndex + 1)

    return resultArr;
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));