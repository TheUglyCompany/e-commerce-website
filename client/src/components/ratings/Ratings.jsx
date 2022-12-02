import React from 'react';
import ReviewList from './ReviewList';

function Ratings({product}) {
  return (
    <div>
      <ReviewList product={product}/>
    </div>
  );
}

export default Ratings;
