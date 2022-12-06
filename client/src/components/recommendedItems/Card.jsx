/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardImage from './CardImage';
import API_KEY from '../../../config';

function Card({ productId, cardClicked }) {
  const [cardProduct, setCardProduct] = useState(null);
  const [stylesObj, setStylesObj] = useState(null);
  const [ratingObj, setRatingObj] = useState(null);

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
    if (cardProduct !== null && ratingObj !== null && stylesObj !== null) {
      setReady(true);
    }
  }, [cardProduct, ratingObj, stylesObj]);

  return !ready ? <>Card Loading</> : (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={() => cardClicked(productId)}>
      <CardImage stylesObj={stylesObj} />
      <p>{cardProduct.category}</p>
      <p>{cardProduct.name}</p>
      <p>{cardProduct.default_price}</p>
      <p>
        {Math.floor(ratingObj.averageRating * 10) / 10}
        {' '}
        stars out of
        {' '}
        {ratingObj.reviewCount}
        {' '}
        reviews
      </p>
    </div>
  );
}

export default Card;
