import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Option from './Option';

const Options = ({ options, handleDeleteOptions, handleDeleteOption2 }) => (
  <div>
    <button
      type="button"
      className="button button--link"
      onClick={handleDeleteOptions}
    >
      Remove All
    </button>
    <p>
      item count =
      {options.length}
    </p>
    {options.length > 0
      ? (
        <div>
          {options.map((value, index) => (
            <Option
              key={value}
              value={value}
              index={index}
              handleDeleteOption2={handleDeleteOption2}
            />
          ))}
        </div>
      )
      : 'No options'}
  </div>
);

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOption2: PropTypes.func.isRequired,
};

export default Options;
