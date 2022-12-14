import React from 'react';
import { AddToOutfitCard, Carousel, CarouselContainer } from './Styles/RecommendedItems.styles';

function YourOutfit({ renderButtons, renderListFromIds, addToOutfits, dark }) {
  return (
    <CarouselContainer>
      <Carousel id="outfit-carousel">
        <AddToOutfitCard id="outfit-Card-0" onClick={addToOutfits} dark={dark}>
          <h2 style={{
            textAlign: 'center',
            verticalAlign: 'bottom',
            fontSize: '6rem',
            fontWeight: '300',
          }}
          >
            +
          </h2>
          <p
            style={{
              fontFamily: 'ROBOTO',
              fontWeight: 600,
            }}
          >Add To Your Outfit</p>
        </AddToOutfitCard>
        {renderListFromIds('outfit')}
      </Carousel>
      {renderButtons('outfit')}
    </CarouselContainer>
  );
}

export default YourOutfit;