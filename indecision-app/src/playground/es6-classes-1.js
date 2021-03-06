 class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
 }

 const person1 = new Person('Guy Fawls', 45);
 const person2 = new Person('Sally Runion', 50);

 console.log(person1.getDescription());
 console.log(person2.getDescription());

