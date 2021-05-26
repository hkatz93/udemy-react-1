import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
    <button className='big-button' onClick={props.handleDeleteOptions}>Remove All</button>
    <p>item count = {props.options.length}</p>
    {props.options.length > 0 
        ? 
        <ol>
            {props.options.map((value, index) => {
                return <Option key={index} value={value} />
            })}
        </ol>
        : "No options"
    }
    </div>
);
export default Options;