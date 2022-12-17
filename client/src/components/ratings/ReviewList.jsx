import React from 'react';
import axios from 'axios';
import ReviewListTile from './ReviewListTile';
import API_KEY from '../../../config';
import {
  Reviews,
} from './Styles/ReviewList.style';

function ReviewList({
  reviews,
  renderCount,
  filter,
  dark,
  curQuery,
  postFeedback,
}) {
  let count = 0;
  return (
    <Reviews>
      {
      reviews.map((review) => {
        const summary = review.summary.toLowerCase();
        const body = review.body.toLowerCase();
        if (curQuery.length > 0) {
          if ((count < renderCount && filter[review.rating.toString()])
              && (body.includes(curQuery) || summary.includes(curQuery))) {
            count += 1;
            return (
              <ReviewListTile
                dark={dark}
                key={review.review_id}
                review={review}
                postFeedback={(destination, id, feedbackType) => {
                  postFeedback(destination, id, feedbackType);
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
