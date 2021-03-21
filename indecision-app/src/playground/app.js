// refactor with state
import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options:  props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleWhatShouldIDo = this.handleWhatShouldIDo.bind(this);
        this.handleDeleteOption = this.handleAddOption.bind(this);
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(option) {
        console.log('hdo', option);
    }
    handleWhatShouldIDo() {
        const randNum = Math.floor((Math.random() * this.state.options.length));
        const randOption = this.state.options[randNum]; 
        
        alert('handleWhatShouldIDo = '+randOption);
    }
    handleAddOption(option) {
        console.log('handleAddOption');
        const value = option.trim();
        if (!value) {
            return 'option must not be blank';
        }
        
        if (this.state.options.indexOf(value) > -1) {
            // console.log('duplicate found for option = '+option);
            return 'duplicates not allowed: ' + value;
        }

        this.setState((prevState) => ({ options: prevState.options.concat([value]) }));
        console.log(value);
    }
   
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
            handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['op1', 'op2', 'op3']
}

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision Piks',
    subtitle: 'putting your life to a computer'
}

const Action = (props) => {
    return (
        <div>
        <button 
            onClick={props.handleWhatShouldIDo}
            disabled={!props.hasOption}
        >
            What should I do?
        </button>  
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        <p>item count = {props.options.length}</p>
        {props.options.length > 0 
            ? 
            <ol>
                {props.options.map((optionText, index) => (
                    <Option 
                        key={index} 
                        optionText={optionText} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))}                
            </ol>
            : "No options"
        }
        </div>
    );
}

const Option = (props) => {
    return (
        <li>{props.optionText} <button onClick={props.handleDeleteOption}>Delete Option</button></li>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: ''
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error =  this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
        <input type='text' name='option' /><button>Add Option</button>
        </form>
        </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));