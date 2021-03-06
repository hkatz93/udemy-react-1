class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision Picker';
        const subtitle = 'Put your life into the hands of a computer';
        const options = ['Act 1', 'Act 2', 'Act 3'];

        return (
        <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
    handleWhatShouldIDo() {
        alert('handleWhatShouldIDo');
    }
    render() {
        return (
        <div>
            <button onClick={this.handleWhatShouldIDo}>What should I do?</button>  
        </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        alert('removeAll');
        //this.props.options = [];
    }
    render() {
        //console.log(this.props);
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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