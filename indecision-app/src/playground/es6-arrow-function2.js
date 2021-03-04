// arguments not available to arrow functions
// this not available to arrow functions


const add = function(a, b) {
    console.log(arguments);
    return a + b;
}
console.log('add = '+ add(30,1));

const add2 = (a, b) => a + b;
console.log('add2 = '+ add(10,1));

//const add3 = (a, b) => {
//    console.log(arguments); // not defined
//    return a + b;
//}


const user = {
    name: 'Howard Katz',
    age: 45,
    cities: ['venice', 'sarasota', 'port charlot'],
    printCities: function () {
        console.log(this.cities);
    }
}

user.printCities(); // works


const user2 = {
    name: 'Howard Katz3',
    age: 45,
    cities: ['venice2', 'sarasota2', 'port charlot2'],
    placesLived() {
        this.cities.map((value, index) => {
            console.log(this.name + ' has lived in ' + value);
        });
    }
}
user2.placesLived(); 

const multiplier = {
    // numbers array of numbers
    // muliplier
    numbers: [1, 2, 3, 4],
    multiplier: 4,
    multiply() {
        let nums = this.numbers.map((number) => {
            return number * this.multiplier;
        })
        return nums;
    }
};

console.log("multiplier = "+multiplier.multiply());