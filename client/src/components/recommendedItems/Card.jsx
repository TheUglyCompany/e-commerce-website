import React, { useState, useEffect } from 'react';
import { OutfitAction, RelatedAction, StyledCard } from './Styles/RecommendedItems.styles';
import ComparisonModal from './Modals/ComparisonModal';

function Card({
  cardItemId, type, handleCardClick, handleActionClick,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <StyledCard onClick={() => handleCardClick(cardItemId)}>
        image goes here for the card
        the id is {cardItemId}
        the type is {type}
        {type === 'related' ? <RelatedAction onClick={(event) => { handleActionClick(event, type, setShowModal); }} /> : <OutfitAction onClick={(event) => { handleActionClick(event, type, () => {}, cardItemId); }} />}
      </StyledCard>
      {!showModal ? null : <ComparisonModal closeModal={() => { setShowModal(false); }} />}
    </div>
  );
}

export default Card;
