import React from 'react';
import Card from './Card';
import { Carousel, PreviousButton, NextButton } from './RecommendedItems.style';

function RelatedProducts({ relatedProducts, cardClicked }) {
  const renderList = () => relatedProducts.map((productId, index) => (
    <Card key={productId} id={`related-card-${index}`} productId={productId} cardClicked={cardClicked} />
  ));

  return (
    <div>
      <h3>Related Products</h3>
      <Carousel>
        <PreviousButton />
        {renderList()}
        <NextButton />
      </Carousel>
    </div>
  );
}

export default RelatedProducts;
