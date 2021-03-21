import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
  >
  <h1>Selected Option</h1>
  <p>{props.selectedOption && props.selectedOption}</p>
  </Modal>
);

export default OptionModal;