function solve(array) {
    array.sort((a, b) => a.localeCompare(b));

    array.sort((a, b) => a.length - b.length);

    console.log(array.join('\n'));
}

solve(['alpha', 
'Wbeta', 
'wamma']);