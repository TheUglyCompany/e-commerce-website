import React, { useState } from 'react';
import FiveStarRating from '../sharedComponents/FiveStarRating';
import {
  StarChart,
  GreenBar,
  GrayBar,
  BarContainer,
  StarButton,
} from './RatingBreakdown.style';

function RatingBreakdown({ metaData }) {
  const percentages = [];
  // get review metadata
  console.log('metaData: ', metaData);
  console.log('allratings: ', metaData.ratings);// object with 1-5 as keys and a string of number of ratings
  const ratingsObj = metaData.ratings;
  // total
  if (metaData.ratings) { //Todo: make this
    const allRatings = (Number(ratingsObj['1']) + Number(ratingsObj['2']) + Number(ratingsObj['3']) + Number(ratingsObj['4']) + Number(ratingsObj['5']));

    // adding percentages to array
    for (let i = 1; i <= 5; i += 1) { // 75% is 100% so I only multiply by 75
      percentages.push(((75 * Number(ratingsObj[i.toString()])) / allRatings));
    }
    console.log(allRatings);
    console.log(percentages);
  }


  return !metaData.ratings ? null : (
    <div>
      RatingBreakdown
      <FiveStarRating />
      <StarChart>
        {percentages.map((percentage, index) => (
          <BarContainer>
            <StarButton>
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
