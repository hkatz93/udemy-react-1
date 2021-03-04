console.log('app.js is running');

// JSX template with title/subtite using JSON object
var book = {
    title: 'Splat',
    subtitle: 'How High Altitude Fears Changed My Life'
}

var template1 = (
    <div>
    <h1>{book.title}</h1>
    <p>{book.subtitle}</p>
    </div>
);
//var template = /*#__PURE__*/React.createElement("p", null, "this is my template");

// JSX template with variables
// h1 -> name
// p -> age
// p -> location

var userName =  'howard katz';
var age = 45;
var location2 = 'my house2'; // location causes redirect

var user = {
    name: 'Howard Katz',
    age: 45,
    location: 'venice'
};

function getLocation() {
    return 'this location';
}

//var fLocation = () => 'fLocation';
var fLocation = (location) => {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var template2 = (
<div>
  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>Location: {fLocation('this location')}</p>
</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);