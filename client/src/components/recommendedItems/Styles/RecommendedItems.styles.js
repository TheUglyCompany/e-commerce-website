import styled from 'styled-components';

// Goes inside Related Product and YourOutfit
const Carousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  gap: 1rem;
  border: red solid 2px;
  overflow-x: auto;
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
const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 27rem;
  width: 18rem;
  background: linear-gradient( #d3c9dd8f, #bcb0f19f 80%);
  border-radius: 5px;
  padding: 0.5rem;
`;
const StyledCard = styled(Card)`

`;
const AddToOutfitCard = styled(Card)`
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
  AddToOutfitCard,
  Carousel,
  CarouselContainer,
  RelatedAction,
  RICenterContainer,
  RIMasterContainer,
  OutfitAction,
  Stars,
  StyledCard,
};
