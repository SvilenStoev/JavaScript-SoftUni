function sortNames(array) {
    array.sort((a, b) => a.localeCompare(b));
    let i = 1;

    for (let name of array) {
        console.log(`${i++}.${name}`);
    }
}

sortNames(["John", "bob", "Christina", "Ema"]);