import styled from 'styled-components';

const RatingsAndReviews = styled.div`
  display: flex;
  width: 100%;
`;

const RatingStyle = styled.div`
  flex: 0.5;
  justify-content: flex-start;
`;

const ReviewStyle = styled.div`
  flex: 1;
  justify-content: flex-end;
`;

export {
  RatingsAndReviews,
  RatingStyle,
  ReviewStyle,
};
