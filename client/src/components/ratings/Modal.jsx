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
  // onSubmit axios post function
  // on file upload handle file upload

  /*
  Fields:
    Text:
    Selectable:
      The overall rating will be five selectable star icons, when you click on one all the ones before it will be filled in
  */

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
