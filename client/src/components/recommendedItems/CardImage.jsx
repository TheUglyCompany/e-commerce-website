import React from 'react';
import styled from 'styled-components';

const ThumbnailImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 60%;
  background: #77788554;
  object-fit: contain;
`;

function CardImage({ stylesObj }) {
  return (
    <ThumbnailImg
      data-testid="thumbnail"
      src={stylesObj.results[0].photos[0].thumbnail_url || 'https://via.placeholder.com/1000?text=No+Product+Image'}
      alt="product thumbnail"
    />
  );
}

export default CardImage;
