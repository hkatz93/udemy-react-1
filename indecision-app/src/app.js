import React from 'react';
import ReactDOM from 'react-dom';
import Option from './components/Option';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options:  ['Act 1', 'Act 2', 'Act 3']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleWhatShouldIDo = this.handleWhatShouldIDo.bind(this);
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handleWhatShouldIDo() {
        const randNum = Math.floor((Math.random() * this.state.options.length));
        const randOption = this.state.options[randNum]; 
        
        alert('handleWhatShouldIDo = '+randOption);
    }
    handleAddOption(option) {
        if (option) {
            alert('app handleAddOption: value = '+option);
        }
        // check for duplicates
        
        const duplicate = this.state.options.find(element => element === option);
        if (duplicate) {
            console.log('duplicate found for option = '+option);
        }

        // not working: const options = this.prevState.options.concat([option]);
        //console.log(this.state.options);
        // this.setState
        if (!duplicate) {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
        console.log(option);
    }
    // handleAddOption(e) {
    //     e.preventDefault();
    //     const option = e.target.elements.option.value.trim();
    //     if (option) {
    //         alert('handleAddOption: value = '+option);
    //     }
        
    // }
  
    render() {
        const title = 'Indecision Picker';
        const subtitle = 'Put your life into the hands of a computer';
        
        return (
        <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
            hasOption={this.state.options.length > 0}
            handleWhatShouldIDo={this.handleWhatShouldIDo}
        />
        <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    
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

class Options extends React.Component {
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

// class Option extends React.Component {
//     render() {
//         //console.log(this.props);
//         return (
//         <li>{this.props.value}</li>      
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            // console.log(option);
            // alert('handleAddOption: value == ');
            this.props.handleAddOption(option);
        }
    }
    render() {
        return (
        <div>
        <form onSubmit={this.handleAddOption}>
        <input type='text' name='option' /><button>Add Option</button>
        </form>
        </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));