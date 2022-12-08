import React, { useState } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import {
  ModalContainer,
  ModalContent,
  XSpan,
  ModalTitle,
  ModalDesc,
  TextFieldinput,
  NameFieldInput,
  EmailFieldInput,
  StandardButton,
  StandardButtonSpan,
  ImageInputUpload,
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
          <XSpan
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </XSpan>
          <ModalTitle>Ask Your Question</ModalTitle>
          <ModalDesc>
            About the
            {' '}
            {productName}
          </ModalDesc>
          <br />
          <label>
            Question:
            &nbsp;
            <TextFieldinput
              value={form.textInput}
              type="body"
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
            &nbsp;
            <NameFieldInput
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
            &nbsp;
            <ModalDesc>
              For privacy reasons, don&apos;t use your full name or email
            </ModalDesc>
            <br />
          </label>
          <label>
            Email:
            &nbsp;
            <EmailFieldInput
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
            <br />
            <ModalDesc>
              For authentication reasons, you will not be emailed
            </ModalDesc>
            <br />
          </label>
          <StandardButtonSpan>
            <StandardButton
              type="submit"
              onClick={handleQuestionSubmit}
            >
              Submit
            </StandardButton>
          </StandardButtonSpan>
        </ModalContent>
      </ModalContainer>
    );
  }
  return (
    <ModalContainer>
      <ModalContent>
        <XSpan
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </XSpan>
        <br />
        <ModalTitle>Submit Your Answer</ModalTitle>
        <ModalDesc>
          {productName}
          {' '}
          :
          {' '}
          {questionBody}
        </ModalDesc>
        <br />
        <label>
          Answer:
          &nbsp;
          <TextFieldinput
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
        <br />
        <label>
          Name:
          &nbsp;
          <NameFieldInput
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
          <br />
          <ModalDesc>
            For privacy reasons, don&apos;t use your full name or email
          </ModalDesc>
        </label>
        <br />
        <label>
          Email:
          &nbsp;
          <EmailFieldInput
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
          <br />
          <ModalDesc>
            For authentication reasons, you will not be emailed
          </ModalDesc>
          <br />
        </label>
        <label>
          Image Upload:
          &nbsp;
          <ImageInputUpload
            type="file"
            required="false"
            multiple
            onChange={handleFileEvent}
          />
        </label>
        <StandardButtonSpan>
          <StandardButton
            type="submit"
            onClick={handleAnswerSubmit}
          >
            Submit
          </StandardButton>
        </StandardButtonSpan>
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
