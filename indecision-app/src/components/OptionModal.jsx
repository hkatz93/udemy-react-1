import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({ selectedOption, handleDeleteOption }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleDeleteOption}
    contentLabel="Selected Option"
  >
    <h1>Selected Option</h1>
    <p>{selectedOption && selectedOption}</p>
    <button type="button" onClick={handleDeleteOption}>Okay</button>
  </Modal>
);

OptionModal.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default OptionModal;
