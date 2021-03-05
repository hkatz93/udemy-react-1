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
const addOne = () => {
    count = count + 1;
    console.log('addOne');
    renderCounterApp();
}

const subtractOne = () => {
    count = count - 1;
    console.log('subtractOne');
    renderCounterApp();
}

const resetButton = () => {
    count = 0;
    console.log('resetButton');
    renderCounterApp();
}


let appRoot = document.getElementById('app');

//ReactDOM.render(template2, appRoot);

const renderCounterApp = () => {
    const template2 = (
        <div>
          <h1>Count = {count}</h1>
          <p><button id='my-id' className='button' onClick={addOne}>+1</button></p>
          <p><button id='my-id2' className='button' onClick={subtractOne}>-1</button></p>
          <p><button id='my-id2' className='button' onClick={resetButton}>Reset</button></p>  
        </div>
        );
    ReactDOM.render(template2, appRoot);
}
renderCounterApp();