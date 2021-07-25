import PropTypes from 'prop-types';
import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({ selectedOption, handleDeleteOption2 }) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h1 className="modal__title">Selected Option</h1>
    <p className="modal__body">{selectedOption && selectedOption}</p>
    <button
      type="button"
      onClick={handleDeleteOption2}
      className="button"
    >
      Okay
    </button>

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
