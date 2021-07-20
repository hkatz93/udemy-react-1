import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ value, index, handleDeleteOption }) => (
  <div className="option">
    <p className="option__text">
      {index + 1}
      .&nbsp;
      {value}
    </p>
    <button
      type="button"
      className="button button--link"
      onClick={(e) => {
        handleDeleteOption(value);
      }}
    >
      remove
    </button>
  </div>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};
export default Option;
