import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
    render(props) {
        //console.log(this.props);
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            <p>item count = {this.props.options.length}</p>
            {this.props.options.length > 0 
                ? 
                <ol>
                    {this.props.options.map((value, index) => {
                        return <Option key={index} value={value} />
                    })}
                </ol>
                : "No options"
            }
            </div>
        );
    }
}