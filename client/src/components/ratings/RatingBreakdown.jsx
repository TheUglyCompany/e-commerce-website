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
  RatingOverall,
} from './Styles/RatingBreakdown.style';
import { Stars } from '../recommendedItems/Styles/RecommendedItems.styles';

function RatingBreakdown({
  metaData,
  filter,
  setFilter,
  dark,
  prodAvg,
  reviewCount,
}) {
  const [isFilter, setIsFilter] = useState(false);
  const filterEntries = Object.entries(filter);
  // resets filter
  function resetState(bool) {
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
  function filterBy(value) {
    // console.log('value', typeof(value));
    let isAllTrue = true;
    let tempObj = { ...filter };
    for (let i = 1; i < Object.keys(tempObj).length + 1; i += 1) { // if any of the filters are false
      if (!filter[i.toString()]) {
        isAllTrue = false;
      }
    }
    if (isAllTrue) { // reset all filters to false
      tempObj = resetState(false); // this happens on initial filter click
    }
    tempObj[value] = !tempObj[value]; // activate filter
    let isAllFalse = true;
    for (let i = 1; i < Object.keys(tempObj).length + 1; i += 1) { // if any of the filters are true
      if (tempObj[i.toString()]) {
        isAllFalse = false;
      }
    }
    if (isAllFalse) { // reset all filters to true
      tempObj = resetState(true);
    }
    setFilter(tempObj);
  }

  const percentages = [];
  if (metaData.ratings) {
    // adding percentages to array
    for (let i = 1; i <= 5; i += 1) { // 58% is the total width of the bar
      percentages.push(((58 * Number(metaData.ratings[i.toString()])) / reviewCount));
    }
  }
  return !metaData.ratings ? null : (
    <RatingOverall>
      <RowFormat>
        <AverageTitle>{prodAvg}</AverageTitle>
        <Stars color={dark ? '#14453D' : '#6e66ab'} style={{ '--rating': `${(prodAvg * 20)}%` }} />
      </RowFormat>
      <div style={{ display: 'flex', fontFamily: 'roboto', fontWeight: 'bold' }}>
        { reviewCount }
        {' '}
        total reviews
      </div>
      {isFilter
        ? (
          <ResetFilter
            dark={dark}
            onClick={() => resetState(true)}
          >
            Reset Filter
          </ResetFilter>
        ) : <div><br /></div>}
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
        / (Number(metaData.recommended.false) + Number(metaData.recommended.true)))
        * 100).toFixed(0) }
        % of reviews recommend this product
      </Recommended>
      <StarChart>
        {percentages.map((percentage, index) => (
          <RowFormat key={index}>
            <StarButton dark={dark} value={index + 1} onClick={(e) => filterBy(e.target.value)}>
              {index + 1}
              {' '}
              Stars
            </StarButton>
            <GreenBar dark={dark} inputWidth={`${percentage}%`} />
            <GrayBar inputWidth={`${(58 - percentage)}%`} />
            <ReviewCount>
              {metaData.ratings[index + 1]}
            </ReviewCount>
          </RowFormat>
        ))}
      </StarChart>
    </RatingOverall>
  );
}

export default RatingBreakdown;
