import React from 'react';
import { Carousel, CarouselContainer } from './Styles/RecommendedItems.styles';

function YourOutfit({ renderListFromIds }) {
  return (
    <CarouselContainer>
      <Carousel>
        {renderListFromIds('outfit')}
      </Carousel>
    </CarouselContainer>
  );
}

export default YourOutfit;
