import PropTypes from 'prop-types';
import React from 'react';

export default class AddOption extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    // }
    handleAddOption = (e) => {
      // console.log(testing);
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      if (option) {
        // console.log(option);
        // alert('handleAddOption: value == ');
        const { handleAddOption } = this.props;
        handleAddOption(option);
      }
    }

    render() {
      const { error } = this.props;
      return (
        <div>
          <p>{error}</p>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button type="submit" className="button">Add Option</button>
          </form>
        </div>
      );
    }
}

AddOption.propTypes = {
  handleAddOption: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
