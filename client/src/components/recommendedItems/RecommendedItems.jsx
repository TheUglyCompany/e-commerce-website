import React from 'react';
import RelatedProducts from './RelatedProducts';
import YourOutfit from './YourOutfit';

function RecommendedItems({ product, setProduct }) {
  return (
    <div>
      <RelatedProducts />
      <YourOutfit />
    </div>
  );
}

export default RecommendedItems;
