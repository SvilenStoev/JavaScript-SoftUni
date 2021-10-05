function greatestDivisor(a, b) {
    for(let i = 9; i > 0; i--) {
        if(a % i == 0 && b % i == 0) {
            console.log(i);
            return;
        }
    }
}

greatestDivisor(81, 9);