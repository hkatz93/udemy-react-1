console.log('app.js is running');

const app = {
    title: 'Visibility Toggle',
    details: 'These are the details',
}

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {

    const template = (
        <div>
        <h1>{app.title}</h1>
        <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show Details'}</button>
        {visibility && <p>{app.details}</p>}
        </div>
        
    );
    ReactDOM.render(template, document.getElementById('app'));
}
render();