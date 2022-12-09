import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Carousel = styled.div`
  display: flex;
  margin: 40px 10px 40px 10px;
  /* border: 2px solid black; */
`;

function RelatedProducts({ relatedProducts, cardClicked }) {
  const renderList = () => relatedProducts.map((productId) => (
    <Card key={productId} productId={productId} cardClicked={cardClicked} />
  ));

  return (
    <div>
      <h3>Related Products</h3>
      <Carousel>
        {renderList()}
      </Carousel>
    </div>
  );
}

export default RelatedProducts;
