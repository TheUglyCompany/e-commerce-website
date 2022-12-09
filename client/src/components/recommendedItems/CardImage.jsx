import React from 'react';
import styled from 'styled-components';

const ThumbnailImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 60%;
  object-fit: contain;
`;

function CardImage({ stylesObj }) {
  return (
    <ThumbnailImg data-testid="thumbnail" src={stylesObj.results[0].photos[0].thumbnail_url} alt="product thumbnail" />
  );
}

export default CardImage;
