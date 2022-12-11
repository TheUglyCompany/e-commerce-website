/* eslint-disable max-len */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardImage from './CardImage';
import API_KEY from '../../../config';
import { StyledCard, Stars } from './RecommendedItems.style';

function Card({ productId, cardClicked }) {
  const [cardProduct, setCardProduct] = useState(null);
  const [stylesObj, setStylesObj] = useState(null);
  const [ratingObj, setRatingObj] = useState(null);
  const [rating, setRating] = useState('0%');
  const [total, setTotal] = useState(0);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`, { headers: { Authorization: API_KEY } }),
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`, { headers: { Authorization: API_KEY } }),
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', { headers: { Authorization: API_KEY }, params: { product_id: productId } })])
      .then((response) => {
        setCardProduct(response[0].data);
        setStylesObj(response[1].data);
        setRatingObj(response[2].data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (ratingObj !== null) {
      let ratingCount = 0;
      let ratingTotal = 0;
      const numbers = Object.keys(ratingObj.ratings);
      // eslint-disable-next-line no-restricted-syntax
      for (const number of numbers) {
        ratingCount += parseInt(ratingObj.ratings[number]);
        ratingTotal += parseInt(ratingObj.ratings[number]) * number;
      }
      setRating(`${(ratingTotal / ratingCount) * 20}%`);
      setTotal(ratingTotal);
    }
  }, [ratingObj]);

  useEffect(() => {
    if (cardProduct !== null && ratingObj !== null && stylesObj !== null) {
      setReady(true);
    }
  }, [cardProduct, ratingObj, stylesObj]);

  return !ready ? <>Card Loading</> : (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <StyledCard onClick={() => cardClicked(productId)}>
      <CardImage stylesObj={stylesObj} />
      <p>{cardProduct.category}</p>
      <p>{cardProduct.name}</p>
      <p>{cardProduct.default_price}</p>
      <span>
        <Stars style={{ '--rating': rating }} />
        out of
        {' '}
        {total}
        {' '}
        reviews
      </span>
    </StyledCard>
  );
}

export default Card;
