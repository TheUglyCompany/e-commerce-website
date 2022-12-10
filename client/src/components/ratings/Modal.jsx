import React, { useState } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
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

function Modal({ setShowModal, productId, characteristics }) {
  const [form, setForm] = useState({
    name: '', // name : text
    body: '', // body: text
    email: '', // email: text
    photos: [], // photos: array of text urls
    summary: '', // summary: text
    product_id: productId,
    characteristics: {}, // characteristics: object of keys rep char_id and values rep the review value 1-5
    recommend: false, // recommend: bool
    rating: 1, // rating: int 1-5
  });

  // onSubmit axios post function
  // on file upload handle file upload
  function handleSubmit() {
    axios.post(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
      form,
      { headers: { Authorization: API_KEY } },
    )
      .then((response) => {
        console.log('success posting, review ', response);
      })
      .catch((err) => {
        console.log('error posting, review ', err.message);
      });
    console.log(`
    body: ${form.body},
    summary: ${form.summary},
    name: ${form.nameInput},
    email: ${form.email},
    product_id: ${form.product_id},
    characteristics: ${JSON.stringify(form.characteristics)},
    recommend: ${form.recommend},
    rating: ${form.rating},
    photos: ${form.photos},
    `);
  }

  const fitEntries = Object.entries(characteristics);

  return (
    <ModalContainer>
      <ModalContent>
        <span onClick={() => setShowModal(false)}>
          X
        </span>
        <ModalTitle>Add a review!</ModalTitle>
        Rate it!
        <div onChange={(event) => {
          setForm({
            ...form,
            rating: Number(event.target.id),
          });
        }}
        >
          1
          <input type="radio" id="1" name="rating" />
          2
          <input type="radio" id="2" name="rating" />
          3
          <input type="radio" id="3" name="rating" />
          4
          <input type="radio" id="4" name="rating" />
          5
          <input type="radio" id="5" name="rating" />
        </div>
        recommend?
        <div onChange={(event) => {
          if (event.target.id === 'Yes') {
            setForm({
              ...form,
              recommend: true,
            });
          } else {
            setForm({
              ...form,
              recommend: false,
            });
          }
        }}
        >
          yes
          <input type="radio" id="Yes" name="recommend" />
          no
          <input type="radio" id="No" name="recommend" />

        </div>
        Characteristics
        {
          fitEntries.map((attribute, i) => (
            <div
              key={i}
              onChange={(event) => {
                const newFit = { ...form };
                newFit.characteristics[attribute[1].id] = Number(event.target.id);
                setForm(newFit);
              }}
            >
              {attribute[0]}
              {' : '}
              1
              <input type="radio" id="1" name={attribute[0]} />
              2
              <input type="radio" id="2" name={attribute[0]} />
              3
              <input type="radio" id="3" name={attribute[0]} />
              4
              <input type="radio" id="4" name={attribute[0]} />
              5
              <input type="radio" id="5" name={attribute[0]} />
            </div>
          ))
        }
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
            value={form.email}
            maxLength="60"
            required="true"
            placeholder="Example: jackson11@email.com"
            onChange={(event) => {
              setForm({
                ...form,
                email: event.target.value,
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
            value={form.summary}
            maxLength="60"
            placeholder="Example: Best purchase ever!"
            onChange={(event) => {
              setForm({
                ...form,
                summary: event.target.value,
              });
            }}
          />
        </label>
        <label>
          Write a review:
          {' '}
          <TextFieldinput
            value={form.body}
            maxLength="1000"
            required="true"
            placeholder="Why did you like the product or not?"
            onChange={(event) => {
              setForm({
                ...form,
                body: event.target.value,
              });
            }}
          />
          <ModalDesc>
            {
            'Minimum required characters left: '
            }
            {
              50 - (form.body.length) <= 0 ? '0' : 50 - (form.body.length)
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
