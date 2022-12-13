import React, { useState, useEffect } from 'react';
import { AddToOutfitCard, Carousel, CarouselContainer } from './Styles/RecommendedItems.styles';
import NavigationButtons from './NavigationButtons';

function YourOutfit({ renderListFromIds, addToOutfits }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (document.getElementById('outfit-carousel')) {
      setReady(true);
    }
  }, []);

  return (
    <CarouselContainer>
      <Carousel id="outfit-carousel">
        <AddToOutfitCard onClick={addToOutfits}>
          <h2>+</h2>
          <p>Add To Your Outfit</p>
        </AddToOutfitCard>
        {renderListFromIds('outfit')}
      </Carousel>
      { !ready ? null : <NavigationButtons carouselId="outfit-carousel" />}
    </CarouselContainer>
  );
}

export default YourOutfit;