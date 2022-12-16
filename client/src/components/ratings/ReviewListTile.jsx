import React, { useState } from 'react';
import { format } from 'date-fns';
import {
  CardSummary,
  HelpfulButton,
  OwnerResponse,
  Body,
  CardInfo,
  TileStyle,
  InteractiveLine,
  Recommended,
} from './Styles/ReviewListTile.style';
import { Check } from '../overview/Overview.style';
import { Stars } from '../recommendedItems/Styles/RecommendedItems.styles';
import { AnswerImageStyle, AnswerImageZoom, ModalContainer } from '../qAndA/QandA.style';

// convert the below to HelpfulButtons

function ReviewListTile({ review, postFeedback, dark }) {
  const [zoom, setZoom] = useState(false);
  const [isShortened, setIsShortened] = useState(true);
  const [reported, setReported] = useState(false);
  const [helpfulled, setHelpfulled] = useState(false);
  const [imageSource, setImageSource] = useState('');

  return (
    <TileStyle>
      {' '}
      <CardInfo>
        <div>
          <Stars color={dark ? '#14453D' : '#6e66ab'} style={{ '--rating': `${(review.rating * 20)}%` }} />
        </div>
        <div>
          {' '}
          {review.reviewer_name}
          {', '}
          {format(new Date(review.date), 'MMMM d, yyyy')}
          {' '}
        </div>
      </CardInfo>
      <CardSummary>
        {review.summary}
      </CardSummary>
      {/*
      eslint-disable-next-line no-nested-ternary
      */}
      {review.body.length <= 250
        ? (
          <Body>
            {review.body}
          </Body>
        ) : (
          isShortened
            ? (
              <Body>
                {review.body.slice(0, 250)}
                <HelpfulButton
                  dark={dark}
                  onClick={() => setIsShortened(false)}
                >
                  Show More
                </HelpfulButton>
              </Body>
            ) : (
              <Body>
                {review.body}
                <HelpfulButton
                  dark={dark}
                  onClick={() => setIsShortened(true)}
                >
                  Show Less
                </HelpfulButton>
              </Body>
            )
        )}
      {review.recommend ? (
        <Recommended dark={dark}>
          <Check
            style={{
              position: 'relative',
              top: '0',
              left: '0',
              marginRight: '6px',
              height: '20px',
              width: '20px',
            }}
            dark={dark}
          >
            <img src="https://i.imgur.com/5bqYJip.png" width="10px" alt="" />
          </Check>
          {' '}
          I recommend this product
        </Recommended>
      ) : null}
      {review.response ? <OwnerResponse>{review.response}</OwnerResponse> : null}
      <div>
        {review.photos?.length !== 0
          ? review.photos.map((photo, index) => (
            !zoom
              ? <AnswerImageStyle src={photo.url} alt="" onClick={(e) => { setZoom(!zoom); setImageSource(e.target.src); }} key={index} dark={dark} />
              : (
                <ModalContainer>
                  <AnswerImageZoom src={imageSource} alt="" onClick={() => { setZoom(!zoom); }} key={index} dark={dark} defer />
                </ModalContainer>
              )
          )) : null}
      </div>
      <InteractiveLine dark={dark}>
        <HelpfulButton
          value="helpful"
          id={review.review_id}
          onClick={(e) => {
            if (!helpfulled) {
              postFeedback(e.target.value, e.target.id);
              setHelpfulled(true);
            } else {
              console.log('Already helpfulled!');
            }
          }}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          dark={dark}
        >
          Helpful?
        </HelpfulButton>
        Yes
        {' ('}
        {helpfulled ? review.helpfulness + 1 : review.helpfulness}
        {') '}
        <HelpfulButton
          value="report"
          id={review.review_id}
          onClick={(e) => {
            if (!reported) {
              postFeedback(e.target.value, e.target.id);
              setReported(true);
            } else {
              console.log('already reported');
            }
          }}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
          dark={dark}
        >
          Report
        </HelpfulButton>
      </InteractiveLine>
    </TileStyle>
  );
}

export default ReviewListTile;
