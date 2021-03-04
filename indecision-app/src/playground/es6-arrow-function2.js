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
    name: 'Howard Katz',
    age: 45,
    cities: ['venice2', 'sarasota2', 'port charlot2'],
    placesLived: function () {
        let that = this;
        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
}
user2.placesLived(); 