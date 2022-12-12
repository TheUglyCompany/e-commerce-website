import React from 'react';
import { OVstars, OVstarsReview } from './Overview.style';

function OVratings() {
  return (
    <div>
      <OVstars style={{ '--rating': '50%' }} />
      <OVstarsReview>
        <a href="#ratings">Read all reviews.</a>
      </OVstarsReview>
    </div>
  );
}

export default OVratings;
