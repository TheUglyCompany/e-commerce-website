import styled from 'styled-components';

const UnderlineTextButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: grey;
  cursor: pointer;
  text-decoration: underline;
  font-family: poppins;
  font-weight: light;
  font-size: 16px;
`;

const HelpfulButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: grey;
  cursor: pointer;
  font-family: poppins;
  font-weight: light;
  font-size: 16px;
`;

const LoadMoreButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  padding: 0;
  color: black;
  cursor: pointer;
  font-family: ROBOTO;
  font-size: 16px;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(0,0,0, 0.5);
  z-index: 1000;
  font-family: poppins;
  font-weight: light;
  font-size: 15px;
`;
const ModalTitle = styled.span`
  display: flex;
  justify-content: center;
  font-family: ROBOTO;
  font-size: 20px;
  font-weight: bold;
`;

const ModalDesc = styled.span`
  font-family: poppins;
  display: flex;
  justify-content: center;
  font-size: 15px;
`;

const ModalContent = styled.div`
  margin: auto;
  display: inline-block;
  justify-items: center;
  line-height: 1.4;
  background: #f1f1f1;
  border-radius: 3px;
  min-height: 50%;
  max-height: 100%;
  max-width: 100%;
  min-width: 50%;
  font-family: poppins;
  font-weight: light;
  font-size: 15px;
  border: 1px solid black;
`;

const ImageInputUpload = styled.input`
  font-family: poppins;
  font-weight: light;
  font-size: 15px;
`;

const XSpan = styled.span`
  position: absolute;
  display: flex;
  font-family: poppins;
  font-size: 10px;
  cursor: pointer;
`;

const TextFieldinput = styled.textarea`
  height: 90px;
  width: 90%;
  overflow: auto;
  font-family: poppins;
  font-weight: light;
  font-size: 12;
  resize: none;
`;

const NameFieldInput = styled.input`
  height: 25px;
  width: 80%;
  text-align: center;
`;

const EmailFieldInput = styled.input`
  height: 25px;
  width: 80%;
  text-align: center;
`;

const OutermostLayer = styled.div`
  max-height: 100vh;
  min-width: 70vw;
  overflow: auto;
  font-family: poppins;
  font-weight: light;
  font-size: 10px;
  width: 100%;
  justify-content: center;
  align-content: center;
`;

const QuestionStyle = styled.div`
  justify-content: space-around;
  padding: 10px;
  margin: 5px 5px;
  font-size: 15px;
`;

const AnswerStyle = styled.div`
  border: 1px solid;
  padding: 10px;
  max-height: 50vh;
  overflow: auto;
`;

const SearchBarStyle = styled.div`
  position: block;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBarInput = styled.input`
  text-align: center;
  type: text;
  width: 80%;
  height: 35px;
  font-size: 15px;
  line-height: 3;
  border: 1px solid black;
`;

const ButtonSpan = styled.span`
  display: flex;
  float: right;
`;

const StandardButton = styled.button`
  background: white;
  border-radius: 1px;
  border: 1px solid black;
  color: black;
  padding: 5px;
  margin: 10px;
  width: 200px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  height: 40px;
  text-transform: uppercase;
`;

const QandAStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const StandardButtonSpan = styled.div`
  display: flex;
  justify-content: center;
`;

const AnswerImageStyle = styled.img`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  margin: 5px;
`;

const QuestionBodySpan = styled.span`
  font-weight: bold;
  font-family: ROBOTO;
  font-size: 20px;
`;

const YesStyle = styled.span`
  font-weight: light;
  font-family: poppins;
  font-size: 15px;
  color: grey;
`;

const LoadMoreButtonSpan = styled.span`
  display: flex;
  justify-content: flex-start;
`;

const NoAnswerStyle = styled.span`
  display: flex;
  justify-content: center;
  font-family: ROBOTO;
  font-size: 15px;
`;

const NoQuestionsFoundStyle = styled.div`
  display: flex;
  justify-content: center;
  font-family: ROBOTO;
  font-size: 20px;
  font-weight: bold;
`;

const QATitle = styled.span`
  display: flex;
  justify-content: center;
  font-family: ROBOTO;
  font-size: 23px;
  font-weight: bold;
`;

const AnswerImageZoom = styled.img`
  display: absolute;
  top: 50px;
  left: 50px;
  width: 80%;
  height: 90%;
  background: black;
  z-index: 3;
  border: 5px solid black;
  /* cursor: pointer; */
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-family: ROBOTO;
  font-size: 15px;
  font-weight: bold;
  color: red;
`;

const UploadButton = styled.button`
  background: white;
  border-radius: 1px;
  border: 1px solid black;
  color: black;
  padding: 5px;
  margin: 10px;
  width: 100px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  height: 50px;
  text-transform: uppercase;
  align-self: center;
`;
// const ModalTitle = styled.h1`
//   margin: 0;
// `;

// const ModalHeaderFooter = styled.div`
//   padding: 10px;
// `;

// const ModalBody = styled.div`
// padding: 10px;
// border-top: 1px solid #eee;
// border-bottom: 1px solid #eee;
// `;

export {
  UnderlineTextButton,
  HelpfulButton,
  LoadMoreButton,
  ModalContainer,
  ModalContent,
  OutermostLayer,
  QuestionStyle,
  AnswerStyle,
  SearchBarStyle,
  ButtonSpan,
  SearchBarInput,
  StandardButton,
  QandAStyle,
  StandardButtonSpan,
  AnswerImageStyle,
  QuestionBodySpan,
  YesStyle,
  LoadMoreButtonSpan,
  NoAnswerStyle,
  NoQuestionsFoundStyle,
  XSpan,
  ModalTitle,
  ModalDesc,
  TextFieldinput,
  NameFieldInput,
  EmailFieldInput,
  ImageInputUpload,
  QATitle,
  AnswerImageZoom,
  ErrorMessage,
  UploadButton,
};
