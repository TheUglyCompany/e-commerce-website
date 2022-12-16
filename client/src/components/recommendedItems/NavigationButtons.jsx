import React, { useState } from 'react';
import { PreviousCard, NextCard } from './Styles/RecommendedItems.styles';

function NavigationButtons({ dark, type, lastCardIndex }) {
  const [focusedCardIndex, setFocusedCardIndex] = useState(0);

  return (
    <div>
      {focusedCardIndex > 0 ? (
        <PreviousCard
          src={dark ? 'https://i.imgur.com/EbWJrAK.png' : 'https://i.imgur.com/NuTyVPZ.png'}
          onClick={() => {
            document.getElementById(`${type}-Card-${focusedCardIndex - 1}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setFocusedCardIndex(focusedCardIndex - 1);
          }}
        />
      ) : null}
      {focusedCardIndex < lastCardIndex ? (
        <NextCard
          dark={dark}
          src={dark ? 'https://i.imgur.com/YAMtrZW.png' : 'https://i.imgur.com/GYCaEcb.png'}
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
