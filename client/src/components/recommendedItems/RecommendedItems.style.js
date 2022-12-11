import styled from 'styled-components';

const AddToOutfitCard = styled.div`
  display: inline-block;
  margin: 2px 4px;
  padding: 10px;
  height: 400px;
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  text-align: center;
  background: linear-gradient( #d3c9dd8f, #bcb0f19f 80%);
  border: 1px solid black;
  border-radius: 5px;
`;

const AddToOutfitText = styled.p`
position: relative;
font-size: 20px;
top: -40%
`;

const CardGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 30%;
  justify-content: space-evenly;
  justify-items: center;
  @media (max-width: 1300px) {
    grid-auto-flow: row;
    gap: 10px;
  }
`;

const Carousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  margin: auto;
  overflow-x: auto;
  scroll-behavior: smooth;
  width: 80%;
`;

const CarouselContainer = styled.div`
  position: relative;
`;

const PlusText = styled.p`
  margin: 0;
  position: relative;
  top: 25%;
  font-size: 200px;
  color: gray;
`;

const NavigationButton = styled.a`
  text-decoration: none;
  position: absolute;
  width: 80px;
  height: 100%;
  border: none;
  color: rgba(0, 0, 0, 0.3);
  font-size: 30px;
  transition: color 0.1s;
  &:hover{
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;

const StyledCard = styled.div`
  margin: 0 10px;
  height: 400px;
  min-width: 200px;
  width: 300px;
  padding: 10px;
  background: linear-gradient( #d3c9dd8f, #bcb0f19f 80%);
  border-radius: 5px;
  overflow: hidden;
`;

const PreviousButton = styled(NavigationButton)`
  left: 0;
  background: linear-gradient(270deg, rgba(161, 143, 162, 0), rgba(161, 143, 162, 0.8));

  &::before{
    content: '<'
  }
`;

const NextButton = styled(NavigationButton)`
  right: 0;
  background: linear-gradient(90deg, rgba(161, 143, 162, 0), rgba(161, 143, 162, 0.8));
  &::before{
    content: '>'
  }
`;

// requires --rating css variable inside component
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

const ThumbnailImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 60%;
  background: #77788554;
  object-fit: contain;
`;

export {
  AddToOutfitCard,
  AddToOutfitText,
  NextButton,
  PlusText,
  PreviousButton,
  CardGroup,
  Carousel,
  CarouselContainer,
  Stars,
  StyledCard,
  ThumbnailImg,
};
