import React, { useState } from 'react';
import ReviewListTile from './ReviewListTile';

function ReviewList({ reviews, reviewCount }) {
  const [renderCount, setRenderCount] = useState(2);

  function postFeedback(feedbackType) {
    console.log(feedbackType);
  }
  let count = 0;
  return (
    <div>
      <hr />
      {
      reviews.map((review) => { // map is probably the wrong tool for this,
        // because I can't break out of the loop early, any suggestions?
        count += 1;
        if (count <= renderCount) {
          return (
            <div>
              <ReviewListTile
                review={review}
                postFeedback={(feedbackType) => {postFeedback(feedbackType)}} />
            </div>
          );
        }
        return null;
      })
      }
      {reviewCount <= renderCount ? null
        : <button type="button" onClick={() => { setRenderCount(renderCount + 2); }}>More Reviews</button>}
      <button type="button" onClick={() => { console.log('Entry form here'); }}>Add Review</button>
    </div>
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
