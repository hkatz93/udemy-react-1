import React from 'react';

export default class Action extends React.Component {
   
    render() {
        return (
        <div>
            <button 
                onClick={this.props.handleWhatShouldIDo}
                disabled={!this.props.hasOption}
            >
                What should I do?
            </button>  
        </div>
        );
    }
}