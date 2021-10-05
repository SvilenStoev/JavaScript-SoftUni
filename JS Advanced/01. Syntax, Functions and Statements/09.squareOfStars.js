function writeStarts(input = 5) {
    for(let i = 0; i < input; i++) {
        let array = [];

        for(let i = 0; i < input; i++) {
            array.push('*');
        }
        console.log(array.join(' '));
    }
}

writeStarts(3);
