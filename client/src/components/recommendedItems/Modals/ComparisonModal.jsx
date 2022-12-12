/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../../config';
import { Stars } from '../RecommendedItems.style';
import { ModalContainer, ModalContent, ModelTitle, XSpan } from '../../qAndA/QandA.style';

function ComparisonModal({ cardProductId, pageProduct, setShowModal }) {
  const [cardProductWithRatings, setCardProductWithRatings] = useState(null);
  const [pageProductWithRatings, setPageProductWithRatings] = useState(null);
  const [ready, setReady] = useState(false);

  const getRating = (ratingsObj) => {
    let ratingCount = 0;
    let ratingTotal = 0;
    const numbers = Object.keys(ratingsObj);
    // eslint-disable-next-line no-restricted-syntax
    for (const number of numbers) {
      ratingCount += parseInt(ratingsObj[number]);
      ratingTotal += parseInt(ratingsObj[number]) * number;
    }
    return `${(ratingTotal / ratingCount) * 20}%`;
  };

  useEffect(() => {
    Promise.all([
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${cardProductId}`, { headers: { Authorization: API_KEY } }), // gets card product info
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', { headers: { Authorization: API_KEY }, params: { product_id: cardProductId } }), // get card product ratings info
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', { headers: { Authorization: API_KEY }, params: { product_id: pageProduct.id } })])
      .then((response) => {
        // eslint-disable-next-line max-len
        setCardProductWithRatings({ ...response[0].data, rating: getRating(response[1].data.ratings) });
        setPageProductWithRatings({ ...pageProduct, rating: getRating(response[2].data.ratings) });
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    setReady(cardProductWithRatings !== null && pageProductWithRatings !== null);
    if (cardProductWithRatings !== null && pageProductWithRatings !== null) {
      console.log(cardProductWithRatings);
      console.log(pageProductWithRatings);
    }
  }, [cardProductWithRatings, pageProductWithRatings]);

  // get info from card product and store into state

  return !ready ? null : (
    <ModalContainer>
      <ModalContent>
        <XSpan onClick={() => { setShowModal(false); }}> X </XSpan>
        <h2>This is the Comparison Modal</h2>

        <h3>Card Product</h3>
        <h3>Page Product</h3>
        <Stars style={{ '--rating': cardProductWithRatings.rating }} />
        <h4>Rating</h4>
        <Stars style={{ '--rating': pageProductWithRatings.rating }} />
        <p>{cardProductWithRatings.category}</p>
        <h4>Product Category</h4>
        <p>{pageProductWithRatings.category}</p>
        <p>{cardProductWithRatings.name}</p>
        <h4>Product Title</h4>
        <p>{pageProductWithRatings.name}</p>
        <p>{cardProductWithRatings.default_price}</p>
        <h4>Price</h4>
        <p>{pageProductWithRatings.default_price}</p>
      </ModalContent>
    </ModalContainer>
  );
}

export default ComparisonModal;
