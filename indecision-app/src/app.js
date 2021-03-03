console.log('app.js is running');

var template = <p>This is my JSX template</p>;
//var template = /*#__PURE__*/React.createElement("p", null, "this is my template");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);