function oddPositions(numbers) {
    const resultArr = numbers
        .filter((v, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse();

    console.log(resultArr.join(' '));
}

oddPositions([3, 0, 10, 4, 7, 3]);