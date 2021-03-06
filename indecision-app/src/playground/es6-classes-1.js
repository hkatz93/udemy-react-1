 class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. My name is ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
 }

 class Traveler extends Person {
    constructor(name, age, homelocation = '') {
        super(name, age);
        this.homelocation = homelocation;
    }
    
    getGreeting() {
        let greeting = super.getGreeting();
        greeting += !!this.homelocation ? ` I am visiting from ${this.homelocation}.` : '';
        return greeting;
    }
}

 
const person0 = new Person();
const person1 = new Traveler('Guy Fawls', 45, 'Moscow');
const person2 = new Traveler();

console.log(person0.getGreeting());
console.log(person1.getGreeting());
console.log(person2.getGreeting());

