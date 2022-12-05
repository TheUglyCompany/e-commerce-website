import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ReviewList from './ReviewList';
import API_KEY from '../../../config';

function Ratings({ product }) {
  const [metaData, setMetaData] = useState({});
  const [reviews, setReviews] = useState([]);
  const [ready, setReady] = useState(false);
  const [sort, setSort] = useState('relevant');
  // initial API call
  /*
  page: selects the page to return
  count: specifies how many results per page to return
  sort: changes order of reviews
  product_id: specifies which product to retrieve
  */
  useEffect(() => {
    // get review metadata
    let totalReviews = 5;
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
      headers: { Authorization: API_KEY },
      params: { product_id: product.id },
    }).then((response) => {
      // console.log(response);
      setMetaData(metaData);
      totalReviews = (Number(response.data.ratings['1']) + Number(response.data.ratings['2']) + Number(response.data.ratings['3']) + Number(response.data.ratings['4']) + Number(response.data.ratings['5']));
      // response.data.ratings is an object with a number in the form of a string
      setMetaData(response.data);
      return totalReviews;
    })
      .catch((err) => (console.log(err.message)))
      .then((reviewCount) => {
        axios.get(
          'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
          {
            headers: { Authorization: API_KEY },
            params: {
              product_id: product.id,
              sort, // if count is 5 and page is 1 this only serves the first 5
              count: reviewCount, // this does not wait for the first get function
              page: 1,
            },
          },
        )
          .then((response) => {
            setReviews(response.data.results);
            // response.data contains count, page, product_id, and results
          })
          .catch((err) => console.log(err.message));
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
  let reviewCount = 0;
  reviewCount = metaData.ratings ? Number(metaData.ratings['1']) + Number(metaData.ratings['2']) + Number(metaData.ratings['3']) + Number(metaData.ratings['4']) + Number(metaData.ratings['5']) : null;
  return !ready ? <>Ratings are not ready</> : (
    <div data-testid="ratings">
      <h2> Review List </h2>
      <h4>
        { reviewCount }
        {' '}
        total reviews, Sorted by
      </h4>
      <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
      <ReviewList reviews={reviews} onSelect={() => onSelect} reviewCount={reviewCount} />
    </div>
  );
}

export default Ratings;

// {
//   "product_id": "40344",
//   "ratings": {
//       "1": "94",
//       "2": "105",
//       "3": "276",
//       "4": "203",
//       "5": "471"
//   },
//   "recommended": {
//       "false": "292",
//       "true": "857"
//   },
//   "characteristics": {
//       "Fit": {
//           "id": 135219,
//           "value": "3.2496433666191155"
//       },
//       "Length": {
//           "id": 135220,
//           "value": "3.2775330396475771"
//       },
//       "Comfort": {
//           "id": 135221,
//           "value": "3.2282091917591125"
//       },
//       "Quality": {
//           "id": 135222,
//           "value": "3.2218798151001541"
//       }
//   }
// }