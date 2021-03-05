console.log('app.js is running');

// JSX template with title/subtite using JSON object
const app = {
    title: 'Splat',
    subtitle: 'How High Altitude Fears Changed My Life',
    options: ['op1a','op2','op3']
}

//const onFormSubmit = function (e) {
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('onFormSubmit');

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option); // working
        
        e.target.elements.option.value = '';
    }
    console.log('options = '+ app.options);
    RenderPage();
    
}

// subtitle only if exists
// display options only if length > 0
const template1 = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>Number of options = {app.options.length}</p>
    {app.options.length > 0 
        ? 
        <ol>
            {app.options.map((value, index) => {
                return <li key={index}>{value}</li>
            })}
        </ol>
        : "No options"
    }
    <form onSubmit={onFormSubmit}>
        <input type='text' name='option'></input>
        <button>Add Option</button>
    </form>
    </div>
);

let appRoot = document.getElementById('app');
const RenderPage = () => {
    const template2 = (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>Number of options = {app.options.length}</p>
        {app.options.length > 0 
            ? 
            <ol>
                {app.options.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ol>
            : "No options"
        }
        <form onSubmit={onFormSubmit}>
            <input type='text' name='option'></input>
            <button>Add Option</button>
        </form>
        </div>
    );
    ReactDOM.render(template1, appRoot);
}
RenderPage();

//let appRoot = document.getElementById('app');
//ReactDOM.render(template1, appRoot);