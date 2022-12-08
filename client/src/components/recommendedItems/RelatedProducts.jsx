import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledRelatedProducts = styled.div`
  display: flex;
  margin: 40px 10px 40px 10px;
  border: 2px solid black;
`;

function RelatedProducts({ relatedProducts, cardClicked, renderStars }) {
  const renderList = () => relatedProducts.map((productId) => (
    // eslint-disable-next-line max-len
    <Card key={productId} productId={productId} cardClicked={cardClicked} renderStars={renderStars} />
  ));

  return (
    <StyledRelatedProducts>
      Related Products
      {renderList()}
    </StyledRelatedProducts>
  );
}

export default RelatedProducts;
