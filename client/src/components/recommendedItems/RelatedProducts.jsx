import React from 'react';
import { Carousel, CarouselContainer } from './Styles/RecommendedItems.styles';

function RelatedProducts({ renderListFromIds }) {
  return (
    <CarouselContainer>
      <Carousel>
        {renderListFromIds('related')}
      </Carousel>
    </CarouselContainer>
  );
}

export default RelatedProducts;
