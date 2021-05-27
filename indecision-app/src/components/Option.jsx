import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ value }) => (
  <li>{value}</li>
);

Option.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Option;
