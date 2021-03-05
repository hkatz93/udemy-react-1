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
let count = 1;
const addOne = function() {
    count = count + 1;
    console.log('addOne');
}

const subtractOne = function() {
    count = count - 1;
    console.log('subtractOne');
}

const resetButton = function() {
    console.log('resetButton');
}
const template2 = (
<div>
  <h1>Count = {count}</h1>
  <p><button id='my-id' className='button' onClick={addOne}>+1</button></p>
  <p><button id='my-id2' className='button' onClick={subtractOne}>-1</button></p>  
</div>
);
let appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);