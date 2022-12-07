import React, { useState } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import {
  ModalContainer, ModalContent,
} from './QandA.style';

function Modal({
  setShowModal, productId, productName, location, questionId, questionBody,
}) {
  const [form, setForm] = useState({
    textInput: '',
    nameInput: '',
    emailInput: '',
    imageInput: '',
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
        photos: form.imageInput,
      },
      { headers: { Authorization: API_KEY } },
    )
      .then((response) => {
        console.log('This is the response in Answer Modal: ', response);
      })
      .catch((error) => {
        console.log('There is an error in Answer Modal: ', error);
      });
    setShowModal(false);
  }

  function handleFileEvent(event) {
    const chosenFiles = Array.from(event.target.files);
    const fileArray = [];
    chosenFiles.forEach((file) => {
      fileArray.push(file.name);
    });
    setForm({
      ...form,
      imageInput: fileArray,
    });
  }

  if (location === 'question') {
    return (
      <ModalContainer>
        <ModalContent>
          <span
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </span>
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
              required="true"
              onChange={(event) => {
                setForm({
                  ...form,
                  textInput: event.target.value,
                });
              }}
            />
          </label>
          <br />
          <label>
            <br />
            Name:
            <input
              value={form.nameInput}
              type="text"
              maxLength="60"
              required="true"
              placeholder="Example: jack543!"
              onChange={(event) => {
                setForm({
                  ...form,
                  nameInput: event.target.value,
                });
              }}
            />
            <br />
            For privacy reasons, don&apos;t use your full name or email
            <br />
          </label>
          <label>
            Email:
            <input
              value={form.emailInput}
              type="text"
              maxLength="60"
              required="true"
              placeholder="Example: jack@email.com"
              onChange={(event) => {
                setForm({
                  ...form,
                  emailInput: event.target.value,
                });
              }}
            />
            <br />
            For authentication reasons, you will not be emailed
            <br />
          </label>
          <button
            type="submit"
            onClick={handleQuestionSubmit}
          >
            Submit
          </button>
        </ModalContent>
      </ModalContainer>
    );
  }
  return (
    <ModalContainer>
      <ModalContent>
        <span
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </span>
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
            required="true"
            onChange={(event) => {
              setForm({
                ...form,
                textInput: event.target.value,
              });
            }}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            value={form.nameInput}
            type="text"
            maxLength="60"
            placeholder="Example: jackson11!"
            required="true"
            onChange={(event) => {
              setForm({
                ...form,
                nameInput: event.target.value,
              });
            }}
          />
          <br />
          For privacy reasons, don&apos;t use your full name or email
        </label>
        <br />
        <label>
          Email:
          <input
            value={form.emailInput}
            type="text"
            maxLength="60"
            placeholder="Why did you like the product or not?"
            required="true"
            onChange={(event) => {
              setForm({
                ...form,
                emailInput: event.target.value,
              });
            }}
          />
          <br />
          For authentication reasons, you will not be emailed
          <br />
        </label>
        <label>
          Image Upload:
          <input
            type="file"
            required="false"
            multiple
            onChange={handleFileEvent}
          />
        </label>
        <button
          type="submit"
          onClick={handleAnswerSubmit}
        >
          Submit
        </button>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
