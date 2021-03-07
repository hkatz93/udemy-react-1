// Challenge -> create components and use state

// console.log('app.js is running');

class MessageToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'message': (props.message) ? props.message : 'This is my message',
            'visibility': false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);

    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                'visibility': !prevState.visibility
            };
            
        })
    }
    render() {
        return (
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show Details'}</button>
        {this.state.visibility && <p>{this.state.message}</p>}
        </div>       
        );
    }
}

ReactDOM.render(<MessageToggle message='hello there' />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     details: 'These are the details',
// }

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {

//     const template = (
//         <div>
//         <h1>{app.title}</h1>
//         <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show Details'}</button>
//         {visibility && <p>{app.details}</p>}
//         </div>
        
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// }
// render();