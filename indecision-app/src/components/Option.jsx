import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ value, index, handleDeleteOption }) => (
  <div className="option">
    <div>
      {index + 1}
      )&nbsp;
      {value}
    </div>
    <button
      type="button"
      className="button button--link"
      onClick={(e) => {
        handleDeleteOption(value);
      }}
    >
      Remove
    </button>
  </div>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};
export default Option;
