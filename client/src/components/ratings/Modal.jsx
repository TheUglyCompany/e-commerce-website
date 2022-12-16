import React, { useState } from 'react';
import {
  ModalContainer,
  ModalTitle,
  ModalDesc,
  ErrorMessage,
  WarningMsg,
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
  RadioButtons,
  RadioButtonLabels,
} from './Styles/Ratings.style';

function Modal({
  setShowModal, product, characteristics, dark,
}) {
  const [starSelection, setStarSelection] = useState(0);
  const [form, setForm] = useState({
    name: '', // name : text
    body: '', // body: text
    email: '', // email: text
    photos: [], // photos: array of text urls
    summary: '', // summary: text
    product_id: product.id,
    characteristics: {}, // characteristics: object of keys rep char_id and values rep the review value 1-5
    recommend: null, // recommend: bool
    rating: 0, // rating: int 1-5
  });
  const [errorCheck, setErrorCheck] = useState({
    checked: false,
    rating: true,
    recommend: true,
    characteristics: {},
    name: true,
    email: true,
    reviewBody: true,
  });
  const fitEntries = Object.entries(characteristics);
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
    if (form.rating !== 0) {
      errorCheck.rating = false;
    }
    if (form.recommend !== null) {
      errorCheck.recommend = false;
    }

    if (form.name.length !== 0) {
      errorCheck.name = false;
    }
    if (form.emailInput?.includes('@') && form.emailInput?.includes('.com')) {
      errorCheck.email = false;
    }
    if (form.body.length >= 50) {
      errorCheck.body = false;
    }
    fitEntries.map((entry) => {
      console.log('form charact', form.characteristics[entry[1].id]);
      console.log('form entries', entry[0]);
      if (form.characteristics[entry[1].id]) {
        errorCheck.characteristics[entry[0]] = false;
        console.log('it was entered', errorCheck.characteristics[entry[0]]);
      }
      return null;
    });
    setErrorCheck({
      ...errorCheck,
      checked: true,
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
    errors: ${JSON.stringify(errorCheck)},
    `);
  }

  console.log('This is the whole charateristic', errorCheck.characteristics.Quality);

  return (
    <ModalContainer>
      <RRModalContent dark={dark}>
        <RRXSpan
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </RRXSpan>
        <ModalTitle>Write your review</ModalTitle>
        <ModalDesc>
          About the
          {' '}
          {product.name}
        </ModalDesc>
        <ModalRating>
          Rate it!
          <div onChange={(event) => {
            setStarSelection(event.target.id);
            setForm({
              ...form,
              rating: Number(event.target.id),
            });
          }}
          >
            <RadioButtonLabels isClicked={starSelection >= 1}>
              ★
              <RadioButtons type="radio" id="1" name="rating" />
            </RadioButtonLabels>
            <RadioButtonLabels isClicked={starSelection >= 2}>
              ★
              <RadioButtons type="radio" id="2" name="rating" />
            </RadioButtonLabels>
            <RadioButtonLabels isClicked={starSelection >= 3}>
              ★
              <RadioButtons type="radio" id="3" name="rating" />
            </RadioButtonLabels>
            <RadioButtonLabels isClicked={starSelection >= 4}>
              ★
              <RadioButtons type="radio" id="4" name="rating" />
            </RadioButtonLabels>
            <RadioButtonLabels isClicked={starSelection >= 5}>
              ★
              <RadioButtons type="radio" id="5" name="rating" />
            </RadioButtonLabels>
          </div>
          {errorCheck.checked && errorCheck.rating
            ? (
              <ErrorMessage dark={dark}>
                <p>You must rate the product</p>
              </ErrorMessage>
            ) : null}
        </ModalRating>
        <ModalRating>
          Do you recommend this product?
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
          {errorCheck.checked && errorCheck.recommend
            ? (
              <ErrorMessage dark={dark}>
                <p>Do you recommend this product?</p>
              </ErrorMessage>
            ) : null}
        </ModalRating>
        <ModalLine>
          Characteristics:
        </ModalLine>
        {
          fitEntries.map((attribute, i) => {
            if (errorCheck.characteristics[attribute[0]] === undefined) {
              errorCheck.characteristics[attribute[0]] = true;
            }
            return (
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
                {errorCheck.checked && errorCheck.characteristics[attribute[0]]
                  ? (
                    <ErrorMessage dark={dark}>
                      <p>
                        You must rate the
                        {' '}
                        {attribute[0]}
                      </p>
                    </ErrorMessage>
                  ) : null}
              </ModalGroup>

            );
          })
        }
        <ModalGroup>
          <ModalLine>
            <ModalLabelText>
              Enter your name:
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
          <WarningMsg style={{ marginLeft: '50%' }}>
            For privacy reasons, don&apos;t use your fullname or email
          </WarningMsg>
          {errorCheck.checked && errorCheck.name
            ? (
              <ErrorMessage dark={dark}>
                <p>You must enter a name</p>
              </ErrorMessage>
            ) : null}
        </ModalGroup>
        <ModalGroup>
          <ModalLine>
            <ModalLabelText>
              Email:
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
          <WarningMsg style={{ marginLeft: '50%' }}>
            For authentication reasons, you will not be emailed
          </WarningMsg>
          {errorCheck.checked && errorCheck.email
            ? (
              <ErrorMessage dark={dark}>
                <p>You must enter a valid email address</p>
              </ErrorMessage>
            ) : null}
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
          <WarningMsg style={{ marginLeft: '50%' }}>
            {
            'Minimum required characters left: '
            }
            {
              50 - (form.body.length) <= 0 ? '0' : 50 - (form.body.length)
            }
          </WarningMsg>
        </ModalGroup>
        {errorCheck.checked && errorCheck.reviewBody ? (
          <ErrorMessage dark={dark}>
            <p>The body must be at least 50 characters</p>
          </ErrorMessage>
        ) : null}
        <div>
          <Button
            dark={dark}
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Cancel
          </Button>
          <Button
            dark={dark}
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </div>
      </RRModalContent>

    </ModalContainer>
  );
}

export default Modal;
