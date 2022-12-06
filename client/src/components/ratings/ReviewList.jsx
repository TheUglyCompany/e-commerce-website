import React, { useState } from 'react';
import axios from 'axios';
import ReviewListTile from './ReviewListTile';
import {
  Reviews,
  ShowMore,
} from './ReviewList.style';

function ReviewList({ reviews, reviewCount }) {
  const [renderCount, setRenderCount] = useState(2);

  function postFeedback(feedbackType, reviewId) {
    if (feedbackType === 'helpful') {
      console.log('reeview_id', reviewId);
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/:review_id/helpful', {
        review_id: reviewId,
      }).then((response) => {
        console.log('success posting helpful', response);
      })
        .catch((err) => {
          console.log(err.message);
        });
    }
    // axios.post()
  }
  let count = 0;
  return (
    <Reviews>
      <hr />
      {
      reviews.map((review) => { // map is probably the wrong tool for this,
        // because I can't break out of the loop early, any suggestions?
        count += 1;
        if (count <= renderCount) {
          console.log(review.review_id);
          return (
            <div>
              <ReviewListTile
                review={review}
                key={review.review_id}
                postFeedback={(feedbackType, reviewId) => { postFeedback(feedbackType, reviewId); }}
              />
            </div>
          );
        }
        return null;
      })
      }
      {reviewCount <= renderCount ? null
        : <ShowMore type="button" onClick={() => { setRenderCount(renderCount + 2); }}>More Reviews</ShowMore>}
      <ShowMore type="button" onClick={() => { console.log('Entry form here'); }}>Add Review</ShowMore>
    </Reviews>
  );
}

export default ReviewList;

/*
campus:"hr-rfp"
category:"Pants"
created_at:"2021-08-13T14:38:44.509Z"
default_price:"65.00"
description:"I'll tell you how great they are after I nap for a bit."
id:40347
name:"Slacker's Slacks"
slogan:"Comfortable for everything, or nothing"
updated_at:"2021-08-13T14:38:44.509Z"
*/
