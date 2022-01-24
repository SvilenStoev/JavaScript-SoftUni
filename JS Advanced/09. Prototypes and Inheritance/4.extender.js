class Person {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;   
    }
}

function extend(inputClass) {
    inputClass.prototype.species = 'Human';
    inputClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extend(Person);

const person1 = new Person('Svilen', 'svilen.123@abv.bg');

console.log(person1.toSpeciesString());
 