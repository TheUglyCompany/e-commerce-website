import React from 'react';
import {
  Carousel, CarouselContainer, NextCard, PreviousCard,
} from './Styles/RecommendedItems.styles';

function RelatedProducts({ renderListFromIds }) {
  return (
    <CarouselContainer>
      <Carousel>
        {renderListFromIds('related')}
      </Carousel>
      <PreviousCard />
      <NextCard />
    </CarouselContainer>
  );
}

export default RelatedProducts;
