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
  ReviewStyleHeader,
  Dd,
} from './Styles/Ratings.style';
import {
  Button,
  DdBttn,
  DdContent,
  DdItem,
} from '../overview/Overview.style';
import { SearchBarStyle, SearchBarInput } from '../qAndA/QandA.style';

function Ratings({
  product,
  dark,
  reviewCount,
  metaData,
  prodAvg,
}) {
  const [renderCount, setRenderCount] = useState(2);
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState('RELEVANT');
  const [filter, setFilter] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });
  const [showModal, setShowModal] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [curQuery, setCurQuery] = useState('');
  function handleSearch(event) {
    event.preventDefault();
    const query = event.target.value.toLowerCase().trim();
    if (query.length < 3 || query === '') {
      setCurQuery('');
    } else {
      setCurQuery(query);
    }
  }
  // initial API call
  useEffect(() => {
    // get reviews
    axios.get(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/',
      {
        headers: { Authorization: API_KEY },
        params: {
          product_id: product.id,
          sort: sort.toLowerCase(), // if count is 5 and page is 1 this only serves the first 5
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
  }, [sort, reviewCount]);// this makes mulitple gets on startup
  // dropdown
  console.log(reviews);
  const options = ['HELPFUL', 'NEWEST', 'RELEVANT'];
  const onSelect = (e) => (setSort(e.value));
  // if (metaData.ratings) {
  return (
    <OuterMostLayer href="#ratings">
      <RatingsAndReviews>
        <RatingStyle>
          <RatingBreakdown
            metaData={metaData}
            filter={filter}
            setFilter={setFilter}
            dark={dark}
            prodAvg={prodAvg}
            reviewCount={reviewCount}
          />
          <ProductBreakdown metaData={metaData} dark={dark} />
        </RatingStyle>
        <ReviewStyle>
          <ReviewStyleHeader>
            <SearchBarInput
              style={{ margin: '10px', width: '25em' }}
              placeholder="Search for Reviews!"
              onChange={(event) => handleSearch(event)}
              dark={dark}
            />
            <span>
              { reviewCount }
              {' '}
              total reviews, sorted by
            </span>
            <Dd>
              <DdBttn dark={dark} onClick={() => { setDropdownActive(!dropdownActive); }} style={{ width: '6em' }}>
                {sort}
                &nbsp;
                <span><img src={dark ? 'https://i.imgur.com/fPN5x5Y.png' : 'https://i.imgur.com/qNLEmCH.png'} width="10px" alt="" /></span>
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
          </ReviewStyleHeader>
          <ReviewList
            reviews={reviews}
            onSelect={() => onSelect}
            renderCount={renderCount}
            filter={filter}
            dark={dark}
            curQuery={curQuery}
          />
        </ReviewStyle>
      </RatingsAndReviews>
      <ButtonContainer>
        {reviewCount <= renderCount ? null
          : <Button dark={dark} type="button" onClick={() => { setRenderCount(reviewCount); }}>All Reviews</Button>}
        <Button dark={dark} type="button" onClick={() => { setShowModal(true); }}>Add Review</Button>
        {showModal
          ? (
            <Modal
              setShowModal={setShowModal}
              product={product}
              characteristics={metaData.characteristics}
              dark={dark}
            />
          ) : null}
      </ButtonContainer>
    </OuterMostLayer>
  );
}

export default Ratings;
