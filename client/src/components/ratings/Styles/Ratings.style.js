import styled from 'styled-components';
import {
  ModalContainer,
  ModalContent,
  XSpan,
} from '../../qAndA/QandA.style';

const RatingsAndReviews = styled.div`
font-family: poppins;
  flex: 1;
  display: flex;
  width: 100%;
  align-content: space-apart;
`;

const RatingStyle = styled.div`
  flex: 0.5;
  margin-left: 5%
`;

const ReviewStyle = styled.div`
  flex: 1;
  margin-bottom: 30px;
`;

const OuterMostLayer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
`;

const ButtonContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-right: 15%;
  margin-left: 50%;
`;
// Modal Styles
const RRModalContent = styled(ModalContent)`
display: flex;
flex-direction: column;
align-items: center;
align-content: space-around;
width: 800px;
height: 80vh;
padding: 10px;
top: 10%;
overflow: auto;
bottom: 10%;
`;

const ModalGroup = styled.div`
// border: solid;
display: flex;
flex-direction: column;
align-item: flex-start;
width: 100%;
`;

const ModalLine = styled.div`
// border: solid;
display: flex;
width 100%;
margin: 10px;
`;

const ModalLabel = styled.div`
flex: .25;
flex-wrap: no wrap;
// border: solid;
`;

const ModalRating = styled.div`
text-align: center;
margin: 10px;
`;

const ModalData = styled.div`
flex: 1;
display: flex;
// border: solid;
// margin: 10px;
`;

const ModalLabelText = styled.div`
flex: .25;
flex-wrap: no wrap;

`;

const ModalDataText = styled.div`
flex: 1;
// border: solid;

`;

const SingleLineTextField = styled.input`
  height: 25px;
  width: 99%;
  text-align: left;
  box-sizing: border-box;
`;

const MultiLineTextField = styled.textarea`
height: 100px;
width: 99%;
overflow: auto;
font-family: poppins;
font-weight: light;
font-size: 12;
overflow: hidden;
resize: none;
`;

const RRXSpan = styled.div`
position: sticky;
font-family: poppins;
margin-right: 100%;
cursor: pointer;
font-size: 24px;
`;

const CharGroup = styled.span`
display: flex;
flex-direction: column;
align-items: center;
margin: 5px;
font-size: 12px;
width: 20%;
text-align: center;
`;

const ReqAst = styled.span`
color: red !important;
`;

const RadioButtons = styled.input`
display: none;
`;

const RadioButtonLabels = styled.label`
display: inline-block;
font-size: 20px;
font-family: Times;
color: ${(props) => (props.isClicked ? '#c2bf0a' : 'gray')};
`;

export {
  RatingsAndReviews,
  RatingStyle,
  ReviewStyle,
  OuterMostLayer,
  ButtonContainer,
  RRModalContent,
  ModalLabel,
  ModalData,
  ModalLabelText,
  ModalDataText,
  ModalLine,
  ModalGroup,
  SingleLineTextField,
  MultiLineTextField,
  RRXSpan,
  CharGroup,
  ModalRating,
  ReqAst,
  RadioButtons,
  RadioButtonLabels,
};
