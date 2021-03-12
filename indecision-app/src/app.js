import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import validator from 'validator';

//console.log('isEmail = ', validator.isEmail('test@t.com'));

const Hello = () => {
    return (
        <p>Hello</p>
    )
}

ReactDOM.render(<Hello />, document.getElementById('app'));