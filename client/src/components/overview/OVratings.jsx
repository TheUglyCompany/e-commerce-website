import React from 'react';
import {
  OVstars,
  OVstarsReview,
  RatingsLink,
} from './Overview.style';

function OVratings({
  dark,
  prodAvg,
  reviewCount,
}) {
  return (
    <div>
      <OVstars style={{ '--rating': `${prodAvg * 20}%` }} />
      <OVstarsReview>
        <RatingsLink dark={dark} href="#ratings">
          Read
          {' '}
          {reviewCount}
          {' '}
          reviews.
        </RatingsLink>
      </OVstarsReview>
    </div>
  );
}

export default OVratings;
