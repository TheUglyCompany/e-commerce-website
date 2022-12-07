import styled from 'styled-components';

const RatingsAndReviews = styled.div`
  flex: 1;
  display: flex;
  width: 80%;
  align-content: center;
`;

const RatingStyle = styled.div`
  flex: 0.5;
  margin-left: 10%
`;

const ReviewStyle = styled.div`
  flex: 1;
  margin-right: 10%
`;

const OuterMostLayer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.span`
  display: flex;
  justify-content: center;
`;

export {
  RatingsAndReviews,
  RatingStyle,
  ReviewStyle,
  OuterMostLayer,
  ButtonContainer,
};
