import React from 'react';
import Card from './Card';
import { Carousel } from './RecommendedItems.style';

function RelatedProducts({ relatedProducts, cardClicked }) {
  const renderList = () => relatedProducts.map((productId) => (
    <Card key={productId} productId={productId} cardClicked={cardClicked} />
  ));

  return (
    <div>
      <h3>Related Products</h3>
      <Carousel>
        {renderList()}
      </Carousel>
    </div>
  );
}

export default RelatedProducts;
