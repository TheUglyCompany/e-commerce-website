import React, { useState } from 'react';
import { PreviousCard, NextCard } from './Styles/RecommendedItems.styles';

function NavigationButtons({ type, lastCardIndex }) {
  const [focusedCardIndex, setFocusedCardIndex] = useState(0);

  return (
    <div>
      {focusedCardIndex > 0 ? (
        <PreviousCard
          // href={`#${type}-Card-${focusedCardIndex - 1}`}
          onClick={() => {
            document.getElementById(`${type}-Card-${focusedCardIndex - 1}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setFocusedCardIndex(focusedCardIndex - 1);
          }}
        />
      ) : null}
      {focusedCardIndex < lastCardIndex ? (
        <NextCard
          // href={`#${type}-Card-${focusedCardIndex + 1}`}
          onClick={() => {
            document.getElementById(`${type}-Card-${focusedCardIndex + 1}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setFocusedCardIndex(focusedCardIndex + 1);
          }}
        />
      ) : null}
    </div>
  );
}

export default NavigationButtons;
