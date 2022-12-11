import React, { useState } from 'react';
import axios from 'axios';
import ReviewListTile from './ReviewListTile';
import API_KEY from '../../../config';
import {
  Reviews,
} from './ReviewList.style';

function ReviewList({ reviews, renderCount, filter }) {
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
      reviews.map((review) => { // map is probably the wrong tool for this,
        // because I can't break out of the loop early, any suggestions?
        if (count < renderCount && filter[review.rating.toString()]) {
          count += 1;
          return (
            <ReviewListTile
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
