import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Options = ({ options, handleDeleteOptions }) => (
  <div>
    <button type="button" className="button" onClick={handleDeleteOptions}>Remove All</button>
    <p>
      item count =
      {options.length}
    </p>
    {options.length > 0
      ? (
        <ol>
          {options.map((value) => <Option key={value.id} value={value} />)}
        </ol>
      )
      : 'No options'}
  </div>
);

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
};

export default Options;
