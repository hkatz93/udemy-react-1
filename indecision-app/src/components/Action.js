import React from 'react';

export default class Action extends React.Component {
    
    // const randNum = Math.floor((Math.random() * app.options.length));
    //     console.log('randNum = '+randNum);
    //     // select a random option
    //     const randOption = app.options[randNum];
    //     console.log('randOption='+randOption);
    //     app.suggestedOption = randOption;
    // handleWhatShouldIDo(prevState) {
    //     //const randNum = Math.floor((Math.random() * prevState.options.length));
    //     //const randOption = prevState.options[randNum]; 
        
    //     alert('handleWhatShouldIDo'); // = '+randOption);
    // }
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