// refactor with state

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
        const value = option.trim();
        if (!value) {
            return 'option must not be blank';
        }
        
        if (this.state.options.indexOf(value) > -1) {
            // console.log('duplicate found for option = '+option);
            return 'duplicates not allowed: ' + value;
        }

        // not working: const options = this.prevState.options.concat([option]);
        //console.log(this.state.options);
        // this.setState
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([value])
            };
        });
        
        console.log(value);
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

class Option extends React.Component {
    render() {
        //console.log(this.props);
        return (
        <li>{this.props.value}</li>      
        );
    }
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
        // if (option) {
        //     // console.log(option);
        //     // alert('handleAddOption: value == ');
        //     this.props.handleAddOption(option);
        // }
        //console.log(error);
        this.setState((prevState) => {
            return {
                error: error    
            }
        });
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