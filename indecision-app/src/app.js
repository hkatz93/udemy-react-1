class IndecisionApp extends React.Component {
    render() {
        return (
        <div>
        <Header title='Indecision Picker' subtitle='Put your life into the hands of a computer' />
        <Action />
        <Options />
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
    render() {
        return (
        <div>
            <button>What should I do?</button>
        </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
            <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
            <ol>
                <li>1111</li>
                <li>2222</li>
            </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
        <div>
        <form>
        <input type='text' name='option' /><button>Add Option</button>
        </form>
        </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));