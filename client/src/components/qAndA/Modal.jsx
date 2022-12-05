import React, { useState } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';

function Modal({ setShowModal, productId }) {
  const [form, setForm] = useState({
    textInput: '',
    nameInput: '',
    emailInput: '',
  });

  function handleSubmit() {
    axios.post(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/',
      {
        body: form.textInput,
        name: form.nameInput,
        email: form.emailInput,
        product_id: productId,
      },
      { headers: { Authorization: API_KEY } },
    )
      .then((response) => {
        console.log('This is the response in Modal: ', response);
      })
      .catch((error) => {
        console.log('There is an error in Modal: ', error);
      });
    setShowModal(false);
  }
  return (
    <div id="Modal">
      <label>
        What&apos;s your Question?
        <input
          value={form.textInput}
          type="text"
          maxLength="1000"
          onChange={(event) => {
            setForm({
              ...form,
              textInput: event.target.value,
            });
          }}
        />
      </label>
      <label>
        Name:
        <input
          value={form.nameInput}
          type="text"
          maxLength="60"
          placeholder="Example: jack543!"
          onChange={(event) => {
            setForm({
              ...form,
              nameInput: event.target.value,
            });
          }}
        />
        For privacy reasons, don&apos;t use your full name or email
      </label>
      <label>
        Email:
        <input
          value={form.emailInput}
          type="text"
          maxLength="60"
          placeholder="Example: jack@email.com"
          onChange={(event) => {
            setForm({
              ...form,
              emailInput: event.target.value,
            });
          }}
        />
        For authentication reasons, you will not be emailed
      </label>
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Submit

      </button>
    </div>
  );
}

export default Modal;
