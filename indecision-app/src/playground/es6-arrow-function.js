// challenge get first name as arrow function


const fullName = 'Howard2 Katz';

//let firstName = (fullName) => {
//    return fullName.split(' ')[0];
//};

// short syntax
const firstName = (fullName) => fullName.split(' ')[0];


function getFirstName(fullName) {
    return fullName.split(' ')[0];
}
console.log('full name = '+fullName+', first name = '+firstName(fullName));

console.log('full name = '+fullName+', first name = '+getFirstName(fullName));