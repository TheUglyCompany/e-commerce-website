import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { StyledCard, Stars } from './Styles/RecommendedItems.styles';
import ComparisonModal from './Modals/ComparisonModal';
import API_KEY from '../../../config';

function Card({
  id,
  cardItemId,
  type,
  dark,
  pageItemObj,
  handleCardClick,
  handleActionClick,
  getRatingObject,
}) {
  const [showModal, setShowModal] = useState(false);
  const [cardItemObj, setCardItemObj] = useState({
    category: '', name: '', default_price: '', percentage: '', totalReviews: '', styles: [{ photos: [{ thumbnail_url: '' }] }],
  });

  useEffect(() => {
    Promise.all([
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${cardItemId}`, { headers: { Authorization: API_KEY } }),
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', { headers: { Authorization: API_KEY }, params: { product_id: cardItemId } }),
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${cardItemId}/styles`, { headers: { Authorization: API_KEY } })])
      .then((response) => {
        setCardItemObj({ ...response[0].data, ...getRatingObject(response[1].data.ratings), ...{ styles: response[2].data.results } });
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <StyledCard id={id} onClick={() => handleCardClick(cardItemId)} dark={dark}>
        <img
          src={cardItemObj.styles[0].photos[0].thumbnail_url || 'https://via.placeholder.com/300?text=No+Product+Image'}
          alt="card thumbnail"
          className="card-image"
          async
        />
        {type === 'related' ? (
          <div
            className="action-button"
            style={{ background: dark ? '#84A98C' : '#9387c9' }}
            onClick={(event) => { handleActionClick(event, type, setShowModal); }}
            onKeyPress={(event) => { handleActionClick(event, type, setShowModal); }}
            role="button"
            tabIndex="0"
          >
            <FontAwesomeIcon
              className="icon"
              icon={faStar}
              style={{ color: 'white', transform: 'translateY(-0.25rem)' }}
            />
          </div>
        ) : (
          <div
            className="action-button"
            style={{ background: dark ? '#84A98C' : '#9387c9' }}
            onClick={(event) => { handleActionClick(event, type, () => {}, cardItemId); }}
            onKeyPress={(event) => { handleActionClick(event, type, () => {}, cardItemId); }}
            role="button"
            tabIndex="0"
          >
            <FontAwesomeIcon
              className="icon"
              icon={faX}
              style={{ color: 'red', transform: 'translateY(-0.25rem)' }}
            />
          </div>
        )}
        <div className="card-information-container">

          <p className="category card-information">{cardItemObj.category}</p>
          <p className="name card-information">{cardItemObj.name}</p>
          <p className="price card-information">{`$${cardItemObj.default_price}`}</p>

          {cardItemObj.percentage === 'no rating' ? <>no reviews</> : (
            <div className="ratings card-information">
              <Stars style={{ '--rating': cardItemObj.percentage }} />
              {` out of ${cardItemObj.totalReviews} reviews`}
            </div>
          ) }

        </div>
      </StyledCard>

      {!showModal ? null : (
        <ComparisonModal
          dark={dark}
          cardItemObj={cardItemObj}
          pageItemObj={pageItemObj}
          closeModal={() => { setShowModal(false); }}
        />
      )}
    </div>
  );
}

export default Card;
