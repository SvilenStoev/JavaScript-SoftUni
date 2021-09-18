function stringLength(first, second, third) {
    let totalStringLength = first.length + second.length + third.length;
    let avg = Math.floor(totalStringLength / 3);

    console.log(totalStringLength);
    console.log(avg);
}

stringLength('chocolate', 'ice cream', 'cake');