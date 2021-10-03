function sumFirstAndLastElement(array) {
    const firstElement = Number(array.shift());
    const lastElement = Number(array.pop());
    
    return firstElement + lastElement;
}

console.log(sumFirstAndLastElement(['20', '30', '40']));