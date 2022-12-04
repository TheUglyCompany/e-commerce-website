import React from 'react';
import ReviewListTile from './ReviewListTile';

function ReviewList({ reviews, onSelect }) {
  let renderCount = 0;
  return (
    <div>
      <hr />
      {reviews.map((review) => {
        renderCount += 1;
        if (renderCount <= 2) {
          return (
            <div>
              <ReviewListTile review={review} />
            </div>
          );
        }
        return null;
      })}
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
