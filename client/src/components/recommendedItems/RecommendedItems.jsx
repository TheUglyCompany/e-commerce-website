/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedProducts from './RelatedProducts';
// import YourOutfit from './YourOutfit';
import API_KEY from '../../../config';

const CarouselContainer = styled.div`
  border: 2px solid black;
`;

function RecommendedItems({ product, cardClicked }) {
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [ready, setReady] = useState(false);

  const renderStars = (ratings) => {
    const { 1: one, 2: two, 3: three, 4: four, 5: five } = ratings;
    const ratingTotal = parseInt(one) + parseInt(two) * 2 + parseInt(three) * 3 + parseInt(four) * 4 + parseInt(five) * 5;
    const ratingCount = parseInt(one) + parseInt(two) + parseInt(three) + parseInt(four) + parseInt(five);
    let rating = ratingTotal / ratingCount;
    let stars = [];
    while (stars.length < 5) {
      if (rating > 1) {
        stars.push(1);
      } else if (rating > 0) {
        let empty = Math.abs(0 - rating);
        let quart = Math.abs(0.25 - rating);
        let half = Math.abs(0.5 - rating);
        let three = Math.abs(0.75 - rating);
        let full = Math.abs(1 - rating);
        let closest = Math.min(empty, quart, half, three, full);
        switch (closest) {
          case (empty):
              stars.push(0);
              break;
          case quart:
              stars.push(0.28);
              break;
          case half:
              stars.push(0.5);
              break;
          case three:
              stars.push(0.72);
              break;
          case full:
              stars.push(1.0);
              break;
          default:
              console.log("OOPS");
              stars.push(0);
              break;
        }
     } else {
        stars.push(0);
      }
      rating -= 1;
    }
    return (
      <div>
        This is a placeholder for stars
      </div>
    );
  };

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product.id}/related`, { headers: { Authorization: API_KEY } })
      .then((response) => setRelatedProducts([...new Set(response.data)]))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (relatedProducts !== null) {
      setReady(true);
    }
  }, [relatedProducts]);

  return !ready ? <>Recommended Items Lists are Loading</> : (
    <CarouselContainer>
      <RelatedProducts relatedProducts={relatedProducts} cardClicked={cardClicked} renderStars={renderStars} />
      {/* <YourOutfit setProduct={setProduct} cardClicked={cardClicked/> */}
    </CarouselContainer>
  );
}

export default RecommendedItems;
