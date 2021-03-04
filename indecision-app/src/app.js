console.log('app.js is running');

// JSX template with title/subtite using JSON object
const book = {
    title: 'Splat',
    subtitle: 'How High Altitude Fears Changed My Life',
    options: []
}


// subtitle only if exists
// display options only if length > 0
const template1 = (
    <div>
    <h1>{book.title}</h1>
    {book.subtitle && <p>{book.subtitle}</p>}
    {book.options.length > 0 
        ? 
        <ol>
            {book.options.map((value, index) => {
                return <li key={index}>{value}</li>
            })}
        </ol>
        : "No options"
    }
    </div>
);
//var template = /*#__PURE__*/React.createElement("p", null, "this is my template");

// JSX template with variables
// h1 -> name
// p -> age
// p -> location

const userName =  'howard katz';
const age = 45;
const location2 = 'my house2'; // location causes redirect

const user = {
    name: 'Howard Katz',
    age: 45,
    location: 'venice2'
};


//var fLocation = () => 'fLocation';
let getLocation = (location) => {
    if (location) {
        return <p>{location}</p>;
    }
}

const template2 = (
<div>
  <h1>{user.name ?  user.name : 'Anonymous'}</h1>
  {user.age > 18 && <p>Age: {user.age}</p>}
  {getLocation(user.location)}
</div>
);
let appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);