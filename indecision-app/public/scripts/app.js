'use strict';

console.log('app.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Howard\'s page'
    ),
    React.createElement(
        'p',
        null,
        'This part of my JSX template!!!'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item A'
        ),
        React.createElement(
            'li',
            null,
            'Item B'
        )
    )
);
//var template = /*#__PURE__*/React.createElement("p", null, "this is my template");

// JSX template with variables
// h1 -> name
// p -> age
// p -> location

var userName = 'howard katz';
var age = 45;
var location2 = 'my house2'; // location causes redirect

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        location2,
        ' '
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
