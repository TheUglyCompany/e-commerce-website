import React from 'react';
import {
  CardSummary,
  HelpfulButton,
  OwnerResponse,
  Body,
  CardInfo,
  TileStyle,
} from './ReviewListTile.style';

// convert the below to HelpfulButtons

function ReviewListTile({ review, postFeedback }) {
  console.log(review);
  return (
    <TileStyle>
      {' '}
      <CardInfo>
        <div>
          Rating:
          {' '}
          {review.rating}
        </div>
        <div>
          {' '}
          {review.reviewer_name}
          {' '}
          {review.date}
          {' '}
        </div>
      </CardInfo>
      <CardSummary>
        {review.summary}
      </CardSummary>
      <Body>
        {review.body}
      </Body>
      {review.response ? <OwnerResponse>{review.response}</OwnerResponse> : null}
      <HelpfulButton value="helpful" id={review.review_id.toString()} onClick={(e) => { postFeedback(e.target.value, e.target.id); }} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
        Helpful?
      </HelpfulButton>
      Yes
      {' '}
      {review.helpfulness}
      <HelpfulButton value="report" onClick={(e) => { postFeedback(e.target.value, e.target.id); }} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
        Report
      </HelpfulButton>
      <hr />
    </TileStyle>
  );
}

export default ReviewListTile;

/*
body: "product exksajdlkdjklsjkldjklajdkljskaldjklajskldjasd"
date: "2022-07-26T00:00:00.000Z"
helpfulness: 99
photos: []
rating: 3
recommend: true
response: null
review_id: 1276009
reviewer_name: "hello"
summary: "vool"
*/
