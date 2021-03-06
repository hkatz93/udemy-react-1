class Header extends React.Component {
    render() {
        return <h1>Header</h1>;
    }
}

const jsx = (
    <div>
        <Header />
        <p>Start</p>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));