import React, { useState, useRef } from 'react';
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
  StandardButtonSpan,
  ImageInputUpload,
  ErrorMessage,
  UploadButton,
  AnswerImageStyle,
  ModalWrap,
  SubmitButton,
  ImgUploadSpan,
} from './QandA.style';

function Modal({
  setShowModal,
  productId,
  productName,
  location,
  questionId,
  questionBody,
  dark,
  setCurrQuestionList,
  setQuestionList,
  getAnswers,
}) {
  const [textFieldError, settextFieldError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [form, setForm] = useState({
    textInput: '',
    nameInput: '',
    emailInput: '',
    imageInput: [],
  });
  const hiddenFileInput = useRef(null);

  function handleQuestionSubmit() {
    settextFieldError(false);
    setNameError(false);
    setEmailError(false);
    if (form.textInput?.length === 0 || form.textInput === ' ') {
      settextFieldError(true);
    } else if (form.nameInput?.length === 0 || form.nameInput === ' ') {
      setNameError(true);
    } else if (!form.emailInput.includes('@') || !form.emailInput.includes('.com')) {
      setEmailError(true);
    } else {
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
        .then(() => {
          axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
            headers: { Authorization: API_KEY },
            params: {
              product_id: productId,
              count: 200,
            },
          })
            .then((response) => {
              setQuestionList(response.data.results);
              setCurrQuestionList(response.data.results);
            })
            .catch((error) => {
              console.log('There is an error in QuestionsList: ', error);
            });
        })
        .catch((error) => {
          console.log('There is an error in Question Modal: ', error);
        });
      setShowModal(false);
    }
  }

  function handleAnswerSubmit() {
    settextFieldError(false);
    setNameError(false);
    setEmailError(false);
    if (form.textInput?.length === 0 || form.textInput === ' ') {
      settextFieldError(true);
    } else if (form.nameInput?.length === 0 || form.nameInput === ' ') {
      setNameError(true);
    } else if (!form.emailInput.includes('@') || !form.emailInput.includes('.com')) {
      setEmailError(true);
    } else {
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
        .then(() => {
          getAnswers();
        })
        .catch((error) => {
          console.log('There is an error in Answer Modal: ', error);
        });
      setShowModal(false);
    }
  }

  function handleFileEvent(event) {
    const chosenFiles = event.target.files;
    const fileArray = [];
    for (let i = 0; i < chosenFiles.length; i += 1) {
      console.log(chosenFiles[i]);
      fileArray.push(URL.createObjectURL(chosenFiles[i]));
    }
    console.log('Outside of Forloop: ', chosenFiles);
    setForm({
      ...form,
      imageInput: fileArray,
    });
  }

  function handleClick() {
    hiddenFileInput.current.click();
  }

  return (
    <ModalContainer>
      <ModalWrap>
        <ModalContent dark={dark}>
          <XSpan
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </XSpan>
          {location === 'question'
            ? (
              <div>
                <ModalTitle>Ask Your Question</ModalTitle>
                <ModalDesc>
                  About the
                  {' '}
                  {productName}
                </ModalDesc>
              </div>
            )
            : (
              <div>
                <ModalTitle>Submit Your Answer</ModalTitle>
                <ModalDesc>
                  {productName}
                  {' '}
                  :
                  {' '}
                  {questionBody}
                </ModalDesc>
              </div>
            )}
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
            {textFieldError ? <ErrorMessage>Please input a valid question</ErrorMessage> : null}
          </label>
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
            {nameError ? <ErrorMessage>Please input a valid name</ErrorMessage> : null}
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
            {emailError ? <ErrorMessage>Please input a valid email</ErrorMessage> : null}
            <ModalDesc>
              For authentication reasons, you will not be emailed
            </ModalDesc>
            <br />
          </label>
          {location === 'answer'
            ? (
              <label>
                <ImgUploadSpan>
                  Image Upload:
                  &nbsp;
                  <ImageInputUpload
                    type="file"
                    required="false"
                    multiple
                    style={{ display: 'none' }}
                    ref={hiddenFileInput}
                    onChange={handleFileEvent}
                  />
                  {form.imageInput?.length < 5
                    ? (
                      <UploadButton
                        onClick={() => { handleClick(); }}
                        dark={dark}
                      >
                        Upload

                      </UploadButton>
                    ) : null}
                </ImgUploadSpan>
                {form.imageInput?.map((image) => (
                  <AnswerImageStyle src={image} dark={dark} />
                ))}
              </label>
            ) : null}
          <StandardButtonSpan>
            <br />
            {location === 'question'
              ? (
                <SubmitButton
                  type="submit"
                  onClick={() => handleQuestionSubmit()}
                  dark={dark}
                >
                  Submit
                </SubmitButton>
              )
              : (
                <SubmitButton
                  type="submit"
                  onClick={() => handleAnswerSubmit()}
                  dark={dark}
                >
                  Submit
                </SubmitButton>
              )}
          </StandardButtonSpan>
        </ModalContent>
      </ModalWrap>
    </ModalContainer>
  );
}
// return (
//   <ModalContainer>
//     <ModalContent>
//       <XSpan
//         onClick={() => {
//           setShowModal(false);
//         }}
//       >
//         X
//       </XSpan>
//       <br />
//       <ModalTitle>Submit Your Answer</ModalTitle>
//       <ModalDesc>
//         {productName}
//         {' '}
//         :
//         {' '}
//         {questionBody}
//       </ModalDesc>
//       <br />
//       <label>
//         Answer:
//         &nbsp;
//         <TextFieldinput
//           value={form.textInput}
//           type="text"
//           maxLength="1000"
//           required="true"
//           onChange={(event) => {
//             setForm({
//               ...form,
//               textInput: event.target.value,
//             });
//           }}
//         />
//         {textFieldError ? <ErrorMessage>Please input a valid answer</ErrorMessage> : null}
//       </label>
//       <br />
//       <br />
//       <label>
//         Name:
//         &nbsp;
//         <NameFieldInput
//           value={form.nameInput}
//           type="text"
//           maxLength="60"
//           placeholder="Example: jackson11!"
//           required="true"
//           onChange={(event) => {
//             setForm({
//               ...form,
//               nameInput: event.target.value,
//             });
//           }}
//         />
//         {nameError ? <ErrorMessage>Please input a valid name</ErrorMessage> : null}
//         <ModalDesc>
//           For privacy reasons, don&apos;t use your full name or email
//         </ModalDesc>
//       </label>
//       <br />
//       <label>
//         Email:
//         &nbsp;
//         <EmailFieldInput
//           value={form.emailInput}
//           type="text"
//           maxLength="60"
//           placeholder="Why did you like the product or not?"
//           required="true"
//           onChange={(event) => {
//             setForm({
//               ...form,
//               emailInput: event.target.value,
//             });
//           }}
//         />
//         {emailError ? <ErrorMessage>Please input a valid email</ErrorMessage> : null}
//         <ModalDesc>
//           For authentication reasons, you will not be emailed
//         </ModalDesc>
//         <br />
//       </label>
// <label>
//   Image Upload:
//   &nbsp;
//   <ImageInputUpload
//     type="file"
//     required="false"
//     multiple
//     onChange={handleFileEvent}
//   />
// </label>
//       <StandardButtonSpan>
//         <StandardButton
//           type="submit"
//           onClick={handleAnswerSubmit}
//         >
//           Submit
//         </StandardButton>
//       </StandardButtonSpan>
//     </ModalContent>
//   </ModalContainer>
// );

export default Modal;
