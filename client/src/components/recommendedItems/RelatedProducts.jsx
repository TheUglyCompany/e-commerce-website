import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContainer } from './Styles/RecommendedItems.styles';
import NavigationButtons from './NavigationButtons';

function RelatedProducts({ renderListFromIds }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (document.getElementById('related-carousel')) {
      setReady(true);
    }
  }, []);

  return (
    <CarouselContainer>
      <Carousel id="related-carousel">
        {renderListFromIds('related')}
      </Carousel>
      { !ready ? null : <NavigationButtons carouselId="related-carousel" />}
    </CarouselContainer>
  );
}

export default RelatedProducts;
