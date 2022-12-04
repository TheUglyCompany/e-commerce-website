import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ReviewList from './ReviewList';
import API_KEY from '../../../config';

function Ratings({ product }) {
  const [reviews, setReviews] = useState([]);
  const [ready, setReady] = useState(false);
  const [sort, setSort] = useState('relevant');
  // initial API call
  useEffect(() => {
    axios.get(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
      {
        headers: { Authorization: API_KEY },
        params: { product_id: product.id, sort },
      },
    )
      .then((response) => {
        setReviews(response.data.results);
        // response.data contains count, page, product_id, and results
      })
      .catch((err) => console.log(err.message));
  }, [sort]);
  useEffect(() => {
    if (reviews !== null) {
      setReady(true);
    }
  }, [reviews]);
  // dropdown
  const options = ['helpful', 'newest', 'relevant'];
  const defaultOption = options[2];
  const onSelect = (e) => (setSort(e.value));

  return !ready ? <>Ratings are not ready</> : (
    <div data-testid="ratings">
      <h2> Review List </h2>
      <h4>Sorted by </h4>
      <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
      <ReviewList reviews={reviews} onSelect={() => onSelect} />
    </div>
  );
}

export default Ratings;
