"use strict";

const person = {
    firstName: 'Svilen',
    age: '28'
}

Object.defineProperty(person, 'lastName', {
    value: 'Stoev',
    enumerable: true
});

console.log(Object.getOwnPropertyDescriptors(person));

for (let key in person) {
    console.log(`${key} -> ${person[key]}`);
}