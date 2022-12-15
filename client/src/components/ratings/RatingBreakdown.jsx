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
  console.log(metaData);
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
        <Stars style={{ '--rating': `${((prodAvg / 5) * 100)}%` }} />
      </RowFormat>
      {isFilter
        ? (
          <ResetFilter
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
            <StarButton dark={dark} value={index + 1} onClick={(e) => filterBy(e)}>
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
