import styled from 'styled-components';

// Goes inside Related Product and YourOutfit
const Carousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 30%;
  border: red solid 2px;
`;
const CarouselContainer = styled.div`
  position: relative;
  padding: 1rem 0;
  border: green solid 2px;

`;

// Goes inside RecommendedItems
const RIMasterContainer = styled.div`
  border: black solid 2px;
`;
const RICenterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border: blue solid 2px;
`;

// Goes inside Card
const StyledCard = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 15rem;
  background: green;
  padding: 1rem;
`;
const ActionButton = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
`;
const RelatedAction = styled(ActionButton)`
  background: yellow;
`;
const OutfitAction = styled(ActionButton)`
  background: red;
`;

export {
  Carousel,
  CarouselContainer,
  RelatedAction,
  RICenterContainer,
  RIMasterContainer,
  OutfitAction,
  StyledCard,
};
