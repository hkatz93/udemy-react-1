console.log('app.js is running');

var template = (
    <div>
    <h1>Howard's page</h1>
    <p>This part of my JSX template!!!</p>
    <ol>
    <li>Item A</li>
    <li>Item B</li>
    </ol>
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

var template2 = (
<div>
  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>Location: {user.location} </p>
</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);