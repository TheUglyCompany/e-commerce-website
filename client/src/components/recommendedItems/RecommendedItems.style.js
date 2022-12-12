import styled from 'styled-components';

const AddToOutfitCard = styled.div`
  display: inline-block;
  margin: 2px 4px;
  padding: 10px;
  height: 400px;
  width: 250px;
  text-align: center;
  background: linear-gradient( #d3c9dd8f, #bcb0f19f 80%);
  border-radius: 5px;

  box-sizing: border-box;
  scroll-snap-align: center;
  overflow: hidden;
`;

const AddToOutfitText = styled.p`
position: relative;
font-size: 20px;
top: -40%
`;

const Carousel = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  gap: 1.5%;
  margin: auto;
  padding: 0 8%;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: inline mandatory;
  width: 80%;
  /* border: black 2px solid; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  /* border: blue 2px solid; */
`;

const StyledCard = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 400px;
  scroll-snap-align: center;
  width: 250px;
  min-width: 200px;
  padding: 10px;
  background: linear-gradient( #d3c9dd8f, #bcb0f19f 80%);
  border-radius: 5px;
  overflow: hidden;
`;

const ActionButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  width: 20px;
  height: 20px;
  font-size: 15px;
`;
const RelatedAction = styled(ActionButton)`
  background: yellow;
  &::before{
    content: '*'
  }
`;

const OutfitAction = styled(ActionButton)`
  background: red;
  &::before{
    content: 'X'
  }
`;

const NavigationButton = styled.button`
position: absolute;
width: 80px;
height: 100%;
border: none;
color: rgba(0, 0, 0, 0.3);
font-size: 30px;
transition: color 0.1s;
opacity: 0.4;
transition: opacity 0.5s ease;
&:hover{
  opacity: 1;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}
`;

const PreviousButton = styled(NavigationButton)`
  left: 10%;
  background: linear-gradient(270deg, rgba(161, 143, 162, 0), rgba(161, 143, 162, 0.8));
  &::before{
    content: '<'
  }
`;

const NextButton = styled(NavigationButton)`
right: 10%;
background: linear-gradient(90deg, rgba(161, 143, 162, 0), rgba(161, 143, 162, 0.8));
&::before{
  content: '>'
}
`;

const PlusText = styled.p`
  margin: 0;
  position: relative;
  top: 25%;
  font-size: 200px;
  color: gray;
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
  Carousel,
  CarouselContainer,
  Stars,
  StyledCard,
  RelatedAction,
  OutfitAction,
  ThumbnailImg,
};
