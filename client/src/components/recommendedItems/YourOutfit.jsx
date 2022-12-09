import React from 'react';
import styled from 'styled-components';
// import Card from './Card';

const Carousel = styled.div`
  display: flex;
  margin: 40px 10px 40px 10px;
  /* border: 2px solid black; */
`;
const AddToOutfitCard = styled.div`
  display: inline-block;
  margin: 2px 4px;
  padding: 10px;
  height: 400px;
  width: 25%;
  text-align: center;
  background: linear-gradient( #d3c9dd8f, #bcb0f19f 80%);
  border: 1px solid black;
  border-radius: 5px;
`;
const PlusText = styled.p`
  margin: 0;
  position: relative;
  top: 25%;
  font-size: 200px;
  color: gray;
`;
const AddToOutfit = styled.p`
position: relative;
font-size: 20px;
top: -40%
`;

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
          <AddToOutfit>Add to Outfit</AddToOutfit>
        </AddToOutfitCard>
        {/* {renderList()} */}
      </Carousel>
    </div>
  );
}

export default YourOutfit;
