import React, {useState} from 'react';
import {
  ModalContainer,
  ModalContent,
} from '../qAndA/QandA.style';

function Modal({ setShowModal }) {
  const [form, setForm] = useState({
    textInput: '',
    nameInput: '',
    emailInput: '',
    imageInput: '',
  });

  return (
    <ModalContainer>
      <ModalContent>
        <span onClick={() => setShowModal(false)}>
          X
        </span>
        <h1>Add a review!</h1>
        <label>

        </label>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
