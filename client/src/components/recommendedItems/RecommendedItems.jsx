/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts';
import YourOutfit from './YourOutfit';
import API_KEY from '../../../config';
import { CarouselContainer } from './RecommendedItems.style';

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
    <div>
      <CarouselContainer>
        <RelatedProducts relatedProducts={relatedProducts} cardClicked={cardClicked} pageProduct={product} />
        <YourOutfit pageProductId={product.id} cardClicked={cardClicked} />
      </CarouselContainer>
    </div>
  );
}

export default RecommendedItems;
