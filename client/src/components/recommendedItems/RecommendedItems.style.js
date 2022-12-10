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

const Carousel = styled.div`
  display: flex;
  position: relative;
  margin: 40px 10px 40px 10px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  /* border: 2px solid black; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselContainer = styled.div`
  /* border: 2px solid black; */
`;

const PlusText = styled.p`
  margin: 0;
  position: relative;
  top: 25%;
  font-size: 200px;
  color: gray;
`;

const NavigationButton = styled.button`
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

const StyledCard = styled.div`
  display: inline-block;
  margin: 2px 4px;
  padding: 10px;
  height: 400px;
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  background: linear-gradient( #d3c9dd8f, #bcb0f19f 80%);
  border: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
  scroll-snap-align: start;
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
  ThumbnailImg,
};
