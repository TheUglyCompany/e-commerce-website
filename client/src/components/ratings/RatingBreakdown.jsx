import React, { useState } from 'react';
import FiveStarRating from '../sharedComponents/FiveStarRating';
import {
  StarChart,
  GreenBar,
  GrayBar,
  BarContainer,
  StarButton,
} from './RatingBreakdown.style';

let avg = 0;

function RatingBreakdown({ metaData }) {
  const percentages = [];
  // get review metadata
  console.log('metaData: ', metaData);
  console.log('allratings: ', metaData.ratings);// object with 1-5 as keys and a string of number of ratings
  const ratingsObj = metaData.ratings;
  // total
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

  return !metaData.ratings ? null : (
    <div>
      <h1>{avg}</h1>
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
