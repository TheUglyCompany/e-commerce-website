import React from 'react';
import { ModalContainer, ModalContent, XSpan } from '../../qAndA/QandA.style';
import { ComparisonContainer, Stars } from '../Styles/RecommendedItems.styles';

function ComparisonModal({ cardItemObj, pageItemObj, closeModal, dark }) {
  return (
    <ModalContainer>
      <ModalContent dark={dark} style={{ position: 'relative', padding: '1rem 2rem' }}>
        <XSpan style={{ position: 'absolute', top: '0.5rem', right: '1rem', fontSize: '1rem' }} onClick={closeModal}>
          X
        </XSpan>
        <ComparisonContainer>
          <h3>Comparing</h3>
          <h4>Current Product Name</h4>
          <h4>Page Item</h4>
          <p>{cardItemObj.name}</p>
          <h5>Title</h5>
          <p>{pageItemObj.name}</p>
          <p>{cardItemObj.category}</p>
          <h5>Category</h5>
          <p>{pageItemObj.category}</p>
          <p>{cardItemObj.default_price}</p>
          <h5>Price</h5>
          <p>{pageItemObj.default_price}</p>
          {cardItemObj.percentage === 'no rating' ? <>no reviews</> : (
            <span>
              <Stars style={{ '--rating': cardItemObj.percentage }} />
              {` out of ${cardItemObj.totalReviews} reviews`}
            </span>
          ) }
          <h5>Rating</h5>
          {pageItemObj.percentage === 'no rating' ? <>no reviews</> : (
            <span>
              <Stars style={{ '--rating': pageItemObj.percentage }} />
              {` out of ${pageItemObj.totalReviews} reviews`}
            </span>
          ) }
        </ComparisonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default ComparisonModal;
