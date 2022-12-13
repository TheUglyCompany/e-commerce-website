import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';
import API_KEY from '../../../config';
import Modal from './Modal';
import RatingBreakdown from './RatingBreakdown';
import ProductBreakdown from './ProductBreakdown';
import {
  RatingsAndReviews,
  RatingStyle,
  ReviewStyle,
  OuterMostLayer,
  ButtonContainer,
} from './Ratings.style';
import {
  Button,
  Dd,
  DdBttn,
  DdContent,
  DdItem,
} from '../overview/Overview.style';

function Ratings({ product, dark }) {
  const [renderCount, setRenderCount] = useState(2);
  const [metaData, setMetaData] = useState({});
  const [reviews, setReviews] = useState([]);
  const [ready, setReady] = useState(false);
  const [sort, setSort] = useState('relevant');
  const [filter, setFilter] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });
  const [showModal, setShowModal] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  // initial API call
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
  const onSelect = (e) => (setSort(e.value));
  let reviewCount = 0;
  reviewCount = metaData.ratings ? Number(metaData.ratings['1']) + Number(metaData.ratings['2']) + Number(metaData.ratings['3']) + Number(metaData.ratings['4']) + Number(metaData.ratings['5']) : null;
  return !ready ? <>Ratings are not ready</> : (
    <OuterMostLayer>
      <RatingsAndReviews>
        <RatingStyle>
          <h4> Ratings & Reviews </h4>
          <RatingBreakdown metaData={metaData} filter={filter} setFilter={setFilter} dark={dark} />

          <ProductBreakdown metaData={metaData} dark={dark} />
        </RatingStyle>
        <ReviewStyle>
          <h4>
            { reviewCount }
            {' '}
            total reviews, Sorted by
          </h4>
          <Dd>
            <DdBttn onClick={() => { setDropdownActive(!dropdownActive); }}>
              {sort}
              {'  '}
              <span><img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" width="10px" alt="" /></span>
            </DdBttn>
            {dropdownActive && (
              <DdContent>
                {options.map((option) => (
                  <DdItem onClick={(e) => {
                    setSort(e.target.textContent);
                    setDropdownActive(false);
                  }}
                  >
                    {option}
                  </DdItem>
                ))}
              </DdContent>
            )}
          </Dd>

          <ReviewList
            reviews={reviews}
            onSelect={() => onSelect}
            renderCount={renderCount}
            filter={filter}
            dark={dark}
          />
        </ReviewStyle>
      </RatingsAndReviews>
      <ButtonContainer>
        {reviewCount <= renderCount ? null
          : <Button dark={dark} type="button" onClick={() => { setRenderCount(renderCount + 2); }}>More Reviews</Button>}
        <Button type="button" onClick={() => { setShowModal(true); }}>Add Review</Button>
      </ButtonContainer>
      {showModal
        ? (
          <Modal
            setShowModal={setShowModal}
            product={product}
            characteristics={metaData.characteristics}
          />
        ) : null}
    </OuterMostLayer>
  );
}

export default Ratings;
