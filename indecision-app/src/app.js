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

var template2 = (
<div>
  <h1>{userName}</h1>
  <p>Age: {age}</p>
  <p>Location: {location2} </p>
</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);