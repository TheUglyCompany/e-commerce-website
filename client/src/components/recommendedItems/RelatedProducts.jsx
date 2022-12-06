import React from 'react';
import Card from './Card';

function RelatedProducts({ relatedProducts, setProduct }) {
  const renderList = () => relatedProducts.map((productId) => (
    <Card key={productId} productId={productId} setProduct={setProduct} />
  ));

  return (
    <div>
      Related Products
      {renderList()}
    </div>
  );
}

export default RelatedProducts;
