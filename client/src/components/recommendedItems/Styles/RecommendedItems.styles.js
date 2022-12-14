import styled from 'styled-components';

// Goes inside Related Product and YourOutfit
const Carousel = styled.div`
  /* display: grid;
  grid-auto-flow: column; */
  display: flex;
  gap: 5rem;
  /* white-space: nowrap; */
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  /* border: 1px dotted gray; */
  padding: 2rem;
  /* overscroll-behavior: contain; */
`;
const CarouselContainer = styled.div`
  position: relative;
  padding: 1rem 0;
  /* border: green solid 2px; */
`;
const CarouselNavigator = styled.img`
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 45%;
`;
const NextCard = styled(CarouselNavigator)`
  right: -5rem;
`;
const PreviousCard = styled(CarouselNavigator)`
  left: -5rem;
`;

// Goes inside RecommendedItems
const RIMasterContainer = styled.div`
  /* border: black solid 2px; */
`;
const RICenterContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  /* border: blue solid 2px; */
`;

// Goes inside Card & Modal
const Card = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  height: 450px;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  padding: 0.5rem;
  /* margin: 0 10px; */
  scroll-snap-align: start;
  font-family: poppins;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const StyledCard = styled(Card)`
  background: ${(props) => (props.dark ? '#84A98C' : '#A594F9')}
 `;
const AddToOutfitCard = styled(Card)`
  background: ${(props) => (props.dark ? '#84A98C' : '#A594F9')}
`;

const Stars = styled.div`
  display: inline-block;
  font-size: 20px;
  font-family: Times;
  line-height: 1;
  &::before {
    content: '★★★★★';
    letter-spacing: 2px;
    background: linear-gradient(90deg, #c2bf0a var(--rating), gray var(--rating));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ActionButton = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  padding: 0.3rem;
  width: 1rem;
  height: 1rem;
  border-radius: 0.35rem;
  opacity: 0.7;
  background: ${(props) => (props.dark ? '#84A98C' : '#A594F9')}
  `;
const RelatedAction = styled(ActionButton)`
  `;
const OutfitAction = styled(ActionButton)`
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
  OutfitAction,
  PreviousCard,
  RelatedAction,
  RICenterContainer,
  RIMasterContainer,
  Stars,
  StyledCard,
};
