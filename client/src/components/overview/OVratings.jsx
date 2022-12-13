import React from 'react';
import {
  OVstars,
  OVstarsReview,
  RatingsLink,
} from './Overview.style';

function OVratings({
  dark,
  revAvg,
  revCount,
}) {
  return (
    <div>
      <OVstars style={{ '--rating': '50%' }} />
      <OVstarsReview>
        <RatingsLink dark={dark} href="#ratings">
          Read
          {' '}
          {revCount}
          {' '}
          reviews.
        </RatingsLink>
      </OVstarsReview>
    </div>
  );
}

export default OVratings;
