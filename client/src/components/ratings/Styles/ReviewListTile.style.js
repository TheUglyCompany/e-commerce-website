import styled from 'styled-components';

const TileStyle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
align-content: space-between;
justify-content: space-between;
padding: 20px;
margin: 10px;
margin-bottom: 30px 20px 30px 20px;
/* border: 1px solid; */
background-color: ${(props) => (props.dark ? '#616161' : '#e0e0e0')};
border-radius: 2px;
`;

const CardSummary = styled.h4`
display: flex;
align-items: flex-start;
font-family: roboto;
font-weight: bold;
font-size: 18px;
margin-top: 5px;
margin-bottom: 30px;
// border-style: solid;
// flex-wrap: no-wrap;
`;

const HelpfulButton = styled.button`
  font-family: poppins;
  background: none;
  font-size: 14px;
  border: none;
  color: ${(props) => (props.dark ? 'white' : 'gray')};
  text-decoration: underline;
  cursor: pointer;
`;

const InteractiveLine = styled.div`
display: flex;
height: 1rem;
font-size: 14px;
color: ${(props) => (props.dark ? 'white' : 'gray')};
// border: solid;
`;

const CardInfo = styled.div`
display: flex;
// border-style: solid;
width: 100%;
height: 2em;
color:  ${(props) => (props.dark ? 'white' : 'gray')};
font-size: 14px;
justify-content: space-between;
`;

const Body = styled.div`
// border-style: solid;
word-wrap: break-word;
width: 100%;
margin-bottom: 5px;
font-size: 16px;
`;

const OwnerResponse = styled.div`
// border-style: solid;
background-color: ${(props) => (props.dark ? 'gray' : 'lightgray')};
width: calc(100% - 70px);
margin: 10px;
padding: 20px;
`;

const Recommended = styled.div`
// border: solid;
display: flex;
justify-content: space-between;
margin: 5px;
font-size: 14px;
`;

export {
  CardSummary,
  HelpfulButton,
  OwnerResponse,
  Body,
  CardInfo,
  TileStyle,
  InteractiveLine,
  Recommended,
};
