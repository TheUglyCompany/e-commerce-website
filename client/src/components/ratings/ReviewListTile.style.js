import styled from 'styled-components';

const TileStyle = styled.div`
flex-direction: column;
align-items: flex-start;
flex: 1;
border-style: solid;
`;

const CardSummary = styled.h4`
flex-wrap: wrap;
`;

const HelpfulButton = styled.button`
border: none;
background-color: white;
`;

const CardInfo = styled.div`
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
