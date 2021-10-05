function largestNumber(a, b, c) {

    let number;
    
    if(a > b && a > c) {
        number = a;
    }
    else if(b > c) {
        number = b;
    }
    else {
        number = c;
    }

    console.log(`The largest number is ${number}.`);
}

largestNumber(1, 2, 3);
largestNumber(2, 1, 3);
largestNumber(3, 2, 1);
largestNumber(3, 1, 2);
largestNumber(1, 3, 2);
largestNumber(2, 3, 1);
