import React from 'react';
import { ThumbnailImg } from './RecommendedItems.style';

function CardImage({ stylesObj }) {
  return (
    <ThumbnailImg
      data-testid="thumbnail"
      src={stylesObj.results[0].photos[0].thumbnail_url || 'https://via.placeholder.com/300?text=No+Product+Image'}
      alt="product thumbnail"
    />
  );
}

export default CardImage;
