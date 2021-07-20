/* eslint-disable import/extensions */
import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      options: ['1a', 'Act 2b', 'Act 3c'],
    }

    handleDeleteOptions = () => {
      this.setState(() => ({
        options: [],
      }));
    };

    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => option !== optionToRemove),
      }));
    }

    handleDeleteOption2 = () => {
      this.setState(() => ({ selectedOption: undefined }));
    }

    handleWhatShouldIDo = () => {
      const { options } = this.state;
      const randNum = Math.floor((Math.random() * options.length));
      const randOption = options[randNum];

      this.setState(() => ({
        selectedOption: randOption,
      }));
    };

    handleAddOption = (option) => {
      if (option) {
        // alert(`app handleAddOption: value = ${option}`);
      }
      // check for duplicates

      const { options } = this.state;
      const duplicate = options.find((element) => element === option);
      if (duplicate) {
        // console.log(`duplicate found for option = ${option}`);
      }

      if (!duplicate) {
        this.setState((prevState) => ({
          options: prevState.options.concat([option]),
        }));
      }
      // console.log(option);
    };

    render() {
      const title = 'Indecision Picker';
      const subtitle = 'Put your life into the hands of a computer';
      const { options, selectedOption } = this.state;

      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <div className="container">
            <Action
              hasOption={options.length > 0}
              handleWhatShouldIDo={this.handleWhatShouldIDo}
            />
            <div className="widget">
              <Options
                options={options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption handleAddOption={this.handleAddOption} />
            </div>
            <OptionModal
              selectedOption={selectedOption}
              handleDeleteOption2={this.handleDeleteOption2}
            />
          </div>

        </div>
      );
    }
}
