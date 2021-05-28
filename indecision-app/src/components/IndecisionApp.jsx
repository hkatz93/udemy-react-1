/* eslint-disable import/extensions */
import React from 'react';
import Header from './Header.jsx';
import Action from './Action.jsx';
import Options from './Options.jsx';
import AddOption from './AddOption';
import OptionModal from './OptionModal.jsx';

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

    handleDeleteOption = () => {
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

      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <div className="container">
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
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleDeleteOption={this.handleDeleteOption}
          />
        </div>
      );
    }
}
