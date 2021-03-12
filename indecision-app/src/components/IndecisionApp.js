import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';


export default class IndecisionApp extends React.Component {
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