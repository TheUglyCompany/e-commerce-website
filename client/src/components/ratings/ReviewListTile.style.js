import styled from 'styled-components';

const TileStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
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
justify-content: space-between;
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
