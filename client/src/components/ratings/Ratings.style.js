import styled from 'styled-components';

const RatingsAndReviews = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  align-content: space-apart;
`;

const RatingStyle = styled.div`
  flex: 0.5;
  margin-left: 5%
`;

const ReviewStyle = styled.div`
  flex: 1;
  margin-right: 5%
  margin-bottom: 30px;
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
