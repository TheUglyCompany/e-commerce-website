import React from 'react';
import {
  AddToOutfitCard, Carousel, CarouselContainer, NextCard, PreviousCard,
} from './Styles/RecommendedItems.styles';

function YourOutfit({ renderListFromIds, addToOutfits }) {
  return (
    <CarouselContainer>
      <Carousel>
        <AddToOutfitCard onClick={addToOutfits}>
          <h2>+</h2>
          <p>Add To Your Outfit</p>
        </AddToOutfitCard>
        {renderListFromIds('outfit')}
      </Carousel>
      <PreviousCard />
      <NextCard />
    </CarouselContainer>
  );
}

export default YourOutfit;
