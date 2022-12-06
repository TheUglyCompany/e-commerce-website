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
      <RelatedProducts relatedProducts={relatedProducts} cardClicked={cardClicked} />
      {/* <YourOutfit setProduct={setProduct} cardClicked={cardClicked/> */}
    </CarouselContainer>
  );
}

export default RecommendedItems;
