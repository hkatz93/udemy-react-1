import React from 'react';

export default class Option extends React.Component {
    render() {
        //console.log(this.props);
        return (
        <li>{this.props.value}</li>      
        );
    }
}