/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { OutfitAction, RelatedAction, StyledCard, Stars } from './Styles/RecommendedItems.styles';
import ComparisonModal from './Modals/ComparisonModal';
import API_KEY from '../../../config';

function Card({
  cardItemId, pageItem, type, handleCardClick, handleActionClick, getRatingObject, ratingObj, styles, id, dark
}) {
  const [showModal, setShowModal] = useState(false);
  const [cardItemObj, setCardItemObj] = useState(null);
  const [pageItemObj, setPageItemObj] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${cardItemId}`, { headers: { Authorization: API_KEY } }),
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', { headers: { Authorization: API_KEY }, params: { product_id: cardItemId } }),
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${cardItemId}/styles`, { headers: { Authorization: API_KEY } })])
      .then((response) => {
        // console.log(response[2].data.results);
        setCardItemObj({ ...response[0].data, ...getRatingObject(response[1].data.ratings), ...{ styles: response[2].data.results } });
      })
      .catch((err) => console.log(err.message));
    setPageItemObj({ ...pageItem, ...ratingObj, ...{ styles } });
  }, []);

  useEffect(() => {
    if (cardItemObj !== null && pageItemObj !== null) {
      setReady(true);
    }
  }, [cardItemObj, pageItemObj]);

  return !ready ? null : (
    <div>
      <StyledCard id={id} onClick={() => handleCardClick(cardItemId)} dark={dark}>
        <img
          src={cardItemObj.styles[0].photos[0].thumbnail_url || 'https://via.placeholder.com/300?text=No+Product+Image'}
          alt="card thumbnail"
          style={{
            width: '100%', height: '60%', objectFit: 'cover', borderRadius: '0.4rem',
          }}
        />
        <p>{cardItemObj.category}</p>
        <p style={{ fontFamily: 'ROBOTO', fontWeight: 600 }}>{cardItemObj.name}</p>
        <p>{cardItemObj.default_price}</p>
        {cardItemObj.percentage === 'no rating' ? <>no reviews</> : (
          <>
            <Stars style={{ '--rating': cardItemObj.percentage }} />
            {` out of ${cardItemObj.totalReviews} reviews`}
          </>
        ) }
        {type === 'related' ? <RelatedAction dark={dark} onClick={(event) => { handleActionClick(event, type, setShowModal); }}><FontAwesomeIcon icon={faStar} style={{color: 'white', transform: 'translateY(-0.25rem)' }} /></RelatedAction> : <OutfitAction dark={dark} onClick={(event) => { handleActionClick(event, type, () => {}, cardItemId); }}><FontAwesomeIcon icon={faX} style={{color: 'red', transform: 'translateY(-0.25rem)' }} /></OutfitAction>}
      </StyledCard>
      {!showModal ? null : <ComparisonModal dark={dark} closeModal={() => { setShowModal(false); }} cardItemObj={cardItemObj} pageItemObj={pageItemObj} />}
    </div>
  );
}

export default Card;
