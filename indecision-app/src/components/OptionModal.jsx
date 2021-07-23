import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({ selectedOption, handleDeleteOption2 }) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={500}
  >
    <h1>Selected Option</h1>
    <p>{selectedOption && selectedOption}</p>
    <button type="button" onClick={handleDeleteOption2}>Okay</button>
  </Modal>
);

OptionModal.propTypes = {
  selectedOption: PropTypes.string,
  handleDeleteOption2: PropTypes.func.isRequired,
};

OptionModal.defaultProps = {
  selectedOption: undefined,
};

export default OptionModal;
