class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `My name is ${this.name} and I'm ${this.age} year old.`;
    }
}

class Dog extends Animal {
    constructor(name, age, owner, breed) {
        super(name, age);
        this.owner = owner;
        this.breed = breed;
    }

    toString() {  
        let base = super.toString();
        return `${base} I am a ${this.constructor.name}. My owner is ${this.owner}. My breed is ${this.breed.type}.`;
    }
}

class Breed {
    constructor(type) {
        this.type = type;
    }
} 

const sharo = new Dog('Sharo', 5, 'Svilen', new Breed('Shiba inu'));

console.log(sharo.toString());

class Cat extends Animal {
    constructor(name, age, owner, breed) {
        super(name, age);
        this.owner = owner;
        this.breed = breed;
    }

    toString() {
        let base = super.toString();
        return `${base} I am a ${this.constructor.name}. My owner is ${this.owner}. My breed is ${this.breed.type}.`;
    }
}

const cat1 = new Cat('Miau', 2, 'Teodora', new Breed('Vajna'));

//console.log(cat1.toString());