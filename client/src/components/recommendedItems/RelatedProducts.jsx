/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import ComparisonModal from './ComparisonModal';
import { Carousel, CarouselContainer, PreviousButton, NextButton } from './RecommendedItems.style';

function RelatedProducts({ relatedProducts, cardClicked }) {
  const [scrollState, setScrollState] = useState(0);
  const [scrollMax, setScrollMax] = useState(null);
  const ref = useRef(null);

  const handleScroll = (event) => {
    setScrollState(event.target.scrollLeft);
  };
  useEffect(() => {
    setTimeout(() => {
      setScrollMax(document.getElementById('related-carousel').scrollWidth - document.getElementById('related-carousel').clientWidth);
    }, 1000);
  }, []);

  const scroll = (scrollingRight) => {
    const amount = scrollingRight ? 250 : -250;
    ref.current.scrollLeft += amount;
  };

  const handleRelatedAction = (event, cardID) => {
    event.stopPropagation();
    console.log(cardID);
    return <ComparisonModal cardID={cardID} />;
  };

  const renderCarousel = () => (
    <CarouselContainer>
      <Carousel onScroll={handleScroll} id="related-carousel" ref={ref}>
        {(() => (
          scrollState === 0 ? null : <PreviousButton onClick={() => scroll(false)} />
        ))()}
        {relatedProducts.map((productId, index) => (
          <Card key={productId} id={`related-card-${index + 1}`} productId={productId} cardClicked={cardClicked} handleRelatedAction={handleRelatedAction} related />
        ))}
        {(() => (
          scrollState >= scrollMax ? null : <NextButton onClick={() => scroll(true)} />
        ))()}
      </Carousel>
    </CarouselContainer>
  );

  return (
    <div>
      <h3>Related Products</h3>
      {renderCarousel()}
    </div>
  );
}

export default RelatedProducts;
