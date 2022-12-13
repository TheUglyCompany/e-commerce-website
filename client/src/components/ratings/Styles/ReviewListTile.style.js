import styled from 'styled-components';

const TileStyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
align-content: space-between;
flex: 1;
overflow: auto;
margin: 10px;
padding: 10px;
border: 1px solid;
`;

const CardSummary = styled.h4`
display: flex;
align-items: flex-start;
height: 40px;
// border-style: solid;
flex-wrap: no-wrap;
font-weight: 800;
`;

const HelpfulButton = styled.button`
  font-family: poppins;
  background: none;
  font-size: 16px;
  border: none;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  text-decoration: underline;
  cursor: pointer;
`;

const InteractiveLine = styled.div`
display: flex;
// border: solid;
`;

const CardInfo = styled.div`
display: flex;
// border-style: solid;
width: 100%;
height: 20px;
justify-content: space-between;
`;

const Body = styled.div`
display: flex;
// border-style: solid;
flex-wrap: wrap;
`;

const OwnerResponse = styled.div`
// border-style: solid;
background-color: lightgray;
width: calc(100% - 70px);
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
  InteractiveLine,
};
