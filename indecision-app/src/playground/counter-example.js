let count = 1;
const addOne = () => {
    count++;
    console.log('addOne');
    renderCounterApp();
}

const subtractOne = () => {
    count--;;
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