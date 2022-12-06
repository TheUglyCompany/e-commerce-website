import styled from 'styled-components';

const TileStyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 600px;
border-style: solid;
`;

const CardSummary = styled.h4`
flex-wrap: wrap;
`;

const HelpfulButton = styled.button`
flex-direction: row;
border: none;
background-color: white;
`;

const CardInfo = styled.div`
display: flex;
`;

const Body = styled.div`
flex-wrap: wrap;
`;

const OwnerResponse = styled.div`
background-color: grey;
`;

export {
  CardSummary,
  HelpfulButton,
  OwnerResponse,
  Body,
  CardInfo,
  TileStyle,
};
