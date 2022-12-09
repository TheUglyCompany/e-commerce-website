import React from 'react';
import styled from 'styled-components';
import { AddToOutfitCard, AddToOutfitText, PlusText, Carousel } from './RecommendedItems.style';
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
      <Carousel>
        <AddToOutfitCard>
          <PlusText>+</PlusText>
          <AddToOutfitText>Add to Outfit</AddToOutfitText>
        </AddToOutfitCard>
        {/* {renderList()} */}
      </Carousel>
    </div>
  );
}

export default YourOutfit;
