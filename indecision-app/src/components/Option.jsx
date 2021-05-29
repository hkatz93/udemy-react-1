import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ value, index }) => (
  <div>
    <div>
      {index + 1}
      )&nbsp;
      {value}
    </div>
    <button
      type="button"
      className="button button--link"
      // onClick={(e) => {
      //  props.handleDeleteOption(props.optionText);
      // }}
    >
      Remove
    </button>
  </div>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default Option;
