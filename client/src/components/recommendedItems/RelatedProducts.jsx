import React from 'react';
import { QATitle } from '../qAndA/QandA.style';
import { Carousel, CarouselContainer } from './Styles/RecommendedItems.styles';

function RelatedProducts({ renderButtons, renderListFromIds }) {
  return (
    <CarouselContainer>
      <QATitle>Related Products</QATitle>
      <Carousel id="related-carousel">
        {renderListFromIds('related')}
      </Carousel>
      {renderButtons('related')}
    </CarouselContainer>
  );
}

export default RelatedProducts;
