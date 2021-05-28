import PropTypes from 'prop-types';
import React from 'react';

const Action = ({ hasOption, handleWhatShouldIDo }) => (
  <div>
    <button
      type="button"
      className="big-button"
      onClick={handleWhatShouldIDo}
      disabled={!hasOption}
    >
      What should I do?
    </button>
  </div>
);

Action.propTypes = {
  hasOption: PropTypes.bool.isRequired,
  handleWhatShouldIDo: PropTypes.func.isRequired,
};

export default Action;
