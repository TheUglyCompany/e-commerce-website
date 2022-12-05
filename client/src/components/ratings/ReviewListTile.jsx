import React from 'react';

function ReviewListTile({ review, postFeedback }) {
  return (
    <div>
      Rating:
      {' '}
      {review.rating}
      Reviewer Name:
      {' '}
      {review.reviewer_name}
      Date:
      {' '}
      {review.date}
      Summary:
      {' '}
      {review.summary}
      <br />
      {review.body}
      helpfulness
      {' '}
      {review.helpfulness}
      <p onClick={(e) => { postFeedback(e.target) }} style={{cursor: 'pointer', textDecoration: 'underline'}}>
        Helfpul?
      </p>
      <p onClick={(e) => { postFeedback(e.target); }} style={{cursor: 'pointer', textDecoration: 'underline'}}>
      Report
      </p>
      <hr />
    </div>
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
