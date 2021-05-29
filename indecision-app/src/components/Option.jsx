import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ value, index }) => (
  <div>
    {index + 1}
    )&nbsp;
    {value}
  </div>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default Option;
