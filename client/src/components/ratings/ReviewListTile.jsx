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
import FiveStarRating from '../sharedComponents/FiveStarRating';

// convert the below to HelpfulButtons

function ReviewListTile({ review, postFeedback }) {
  return (
    <TileStyle>
      {' '}
      <CardInfo>
        <div>
          Rating:
          {' '}
          {review.rating}
          <FiveStarRating />
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

      {review.recommend ? <OwnerResponse>I recommend this product</OwnerResponse> : null}
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
