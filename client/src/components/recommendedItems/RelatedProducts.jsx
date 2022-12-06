import React from 'react';
import Card from './Card';

function RelatedProducts({ relatedProducts, cardClicked }) {
  const renderList = () => relatedProducts.map((productId) => (
    <Card key={productId} productId={productId} cardClicked={cardClicked} />
  ));

  return (
    <div>
      Related Products
      {renderList()}
    </div>
  );
}

export default RelatedProducts;
