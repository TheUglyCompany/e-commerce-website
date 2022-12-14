import React, { useState } from 'react';
import axios from 'axios';
import ReviewListTile from './ReviewListTile';
import API_KEY from '../../../config';
import {
  Reviews,
} from './Styles/ReviewList.style';
import { SearchBarStyle, SearchBarInput } from '../qAndA/QandA.style';

function ReviewList({
  reviews, renderCount, filter, dark,
}) {
  const [curQuery, setCurQuery] = useState('');
  function handleSearch(event) {
    event.preventDefault();
    const query = event.target.value.toLowerCase().trim();
    if (query.length < 3 || query === '') {
      setCurQuery('');
    } else {
      setCurQuery(query);
    }
  }
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
      <SearchBarStyle>
        <SearchBarInput
          placeholder="Search for Reviews!"
          onChange={(event) => handleSearch(event)}
          dark={dark}
        />
      </SearchBarStyle>
      {
      reviews.map((review) => {
        if (curQuery.length > 0) {
          if ((count < renderCount
              && filter[review.rating.toString()])
              && (review.body.includes(curQuery)
              || review.summary.includes(curQuery))) {
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
