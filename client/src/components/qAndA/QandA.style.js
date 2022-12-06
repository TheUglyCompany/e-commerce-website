import styled from 'styled-components';

const UnderlineTextButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: grey;
  cursor: pointer;
  text-decoration: underline;
`;

const HelpfulButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: grey;
  cursor: pointer;
`;

const LoadMoreButton = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  padding: 0;
  color: black;
  cursor: pointer;
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
  top: 50%;
  left: 50%;
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;

const OutermostLayer = styled.div`
  max-height: 50vh;
  overflow: auto;
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
};
