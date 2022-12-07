import styled from 'styled-components';

const RatingsAndReviews = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RatingStyle = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  width: 400px;
`;

const ReviewStyle = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  width: 600px;
`;

export {
  RatingsAndReviews,
  RatingStyle,
  ReviewStyle,
};
