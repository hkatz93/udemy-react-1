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
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);