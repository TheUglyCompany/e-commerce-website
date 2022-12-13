import React, { useState, useEffect } from 'react';
import { PreviousCard, NextCard } from './Styles/RecommendedItems.styles';

function NavigationButtons({ carouselId }) {
  const [scrollState, setScrollState] = useState(0);
  // eslint-disable-next-line max-len
  const [maxScroll, setMaxScroll] = useState(document.getElementById(carouselId).scrollWidth);

  useEffect(() => {
    console.log(scrollState)
  }, [scrollState])
  useEffect(() => {
    console.log('this is the max scroll')
    console.log(maxScroll)
  }, [maxScroll])

  const scrollRight = () => {
    let newScrollLeft = document.getElementById(carouselId).scrollLeft;
    newScrollLeft = newScrollLeft + 320 > maxScroll ? maxScroll : newScrollLeft + 320;
    document.getElementById(carouselId).scrollLeft = newScrollLeft;
    setScrollState(newScrollLeft);
    console.log(`this is the max scroll ${document.getElementById(carouselId).scrollWidth - document.getElementById(carouselId).clientWidth}`)
  };
  const scrollLeft = () => {
    let newScrollLeft = document.getElementById(carouselId).scrollLeft;
    newScrollLeft = newScrollLeft < 320 ? 0 : newScrollLeft - 320;
    document.getElementById(carouselId).scrollLeft = newScrollLeft;
    setScrollState(newScrollLeft);
  };

  return (
    <div>
      {scrollState > 0 ? <PreviousCard onClick={() => scrollLeft()} /> : null}
      {scrollState <= maxScroll ? <NextCard onClick={() => scrollRight()} /> : null}
    </div>
  )
}

export default NavigationButtons;
