// let lastName = 'Last Name';

// const person = {
//     firstName: 'Svilen',
//     'Last Name': 'Stoev',
// }

// console.log(person.lastName); //undefined
// console.log(person[lastName]); //Stoev


// console.log(person);

// const department = {
//     name: 'Engineering',
//     director: 'Ted Thompson',
//     employeeCount: 25
// };

// const { name2, employeeCount } = department;
// console.log(name2, employeeCount); // 'Engineering' 25

// const firstPerson = {
//     firstName: 'Svilen',
//     lastName: 'Stoev',
//     fullName() {
//         console.log(`${firstPerson.firstName} ${this.lastName}`);
//     }
// }

// const someVariable = firstPerson.fullName;

// const secondPerson = {
//     firstName: 'Pesho'
// }

// secondPerson.someNewFunction = someVariable;

// secondPerson.someNewFunction(); // Pesho undefined

// console.log(firstPerson.fullName == secondPerson.someNewFunction); //true

// console.log(secondPerson);

let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }'; 

let obj = JSON.parse(data);

console.log(obj.manager['lastName']) // Doe 
