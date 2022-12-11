import React from 'react';
import { AddToOutfitCard, AddToOutfitText, PlusText, Carousel, CarouselContainer, PreviousButton, NextButton } from './RecommendedItems.style';

// import Card from './Card';

function YourOutfit({ cardClicked }) {
  // const renderList = () => {
  //   if ()
  //   relatedProducts.map((productId) => (
  //     <Card key={productId} productId={productId} cardClicked={cardClicked} />
  //   ));
  // }

  return (
    <div>
      <h3>Your Outfit</h3>
      <CarouselContainer>
        <Carousel>
          <PreviousButton />
          <AddToOutfitCard>
            <PlusText>+</PlusText>
            <AddToOutfitText>Add to Outfit</AddToOutfitText>
          </AddToOutfitCard>
          {/* {renderList()} */}
          <NextButton />
        </Carousel>
      </CarouselContainer>
    </div>
  );
}

export default YourOutfit;
