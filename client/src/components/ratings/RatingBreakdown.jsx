import React, { useState } from 'react';
import {
  StarChart,
  GreenBar,
  GrayBar,
  RowFormat,
  StarButton,
  ResetFilter,
  AverageTitle,
  Recommended,
  ReviewCount,
} from './RatingBreakdown.style';
import { Stars } from '../recommendedItems/RecommendedItems.style';

// TODO: say what percentage of people recommend this product
// say current filters
// have a link to reset filters
let avg = 0;

function RatingBreakdown({ metaData, filter, setFilter }) {
  const [isFilter, setIsFilter] = useState(false);
  const filterEntries = Object.entries(filter);
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
    let isAllFalse = true;
    for (let i = 1; i < Object.keys(tempObj).length + 1; i += 1) {
      if (tempObj[i.toString()]) {
        isAllFalse = false;
      }
    }
    if (isAllFalse) {
      tempObj = resetState(true);
    }
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
      percentages.push(((60 * Number(ratingsObj[i.toString()])) / allRatings));
    }
  }
  // converting filter to array
  return !metaData.ratings ? null : (
    <div>
      <RowFormat>
        <AverageTitle>{avg}</AverageTitle>
        {/* <FiveStarRating /> */}
        <Stars style={{ '--rating': `${((avg / 5) * 100)}%` }} />
      </RowFormat>
      {isFilter ? <ResetFilter onClick={() => resetState(true)}>Reset Filter</ResetFilter> : <div><br /> <br /></div>}
      {filterEntries.map((entry) => {
        if (entry[1] && isFilter) {
          return (
            <div>
              {entry[0]}
              {' '}
              star rating filter applied.
            </div>
          );
        }
      })}
      <Recommended>
        { ((Number(metaData.recommended.true)
        / (Number(metaData.recommended.false)
        + Number(metaData.recommended.true))) * 100).toFixed(0) }
        % of reviews recommend this product
      </Recommended>
      <StarChart>
        {percentages.map((percentage, index) => (
          <RowFormat key={index}>
            <StarButton value={index + 1} onClick={(e) => filterBy(e)}>
              {index + 1}
              {' '}
              Stars
            </StarButton>
            <GreenBar inputWidth={`${percentage}%`} />
            <GrayBar inputWidth={`${(60 - percentage)}%`} />
            <ReviewCount>
              {metaData.ratings[index + 1]}
            </ReviewCount>
          </RowFormat>
        ))}
      </StarChart>
    </div>
  );
}

export default RatingBreakdown;
