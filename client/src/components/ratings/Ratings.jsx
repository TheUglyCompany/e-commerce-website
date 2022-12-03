import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';
import API_KEY from '../../../config';

function Ratings({ product }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
      {
        headers: { Authorization: API_KEY },
        params: { product_id: product.id },
      },
    )
      .then((response) => {
        // console.log(response.data.results);
        setReviews(response.data.results);
        // response.data contains count, page, product_id, and results
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default Ratings;
