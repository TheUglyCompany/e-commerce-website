import styled from 'styled-components';

// Goes inside Related Product and YourOutfit
const Carousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 5rem;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 2rem;
`;
const CarouselContainer = styled.div`
  position: relative;
`;
const CarouselNavigator = styled.img`
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 45%;
  cursor: pointer;
`;
const NextCard = styled(CarouselNavigator)`
  right: -5rem;
`;
const PreviousCard = styled(CarouselNavigator)`
  left: -5rem;
`;

// Goes inside RecommendedItems
const RIMasterContainer = styled.div`
`;
const RICenterContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

// Goes inside Card & Modal
const Card = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  height: 400px;
  width: 250px;
  border-radius: 5px;
  overflow: hidden;
  scroll-snap-align: start;
  font-family: poppins;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  .action-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 0.35rem;
    opacity: 0;
    /* cursor: pointer; */
    display: flex;
  }
  &:hover .action-button {
      opacity: 0.9;
    }
  .icon {
    margin: 0.7rem auto 0;
  }
  .card-information-container {
    padding: 0.2rem 1rem 1rem;
  }
  .card-information {
    line-height: 0.2rem;
    word-wrap: break-word;
  }
  .category {
    font-family: 'poppins';
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding-bottom: 0.4rem;
  }
  .name {
    font-family: 'ROBOTO';
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 0.4rem;
  }
  .price {
    font-family: 'poppins';
    padding-bottom: 0.6rem;
  }
  .ratings {
    font-family: 'poppins';
    font-weight: 500;
    font-size: 0.8rem;
  }
`;
const StyledCard = styled(Card)`
  background: ${(props) => (props.dark ? '#84A98C' : '#9387c9')};
  .card-image {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }
 `;
const AddToOutfitCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background: ${(props) => (props.dark ? '#84A98C' : '#9387c9')};
  .plus-container {
    position: relative;
    width: 250px;
    height: 60%;
    top: 0%;
    background: ${(props) => (props.dark ? '#92ad98' : '#a69dcc')};
    text-align: center;
  }
  .plus {
    vertical-align: middle;
    font-family: 'poppins';
    font-size: 6rem;
    font-weight: 300;
    line-height: 6rem;
  }
  p {
    font-family: 'ROBOTO';
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    padding-top: 1.8rem;
  }
`;

const Stars = styled.div`
  display: inline-block;
  font-size: 20px;
  font-family: Times;
  line-height: 1;
  &::before {
    content: '★★★★★';
    letter-spacing: 2px;
    background: linear-gradient(90deg, #c2bf0a var(--rating), #9e9e9e var(--rating));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ComparisonContainer = styled.div`
  position: relative;
  top: 2rem;
  display: grid;
  justify-items: center;
  align-items: end;
  grid-template-columns: repeat(3, 1fr);
`;

export {
  AddToOutfitCard,
  Carousel,
  CarouselContainer,
  ComparisonContainer,
  NextCard,
  PreviousCard,
  RICenterContainer,
  RIMasterContainer,
  Stars,
  StyledCard,
};
