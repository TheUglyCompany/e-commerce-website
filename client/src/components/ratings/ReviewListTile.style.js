import styled from 'styled-components';

const TileStyle = styled.div`
flex-direction: column;
align-items: flex-start;
flex: 1;
height: 300px;
// border-style: solid;
`;

const CardSummary = styled.h4`
display: flex;
align-items: flex-start;
// border-style: solid;
flex-wrap: wrap;
margin: 10px;
`;

const HelpfulButton = styled.button`
border: none;
background-color: white;
`;

const CardInfo = styled.div`
display: flex;
// border-style: solid;
justify-content: space-between;
`;

const Body = styled.div`
display: flex;
// border-style: solid;
flex-wrap: wrap;
max-width: 100%;
`;

const OwnerResponse = styled.div`
// border-style: solid;
background-color: lightgray;
margin: 10px;
padding: 20px;
`;

export {
  CardSummary,
  HelpfulButton,
  OwnerResponse,
  Body,
  CardInfo,
  TileStyle,
};
