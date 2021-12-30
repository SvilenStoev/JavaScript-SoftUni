function solution(number) {
    let i = number;

    function increment(num) {
        return i + num;
    }

    return increment;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
