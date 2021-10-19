class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

// const firstPerson = new Person('Svilen', 'Stoev', '27', 'svilen.d.stoev@abv.bg');

// console.log(firstPerson.toString());
// console.log(firstPerson);

module.exports = Person;