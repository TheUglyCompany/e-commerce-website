import React, {useState} from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalDesc,
  ImageInputUpload,
  TextFieldinput,
  NameFieldInput,
  EmailFieldInput,
} from '../qAndA/QandA.style';
import { Button } from '../overview/Overview.style';

function Modal({ setShowModal, productId }) {
  console.log(productId);
  const [form, setForm] = useState({
    textInput: '',
    nameInput: '',
    emailInput: '',
    imageInput: '',
    summaryInput: '',
  });
  // onSubmit axios post function
  // on file upload handle file upload

  function handleSubmit() {
    console.log(`
    body: ${form.textInput},
    summary: ${form.summaryInput},
    name: ${form.nameInput},
    email: ${form.emailInput},
    product_id: ${productId},
    `);
  }

  return (
    <ModalContainer>
      <ModalContent>
        <span onClick={() => setShowModal(false)}>
          X
        </span>
        <ModalTitle>Add a review!</ModalTitle>
        <label>
          Enter your name
          {' '}
          <NameFieldInput
            value={form.nameInput}
            type="text"
            maxLength="60"
            required="true"
            placeholder="Example: jackson11!"
            onChange={(e) => {
              setForm({
                ...form,
                nameInput: e.target.value,
              });
            }}
          />
          <ModalDesc>
            For privacy reasons, don&apos;t use your fullname or email
          </ModalDesc>
        </label>
        <label>
          Email:
          {' '}
          <EmailFieldInput
            value={form.emailInput}
            maxLength="60"
            required="true"
            placeholder="Example: jackson11@email.com"
            onChange={(event) => {
              setForm({
                ...form,
                emailInput: event.target.value,
              });
            }}
          />
          <ModalDesc>
            For authentication reasons, you will not be emailed
          </ModalDesc>
        </label>
        <label>
          Summary:
          {' '}
          <EmailFieldInput
            value={form.nameInput}
            maxLength="60"
            placeholder="Example: Best purchase ever!"
            onChange={(event) => {
              setForm({
                ...form,
                nameInput: event.target.value,
              });
            }}
          />
        </label>
        <label>
          Write a review:
          {' '}
          <TextFieldinput
            value={form.textInput}
            maxLength="1000"
            required="true"
            placeholder="Why did you like the product or not?"
            onChange={(event) => {
              setForm({
                ...form,
                textInput: event.target.value,
              });
            }}
          />
          <ModalDesc>
            {
            'Minimum required characters left: '
            }
            {
              50 - (form.textInput.length) <= 0 ? '0' : 50 - (form.textInput.length)
            }
          </ModalDesc>
        </label>
        <Button
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
