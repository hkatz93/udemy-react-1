import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleDeleteOption}
    contentLabel='Selected Option'
  >
  <h1>Selected Option</h1>
  <p>{props.selectedOption && props.selectedOption}</p>
  <button onClick={props.handleDeleteOption}>Okay</button>
  </Modal>
);

export default OptionModal;