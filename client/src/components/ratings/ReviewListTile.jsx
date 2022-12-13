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
} from './Styles/ReviewListTile.style';
import { Check } from '../overview/Overview.style';
import { Stars } from '../recommendedItems/Styles/RecommendedItems.styles';

// convert the below to HelpfulButtons

function ReviewListTile({ review, postFeedback, dark }) {
  const [isShortened, setIsShortened] = useState(true);
  const [reported, setReported] = useState(false);
  const [helpfulled, setHelpfulled] = useState(false);

  return (
    <TileStyle>
      {' '}
      <CardInfo>
        <div>
          <Stars dark={dark} style={{ '--rating': `${((review.rating / 5) * 100)}%` }} />
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
                <HelpfulButton
                  dark={dark}
                  onClick={() => setIsShortened(false)}
                >
                  Show More
                </HelpfulButton>
              </Body>
            ) : (
              <Body>
                {review.body}
                <HelpfulButton
                  dark={dark}
                  onClick={() => setIsShortened(true)}
                >
                  Show Less
                </HelpfulButton>
              </Body>
            )

        )}
      {review.recommend ? (
        <OwnerResponse>
          <span>
            <Check dark={dark}><img src="https://cdn-icons-png.flaticon.com/512/1055/1055183.png" width="10px" alt="" /></Check>
          </span>
          {' '}
          I recommend this product
        </OwnerResponse>
      ) : null}
      <InteractiveLine>
        {review.response ? <OwnerResponse>{review.response}</OwnerResponse> : null}
        <HelpfulButton
          value="helpful"
          id={review.review_id}
          onClick={(e) => {
            if (!helpfulled) {
              postFeedback(e.target.value, e.target.id);
              setHelpfulled(true);
            } else {
              console.log('Already helpfulled!');
            }
          }}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          dark={dark}
        >
          Helpful?
        </HelpfulButton>
        Yes
        {' ('}
        {review.helpfulness}
        {') '}
        <HelpfulButton
          value="report"
          id={review.review_id}
          onClick={(e) => {
            if (!reported) {
              postFeedback(e.target.value, e.target.id);
              setReported(true);
            } else {
              console.log('already reported');
            }
          }}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          dark={dark}
        >
          Report
        </HelpfulButton>
      </InteractiveLine>
    </TileStyle>
  );
}

export default ReviewListTile;
