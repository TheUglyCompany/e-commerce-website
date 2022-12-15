import React from 'react';
import axios from 'axios';
import ReviewListTile from './ReviewListTile';
import API_KEY from '../../../config';
import {
  Reviews,
} from './Styles/ReviewList.style';

function ReviewList({
  reviews, renderCount, filter, dark, curQuery,
}) {
  function postFeedback(feedbackType, reviewId) { // handles report and helpfulness
    axios.put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/${feedbackType}`,
      { review_id: reviewId },
      { headers: { Authorization: API_KEY } },
    )
      .then(() => {
        console.log('successful', feedbackType);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  let count = 0;
  return (
    <Reviews>
      {
      reviews.map((review) => {
        if (curQuery.length > 0) {
          if ((count < renderCount && filter[review.rating.toString()])
              && (review.body.includes(curQuery) || review.summary.includes(curQuery))) {
            count += 1;
            return (
              <ReviewListTile
                dark={dark}
                key={review.review_id}
                review={review}
                postFeedback={(feedbackType, reviewId) => {
                  postFeedback(feedbackType, reviewId);
                }}
              />
            );
          }
          return null;
        }
        if (count < renderCount && filter[review.rating.toString()]) {
          count += 1;
          return (
            <ReviewListTile
              dark={dark}
              key={review.review_id}
              review={review}
              postFeedback={(feedbackType, reviewId) => {
                postFeedback(feedbackType, reviewId);
              }}
            />
          );
        }
        return null;
      })
      }
    </Reviews>

  );
}

export default ReviewList;
