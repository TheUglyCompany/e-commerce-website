import styled from 'styled-components';

const UnderlineTextButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: black;
  cursor: pointer;
  text-decoration: underline;
  font-size: 18px;
`;

const HelpfulButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: black;
  cursor: pointer;
  font-size: 18px;
`;

const LoadMoreButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  padding: 0;
  color: black;
  cursor: pointer;
  font-size: 18px;
`;

const ModalContainer = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(0,0,0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 35px;
  border-radius: 3px;
  min-height: 300px;
  max-height: 100%;
  max-width: 100%;
  min-width: 500px;
`;

const OutermostLayer = styled.div`
  max-height: 50vh;
  overflow: auto;
  border: 1px solid;
`;

const QuestionStyle = styled.div`
  justify-content: space-around;
  border: 1px solid;
  padding: 10px;
  margin: 5px 5px;
  letter-spacing: 0.1em;
  font-size: 20px;
`;

const AnswerStyle = styled.div`
  border: 1px solid;
  padding: 10px;
`;

const SearchBarStyle = styled.div`
  position: block;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SearchBarInput = styled.input`
  type: text;
  width: 90%;
  height: 25px;
  font-size: 20px;
  line-height: 3;
  border-radius: 5px;
`;

const ButtonSpan = styled.span`
  display: flex;
  float: right;
  letter-spacing: 0.1em;
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
};
