import styled from 'styled-components';

const RatingsAndReviews = styled.div`
font-family: poppins;
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

const Stars = styled.div`
  display: inline-block;
  font-size: 20px;
  font-family: Times;
  line-height: 1;

  &::before {
    content: '⭒⭒⭒⭒⭒';
    letter-spacing: 2px;
    background: linear-gradient(90deg, #d8d805 var(--rating), gray var(--rating));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export {
  RatingsAndReviews,
  RatingStyle,
  ReviewStyle,
  OuterMostLayer,
  ButtonContainer,
  Stars,
};
