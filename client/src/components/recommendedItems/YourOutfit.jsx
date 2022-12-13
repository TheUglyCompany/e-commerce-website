import React from 'react';
import { AddToOutfitCard, Carousel, CarouselContainer } from './Styles/RecommendedItems.styles';

function YourOutfit({ renderButtons, renderListFromIds, addToOutfits }) {
  return (
    <CarouselContainer>
      <Carousel id="outfit-carousel">
        <AddToOutfitCard id="outfit-Card-0" onClick={addToOutfits}>
          <h2>+</h2>
          <p>Add To Your Outfit</p>
        </AddToOutfitCard>
        {renderListFromIds('outfit')}
      </Carousel>
      {renderButtons('outfit')}
    </CarouselContainer>
  );
}

export default YourOutfit;