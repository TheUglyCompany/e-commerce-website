import React, { useState } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';

function Modal({
  setShowModal, productId, productName, location, questionId, questionBody,
}) {
  const [form, setForm] = useState({
    textInput: '',
    nameInput: '',
    emailInput: '',
  });

  function handleQuestionSubmit() {
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
        console.log('This is the response in Question Modal: ', response);
      })
      .catch((error) => {
        console.log('There is an error in Question Modal: ', error);
      });
    setShowModal(false);
  }

  function handleAnswerSubmit() {
    axios.post(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/answers`,
      {
        body: form.textInput,
        name: form.nameInput,
        email: form.emailInput,
      },
      { headers: { Authorization: API_KEY } },
    )
      .then((response) => {
        console.log('This is the response in Answer Modal: ', response);
      })
      .catch((error) => {
        console.log('There is an error in Answer Modal: ', error);
      });
  }

  if (location === 'question') {
    return (
      <div id="Modal">
        <h1>Ask Your Question</h1>
        <h3>
          About the
          {' '}
          {productName}
        </h3>
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
          onClick={handleQuestionSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
  return (
    <div id="Modal">
      <h1>Submit Your Answer</h1>
      <h3>
        {productName}
        {' '}
        :
        {' '}
        {questionBody}
      </h3>
      <label>
        What&apos;s your Answer?
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
          placeholder="Example: jackson11!"
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
          placeholder="Why did you like the product or not?"
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
        onClick={handleAnswerSubmit}
      >
        Submit

      </button>
    </div>
  );
}

export default Modal;
