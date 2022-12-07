import React, { useState } from 'react';
import FiveStarRating from '../sharedComponents/FiveStarRating';
import {
  StarChart,
  GreenBar,
  GrayBar,
  BarContainer,
  StarButton,
  ResetFilter,
} from './RatingBreakdown.style';

// TODO: say what percentage of people recommend this product
// say current filters
// have a link to reset filters
let avg = 0;

function RatingBreakdown({ metaData, filter, setFilter }) {
  const [isFilter, setIsFilter] = useState(false);
  function resetState(bool) { // resets filter
    const tempObj = { ...filter };
    for (let i = 1; i < Object.keys(tempObj).length + 1; i += 1) {
      tempObj[i.toString()] = bool;
    }
    setIsFilter(!bool);
    if (bool) {
      setFilter(tempObj);
    }
    return tempObj;
  }
  // function for onclick of star rating
  function filterBy(event) {
    let isAllTrue = true;
    let tempObj = { ...filter };
    for (let i = 1; i < Object.keys(tempObj).length + 1; i += 1) {
      if (!filter[i.toString()]) {
        isAllTrue = false;
      }
    }
    if (isAllTrue) {
      tempObj = resetState(false);
    }

    tempObj[event.target.value] = !tempObj[event.target.value];
    setFilter(tempObj);
  }

  const percentages = [];
  // object with 1-5 as keys and a string of number of ratings
  const ratingsObj = metaData.ratings;
  if (metaData.ratings) { // calculating total amount of ratings
    const allRatings = (Number(ratingsObj['1']) + Number(ratingsObj['2']) + Number(ratingsObj['3']) + Number(ratingsObj['4']) + Number(ratingsObj['5']));
    // calulating average

    avg = (
      (Number(ratingsObj['1'])
        + (Number(ratingsObj['2']) * 2)
        + (Number(ratingsObj['3']) * 3)
        + (Number(ratingsObj['4']) * 4)
        + (Number(ratingsObj['5']) * 5))
        / allRatings
    );
    avg = +avg.toFixed(1);
    // adding percentages to array
    for (let i = 1; i <= 5; i += 1) { // 75% is 100% so I only multiply by 75
      percentages.push(((75 * Number(ratingsObj[i.toString()])) / allRatings));
    }
  }
  // converting filter to array
  return !metaData.ratings ? null : (
    <div>
      <h1>{avg}</h1>
      <FiveStarRating />
      {isFilter ? <ResetFilter onClick={() => resetState(true)}>Reset Filter</ResetFilter> : null}
      <StarChart>
        {percentages.map((percentage, index) => (
          <BarContainer>
            <StarButton value={index + 1} onClick={(e) => filterBy(e)}>
              {index + 1}
              {' '}
              Stars
            </StarButton>
            <GreenBar inputWidth={`${percentage}%`} />
            <GrayBar inputWidth={`${(75 - percentage)}%`} />
          </BarContainer>
        ))}
      </StarChart>
    </div>
  );
}

export default RatingBreakdown;
