import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options: ['1a', 'Act 2b', 'Act 3c']
    }
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    };
    handleDeleteOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    handleWhatShouldIDo = () => {
        const randNum = Math.floor((Math.random() * this.state.options.length));
        const randOption = this.state.options[randNum]; 
        
        this.setState(() => ({
            selectedOption: randOption
        }));   
    };

    handleAddOption = (option) => {
        if (option) {
            alert('app handleAddOption: value = '+option);
        }
        // check for duplicates
        
        const duplicate = this.state.options.find(element => element === option);
        if (duplicate) {
            console.log('duplicate found for option = '+option);
        }

        if (!duplicate) {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
        console.log(option);
    };
    
    render() {
        const title = 'Indecision Picker';
        const subtitle = 'Put your life into the hands of a computer';
        
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
        <div className='container'>    
            <Action 
                hasOption={this.state.options.length > 0}
                handleWhatShouldIDo={this.handleWhatShouldIDo}
            />
            <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption} />
            <OptionModal 
                selectedOption={this.state.selectedOption} 
                handleDeleteOption={this.handleDeleteOption}/>
            </div>
        </div>
        );
    }
}