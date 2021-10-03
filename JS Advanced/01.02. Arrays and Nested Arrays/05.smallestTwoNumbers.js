function smallestTwo(array) {
    array.sort((a, b) => a - b);

    console.log(array[0] + ' ' + array[1]);
}

smallestTwo([30, 15, 50, 5]);