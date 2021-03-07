
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne() {
        //console.log('handleAddOne');
        this.setState((prevState) => {
            return (
                {
                    count: prevState.count +1
                }
            );
        });
    }
    handleMinusOne() {
        //console.log('handleMinusOne');
        this.setState((prevState) => {
            return (
                {
                    count: prevState.count - 1
                }
            );
        });
    }
    handleReset() {
        console.log('handleReset');
        this.setState(() => {
            return (
                {
                    count: 0
                }
            );
        });
    }
    render() {
        return (
        <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
        </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 1;
// const addOne = () => {
//     count++;
//     console.log('addOne');
//     renderCounterApp();
// }

// const subtractOne = () => {
//     count--;;
//     console.log('subtractOne');
//     renderCounterApp();
// }

// const resetButton = () => {
//     count = 0;
//     console.log('resetButton');
//     renderCounterApp();
// }


// let appRoot = document.getElementById('app');

// //ReactDOM.render(template2, appRoot);

// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//           <h1>Count = {count}</h1>
//           <p><button id='my-id' className='button' onClick={addOne}>+1</button></p>
//           <p><button id='my-id2' className='button' onClick={subtractOne}>-1</button></p>
//           <p><button id='my-id2' className='button' onClick={resetButton}>Reset</button></p>  
//         </div>
//         );
//     ReactDOM.render(template2, appRoot);
// }
// renderCounterApp();