console.log('app.js is running');

// JSX template with title/subtite using JSON object
var book = {
    title: 'Splat',
    subtitle: 'How High Altitude Fears Changed My Life',
    options: ['One', 'Two']
}


// subtitle only if exists
// display options only if length > 0
var template1 = (
    <div>
    <h1>{book.title}</h1>
    {book.subtitle && <p>{book.subtitle}</p>}
    {book.options.length > 0 
        && 
        <ol>
            <li>{book.options[0]}</li>
            <li>{book.options[1]}</li>
        </ol>
    }
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
    location: 'venice2'
};


//var fLocation = () => 'fLocation';
var getLocation = (location) => {
    if (location) {
        return <p>{location}</p>;
    }
}

var template2 = (
<div>
  <h1>{user.name ?  user.name : 'Anonymous'}</h1>
  {user.age > 18 && <p>Age: {user.age}</p>}
  {getLocation(user.location)}
</div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template1, appRoot);