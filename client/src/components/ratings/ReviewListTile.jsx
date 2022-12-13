import React, { useState } from 'react';
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
import { Button } from '../overview/Overview.style';
import { Stars } from '../recommendedItems/Styles/RecommendedItems.styles';

// convert the below to HelpfulButtons

function ReviewListTile({ review, postFeedback }) {
  const [isShortened, setIsShortened] = useState(true);
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
          {', '}
          {format(new Date(review.date), 'MMMM d, yyyy')}
          {' '}
        </div>
      </CardInfo>
      <CardSummary>
        {review.summary}
      </CardSummary>
      {/*
      eslint-disable-next-line no-nested-ternary
      */}
      {review.body.length <= 250
        ? (
          <Body>
            {review.body}
          </Body>
        ) : (
          isShortened
            ? (
              <Body>
                {review.body.slice(0, 250)}
                <Button onClick={() => setIsShortened(false)}>Show More</Button>
              </Body>
            ) : (
              <Body>
                {review.body}
                <Button onClick={() => setIsShortened(true)}>Show Less</Button>
              </Body>
            )

        )}
      {review.recommend ? (
        <OwnerResponse>
          <span>
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055183.png" width="10px" alt="" />
          </span>
          {' '}
          I recommend this product
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
