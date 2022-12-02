import React from 'react';
import ReviewListTile from './ReviewListTile';

function ReviewList ({product}) {

  return(

    <div>
      <hr/>
      <ReviewListTile product={product}/>
      <ReviewListTile product={product}/>
      </div>
  );
}

export default ReviewList;