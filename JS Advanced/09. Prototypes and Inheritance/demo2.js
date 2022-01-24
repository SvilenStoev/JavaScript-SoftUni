const myArr = [1, 2, 3];

console.log(myArr);

for (let item of myArr) {
    console.log(item);
}

myArr.__proto__.getLastIndex = function () {
    return this.length - 1;
}

console.log(myArr.getLastIndex());