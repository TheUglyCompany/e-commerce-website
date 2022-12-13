import React from 'react';
import { format } from 'date-fns';
import {
  CardSummary,
  HelpfulButton,
  OwnerResponse,
  Body,
  CardInfo,
  TileStyle,
  InteractiveLine,
} from './ReviewListTile.style';
import { Stars } from '../recommendedItems/Styles/RecommendedItems.styles';

// convert the below to HelpfulButtons

function ReviewListTile({ review, postFeedback }) {
  return (
    <TileStyle>
      {' '}
      <CardInfo>
        <div>
          <Stars style={{ '--rating': `${((review.rating / 5) * 100)}%` }} />
        </div>
        <div>
          {' '}
          {review.reviewer_name}
          {' '}
          {format(new Date(review.date), 'MMMM d, yyyy')}
          {' '}
        </div>
      </CardInfo>
      <CardSummary>
        {review.summary}
      </CardSummary>
      <Body>
        {review.body}
      </Body>

      {review.recommend ? (
        <OwnerResponse>
          I recommend this product
          <span>
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055183.png" width="10px" alt="" />
          </span>
        </OwnerResponse>
        ) : null}
      <InteractiveLine>
        {review.response ? <OwnerResponse>{review.response}</OwnerResponse> : null}
        <HelpfulButton value="helpful" id={review.review_id} onClick={(e) => { postFeedback(e.target.value, e.target.id); }} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          Helpful?
        </HelpfulButton>
        Yes
        {' ('}
        {review.helpfulness}
        {') '}
        <HelpfulButton value="report" id={review.review_id} onClick={(e) => { postFeedback(e.target.value, e.target.id); }} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          Report
        </HelpfulButton>
      </InteractiveLine>
    </TileStyle>
  );
}

export default ReviewListTile;
