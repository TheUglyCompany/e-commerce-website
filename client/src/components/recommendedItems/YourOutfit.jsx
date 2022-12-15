import React from 'react';
import { QATitle } from '../qAndA/QandA.style';
import { AddToOutfitCard, Carousel, CarouselContainer } from './Styles/RecommendedItems.styles';

function YourOutfit({ renderButtons, renderListFromIds, addToOutfits, dark }) {
  return (
    <CarouselContainer>
      <QATitle>Your Outfit</QATitle>
      <Carousel id="outfit-carousel">
        <AddToOutfitCard id="outfit-Card-0" onClick={addToOutfits} dark={dark}>
          <div className="plus-container">
            <h2 className="plus">
              +
            </h2>
          </div>
          <p>Add To Your Outfit</p>
        </AddToOutfitCard>
        {renderListFromIds('outfit')}
      </Carousel>
      {renderButtons('outfit')}
    </CarouselContainer>
  );
}

export default YourOutfit;
