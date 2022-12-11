import React, { useState, useEffect } from 'react';
import Card from './Card';
import { CardGroup, Carousel, CarouselContainer, PreviousButton, NextButton } from './RecommendedItems.style';

function RelatedProducts({ relatedProducts, cardClicked }) {
  const [groupedProducts, setGroupedProducts] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(1);
  const [lastGroup, setLastGroup] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const groupedProductsArray = [];
    for (let i = 0; i < relatedProducts.length; i += 3) {
      groupedProductsArray.push(relatedProducts.slice(i, i + 3));
    }
    setGroupedProducts(groupedProductsArray);
    setLastGroup(groupedProductsArray.length);
  }, []);

  // eslint-disable-next-line max-len
  useEffect(() => setReady(groupedProducts !== null && lastGroup !== null), [groupedProducts, lastGroup]);

  const renderList = () => (
    groupedProducts.map((group, groupIndex) => (
      // eslint-disable-next-line react/no-array-index-key
      <CardGroup key={groupIndex} id={`related-card-group-${groupIndex + 1}`}>
        {group.map((productId, index) => (
          <Card key={productId} id={`related-card-${index + 1}`} productId={productId} cardClicked={cardClicked} />
        ))}
      </CardGroup>
    ))
  );

  const renderCarousel = () => (
    <Carousel>
      {(() => (
        currentGroup === 1 ? null : <PreviousButton href={`#related-card-group-${currentGroup - 1}`} onClick={() => setCurrentGroup(currentGroup - 1)} />
      ))()}
      {renderList()}
      {(() => (
        currentGroup === lastGroup ? null : <NextButton href={`#related-card-group-${currentGroup + 1}`} onClick={() => setCurrentGroup(currentGroup + 1)} />
      ))()}
    </Carousel>
  );

  return !ready ? null : (
    <div>
      <h3>Related Products</h3>
      <CarouselContainer>
        {renderCarousel()}
      </CarouselContainer>
    </div>
  );
}

export default RelatedProducts;
