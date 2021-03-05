console.log('app.js is running');

const app = {
    title: 'Visibility Toggle',
    details: 'These are the details',
    detailDisplay: ''
}

const appRoot = document.getElementById('app');

const toggleDetails = () => {
    app.detailDisplay = app.detailDisplay ? '' : app.details;
    render();
}

const render = () => {

    const template = (
        <div>
        <h1>{app.title}</h1>
        <button onClick={toggleDetails}>{app.detailDisplay ? 'Hide details' : 'Show Details'}</button>
        {app.detailDisplay && <p>{app.detailDisplay}</p>}
        </div>
        
    );
    ReactDOM.render(template, appRoot);
}
render();