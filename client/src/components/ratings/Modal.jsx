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
import {
  RRModalContent,
  ModalData,
  ModalLabel,
  ModalLine,
  ModalGroup,
  SingleLineTextField,
  ModalLabelText,
  ModalDataText,
  MultiLineTextField,
  RRXSpan,
  CharGroup,
  ModalRating,
  ReqAst,
} from './Ratings.style';

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
  const charDescriptions = {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  };

  // onSubmit axios post function
  // on file upload handle file upload
  function handleSubmit() {
    // axios.post(
    //   'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
    //   form,
    //   { headers: { Authorization: API_KEY } },
    // )
    //   .then((response) => {
    //     console.log('success posting, review ', response);
    //   })
    //   .catch((err) => {
    //     console.log('error posting, review ', err.message);
    //   });
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
      <RRModalContent>
        <RRXSpan
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </RRXSpan>
        <ModalTitle>Add a review!</ModalTitle>
        <ModalRating>
          Rate it!
          <ReqAst>*</ReqAst>
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
        </ModalRating>
        <ModalRating>
          Do you recommend this product?
          <ReqAst>*</ReqAst>
        <div>
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
        </div>
        </ModalRating>
        <ModalLine>
          Characteristics:
          <ReqAst>*</ReqAst>
        </ModalLine>
        {
          fitEntries.map((attribute, i) => (
            <ModalGroup>
              <ModalLine
                key={i}
                onChange={(event) => {
                  const newFit = { ...form };
                  newFit.characteristics[attribute[1].id] = Number(event.target.id);
                  setForm(newFit);
                }}
              >
                <ModalLabel>
                  {attribute[0]}
                  {': '}
                </ModalLabel>
                <ModalData>
                  <CharGroup>
                    1
                    <input type="radio" id="1" name={attribute[0]} />
                    {charDescriptions[attribute[0]][0]}
                    {' '}
                  </CharGroup>
                  <CharGroup>
                    2
                    <input type="radio" id="2" name={attribute[0]} />
                    {charDescriptions[attribute[0]][1]}
                    {' '}
                  </CharGroup>
                  <CharGroup>
                    3
                    <input type="radio" id="3" name={attribute[0]} />
                    {charDescriptions[attribute[0]][2]}
                    {' '}
                  </CharGroup>
                  <CharGroup>
                    4
                    <input type="radio" id="4" name={attribute[0]} />
                    {charDescriptions[attribute[0]][3]}
                    {' '}
                  </CharGroup>
                  <CharGroup>
                    5
                    <input type="radio" id="5" name={attribute[0]} />
                    {charDescriptions[attribute[0]][4]}
                    {' '}
                  </CharGroup>
                </ModalData>
              </ModalLine>
            </ModalGroup>
          ))
        }
        <ModalGroup>
          <ModalLine>
            <ModalLabelText>
              Enter your name:
              <ReqAst>*</ReqAst>
            </ModalLabelText>
            <ModalDataText>
              <SingleLineTextField
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
            </ModalDataText>
          </ModalLine>
          <ModalDesc>
            For privacy reasons, don&apos;t use your fullname or email
          </ModalDesc>
        </ModalGroup>
        <ModalGroup>
          <ModalLine>
            <ModalLabelText>
              Email:
              <ReqAst>*</ReqAst>
            </ModalLabelText>
            <ModalDataText>
              <SingleLineTextField
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
            </ModalDataText>
          </ModalLine>
          <ModalDesc>
            For authentication reasons, you will not be emailed
          </ModalDesc>
        </ModalGroup>
        <ModalGroup>
          <ModalLine>
            <ModalLabelText>
              Summary:
              {' '}
            </ModalLabelText>
            <ModalDataText>
              <SingleLineTextField
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
            </ModalDataText>
          </ModalLine>
        </ModalGroup>
        <ModalGroup>
          Write a review:
          <ReqAst>*</ReqAst>
          {' '}
          <MultiLineTextField
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
        </ModalGroup>


        <Button
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </RRModalContent>
    </ModalContainer>
  );
}

export default Modal;
