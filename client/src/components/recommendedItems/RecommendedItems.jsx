import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts';
// import YourOutfit from './YourOutfit';
import API_KEY from '../../../config';

function RecommendedItems({ product, cardClicked }) {
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product.id}/related`, { headers: { Authorization: API_KEY } })
      .then((response) => setRelatedProducts(response.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (relatedProducts !== null) {
      setReady(true);
    }
  }, [relatedProducts]);

  return !ready ? <>Recommended Items Lists are Loading</> : (
    <div>
      <RelatedProducts relatedProducts={relatedProducts} cardClicked={cardClicked} />
      {/* <YourOutfit setProduct={setProduct} cardClicked={cardClicked/> */}
    </div>
  );
}

export default RecommendedItems;
