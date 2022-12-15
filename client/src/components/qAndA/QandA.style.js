import styled from 'styled-components';

const UnderlineTextButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${(props) => (props.dark ? '#D3D3D3' : 'grey')};
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
  cursor: pointer;
  font-family: poppins;
  font-weight: light;
  font-size: 16px;
  color: ${(props) => (props.dark ? '#D3D3D3' : 'grey')};
`;

const LoadMoreButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  padding: 16px 0;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  cursor: pointer;
  font-family: ROBOTO;
  font-size: 16px;
  &:hover {
    color: gray;
  }
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
  font-size: 22px;
  font-weight: bold;
`;

const ModalDesc = styled.span`
  font-family: poppins;
  display: flex;
  justify-content: center;
  font-size: 15px;
  width: 500px;
`;

const ModalContent = styled.div`
  margin: auto;
  display: inline-block;
  justify-items: center;
  line-height: 1.4;
  background: ${(props) => (props.dark ? '#14453D' : '#8B7DD1')};
  border-radius: 3px;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  min-height: 70%;
  max-height: 100%;
  max-width: 100%;
  min-width: 80%;
  font-family: poppins;
  font-weight: light;
  font-size: 15px;
  border: 1px solid black;
  padding: 60px;
`;

const ImageInputUpload = styled.input`
  font-family: poppins;
  font-weight: light;
  font-size: 15px;
`;

const XSpan = styled.span`
  position: absolute;
  display: flex;
  font-family: ROBOTO;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;

const TextFieldinput = styled.textarea`
  height: 90px;
  width: 100%;
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
  min-width: 80vw;
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
  margin: 10px;
  font-size: 15px;
  border: 1px solid;
`;

const AnswerStyle = styled.div`
  padding: 10px 10px 0px 10px;
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
  border: ${(props) => (props.dark ? '1px solid white' : '1px solid black')};
  background-color: #f4f3ef;
  color: black;
  margin: 10px;
`;

const ButtonSpan = styled.span`
  display: flex;
  float: right;
`;

const StandardButton = styled.button`
  background: transparent;
  border-radius: 1px;
  border: 1px solid;
  color: ${(props) => (props.dark ? 'white' : 'black')};
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
  margin: 5px 5px 15px 5px;
`;

const AnswerImageStyle = styled.img`
  height: 100px;
  width: 100px;
  border: 1px solid;
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
  color: ${(props) => (props.dark ? '#D3D3D3' : 'grey')};
`;

const LoadMoreButtonSpan = styled.span`
  display: flex;
  justify-content: flex-start;
  margin: auto;
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
  margin: 10px;
  font-family: ROBOTO;
  font-size: 23px;
  font-weight: bold;
  margin: 5px;
`;

const AnswerImageZoom = styled.img`
  display: flex;
  position: fixed;
  top: 50px;
  // left: 50px;
  width: 80%;
  height: 80%;
  background: black;
  z-index: 3;
  border: 5px solid;
  /* cursor: pointer; */
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-family: ROBOTO;
  font-size: 15px;
  font-weight: bold;
  color: #8b0000;
`;

const UploadButton = styled.button`
  background: transparent;
  border-radius: 1px;
  border: 1px solid;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  padding: 5px;
  margin: 10px;
  width: 100px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  height: 40px;
  text-transform: uppercase;
  align-self: center;
`;

const ModalWrap = styled.div`
  margin: auto;
`;

const SubmitButton = styled.button`
  background: transparent;
  border-radius: 1px;
  border: 1px solid;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  padding: 5px;
  margin: 10px;
  margin-top: 30px;
  width: 200px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  height: 40px;
  text-transform: uppercase;
`;

const ImgUploadSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WarningMsg = styled(ModalDesc)`
  font-size: 10px;
`;

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
  ModalWrap,
  SubmitButton,
  ImgUploadSpan,
  WarningMsg,
};
