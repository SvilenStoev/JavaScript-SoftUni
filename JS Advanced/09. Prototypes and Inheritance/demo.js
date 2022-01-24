class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }
}

const person1 = new Person('Svilen', 'Stoev');

console.log(person1);

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

console.log(person1.getFullName()); //Svilen Stoev