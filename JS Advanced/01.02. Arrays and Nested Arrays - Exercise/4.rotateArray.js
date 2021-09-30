function rotateArray(array, count) {
    let rotations = count % array.length;

    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);