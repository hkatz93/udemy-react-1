// refactor with state

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options:  ['Act 1', 'Act 2', 'Act 3']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
      handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
    render() {
        const title = 'Indecision Picker';
        const subtitle = 'Put your life into the hands of a computer';
        
        return (
        <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOption={this.state.options.length > 0}/>
        <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
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
    handleWhatShouldIDo(prevState) {
        //const randNum = Math.floor((Math.random() * prevState.options.length));
        //const randOption = prevState.options[randNum]; 
        
        alert('handleWhatShouldIDo'); // = '+randOption);
    }
    render() {
        return (
        <div>
            <button 
                onClick={this.handleWhatShouldIDo}
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
            <p>{this.props.options.length}</p>
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
    handleAddOption(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert('handleAddOption: value = '+option);
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