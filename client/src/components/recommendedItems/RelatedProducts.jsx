import React from 'react';
import { Carousel, CarouselContainer } from './Styles/RecommendedItems.styles';

function RelatedProducts({ renderButtons, renderListFromIds }) {
  return (
    <CarouselContainer>
      <Carousel id="related-carousel">
        {renderListFromIds('related')}
      </Carousel>
      {renderButtons('related')}
    </CarouselContainer>
  );
}

export default RelatedProducts;
