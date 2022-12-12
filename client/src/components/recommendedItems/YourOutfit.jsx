import React, { useState, useEffect } from 'react';
import ls from 'local-storage';
import Card from './Card';
import { AddToOutfitCard, AddToOutfitText, PlusText, Carousel, CarouselContainer, PreviousButton, NextButton } from './RecommendedItems.style';

// import Card from './Card';

function YourOutfit({ cardClicked, pageProductId }) {
  const [outfitList, setOutfitList] = useState(JSON.parse(ls('outfits')) || []);
  const [ready, setReady] = useState(false);

  const renderOutfits = () => outfitList.map((productId, index) => (
    <Card key={productId} id={`related-card-${index + 1}`} productId={productId} cardClicked={cardClicked} outfit />
  ));
  const addToOutfit = () => {
    let outfitListCopy = [...outfitList];
    if (!outfitList.includes(pageProductId)) {
      outfitListCopy.push(pageProductId);
      ls('outfits', JSON.stringify(outfitListCopy));
      setOutfitList([...outfitList].push(pageProductId));
      setReady(false);
    }
  };

  return !ready ? null : (
    <div>
      <h3>Your Outfit</h3>
      <CarouselContainer>
        <Carousel>
          <PreviousButton />
          <AddToOutfitCard onClick={addToOutfit}>
            <PlusText>+</PlusText>
            <AddToOutfitText>Add to Outfit</AddToOutfitText>
          </AddToOutfitCard>
          {renderOutfits()}
          <NextButton />
        </Carousel>
      </CarouselContainer>
    </div>
  );
}

export default YourOutfit;
