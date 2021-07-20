import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Option from './Option';

const Options = ({ options, handleDeleteOptions, handleDeleteOption }) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        type="button"
        className="button button--link"
        onClick={handleDeleteOptions}
      >
        Remove All
      </button>
    </div>

    {options.length > 0
      ? (
        <div>
          {options.map((value, index) => (
            <Option
              key={value}
              value={value}
              index={index}
              handleDeleteOption={handleDeleteOption}
            />
          ))}
        </div>
      )
      : <p className="widget-body-message">Please add an item to get started</p>}
  </div>
);

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Options;
