import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledRelatedProducts = styled.div`
  display: flex;
  margin: 40px 10px 40px 10px;
  border: 2px solid black;
`;

function RelatedProducts({ relatedProducts, cardClicked }) {
  const renderList = () => relatedProducts.map((productId) => (
    <Card key={productId} productId={productId} cardClicked={cardClicked} />
  ));

  return (
    <StyledRelatedProducts>
      Related Products
      {renderList()}
    </StyledRelatedProducts>
  );
}

export default RelatedProducts;
