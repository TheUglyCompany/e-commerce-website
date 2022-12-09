/* eslint-disable max-len */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardImage from './CardImage';
import API_KEY from '../../../config';

const StyledCard = styled.div`
  /* display: inline-block; */
  /* height: 400px;
  width: 25%; */
  border: solid;
  border-color: #575656;
  border-radius: 5px;
`;

const Stars = styled.div`
  display: inline-block;
  font-size: 20px;
  font-family: Times;
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 2px;
    background: linear-gradient(90deg, #d8d805 var(--rating), gray var(--rating));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function Card({ productId, cardClicked }) {
  const [cardProduct, setCardProduct] = useState(null);
  const [stylesObj, setStylesObj] = useState(null);
  const [ratingObj, setRatingObj] = useState(null);
  const [rating, setRating] = useState('0%');
  const [total, setTotal] = useState(null);

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
      const {
        1: one, 2: two, 3: three, 4: four, 5: five,
      } = ratingObj.ratings;
      const ratingTotal = parseInt(one) + parseInt(two) * 2 + parseInt(three) * 3 + parseInt(four) * 4 + parseInt(five) * 5;
      const ratingCount = parseInt(one) + parseInt(two) + parseInt(three) + parseInt(four) + parseInt(five);
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
