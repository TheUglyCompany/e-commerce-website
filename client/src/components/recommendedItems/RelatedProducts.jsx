import React from 'react';
import Card from './Card';
import { CardGroup, Carousel, CarouselContainer, PreviousButton, NextButton } from './RecommendedItems.style';

function RelatedProducts({ relatedProducts, cardClicked }) {
  const renderList = () => {
    const groupedProducts = [];
    for (let i = 0; i < relatedProducts.length; i += 3) {
      groupedProducts.push(relatedProducts.slice(i, i + 3));
    }
    return groupedProducts.map((group, groupIndex) => (
      // eslint-disable-next-line react/no-array-index-key
      <CardGroup key={groupIndex} id={`related-card-group-${groupIndex + 1}`}>
        {group.map((productId, index) => (
          <Card key={productId} id={`related-card-${index + 1}`} productId={productId} cardClicked={cardClicked} />
        ))}
      </CardGroup>
    ));
  };

  return (
    <div>
      <h3>Related Products</h3>
      <CarouselContainer>
        <Carousel>
          {/* <PreviousButton /> */}
          {renderList()}
          {/* <NextButton href="#related-card-group-2" /> */}
        </Carousel>
      </CarouselContainer>
    </div>
  );
}

export default RelatedProducts;
