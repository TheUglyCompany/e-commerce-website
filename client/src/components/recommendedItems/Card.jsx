/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';

function Card({ setProduct, productId }) {
  const [cardProduct, setCardProduct] = useState(null);
  const [ratingObj, setRatingObj] = useState({ averageRating: 0, reviewCount: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`, { headers: { Authorization: API_KEY } })
      .then((response) => setCardProduct(response.data))
      .catch((err) => console.log('error in fetching product for card'))
      .then(() => axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', { headers: { Authorization: API_KEY }, params: { product_id: productId } }))
      .then((response) => {
        const { ratings } = response.data;
        const ratingSum = parseInt(ratings['1']) + parseInt(ratings['2']) * 2 + parseInt(ratings['3']) * 3 + parseInt(ratings['4']) * 4 + parseInt(ratings['5']) * 5;
        const reviewCount = parseInt(ratings['1']) + parseInt(ratings['2']) + parseInt(ratings['3']) + parseInt(ratings['4']) + parseInt(ratings['5']);
        const averageRating = ratingSum / reviewCount;

        setRatingObj({ averageRating, reviewCount });
      });
  }, []);
  useEffect(() => {
    if (cardProduct !== null) {
      setReady(true);
    }
  }, [cardProduct]);

  return !ready ? <>Card Loading</> : (
    <div>
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
