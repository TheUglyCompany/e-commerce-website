import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    outline: 0;
    margin: -20px;
    padding: -20px;
    border: 0;
    overflow-x: hidden;
}`;

const AppWrap = styled.div`
  width: 100%,
  height: 100%
  border: 1px solid;
  margin: 0px;
  background: ${(props) => (props.dark ? '#555555' : '#f4f3ef')};
  color: ${(props) => (props.dark ? '#f4f3ef' : 'black')};
`;

const HeaderDiv = styled.div`
  overflow: hidden;
  display: block;
  width: 100%;
  /* padding: 20px 10% 0px 10%; */
  margin: 0px auto;
  font-family: Roboto;
  font-size: 50px;
  font-weight: Bold;
  vertical-align: top;
  position: sticky;
  top: 0px;
  background: ${(props) => (props.dark ? '#14453D' : '#6e66ab')}; // 52489C
  z-index: 2;
  /* border: 1px solid; */
`;

const HeaderContentDiv = styled.div`
  overflow: hidden;
  width: 70%;
  height: 100px;
  margin: 0px auto;
  padding: 0px 20px;
  font-family: Roboto;
  font-size: 50px;
  font-weight: Bold;
  z-index: 2;
  /* border: 1px solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonHeader = styled.span`
  /* border: 1px solid; */
  display: flex;
  align-items: center;
`;

const SiteName = styled.span`
  font-family: Roboto;
  font-size: 60px;
  font-weight: Bold;
  max-height: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  overflow: hidden;
  /* border: 1px solid; */
`;

const Cart = styled.span`
  /* border: 1px solid; */
  display:table-cell;
  vertical-align:middle;
`;

const DarkButton = styled.button`
  border-radius: 1px;
  border: 1px solid;
  color: ${(props) => (props.dark ? 'white' : 'black')};
  background-color: transparent;
  padding: 5px;
  width: 100px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  font-size: 10px;
  text-transform: uppercase;
`;

export {
  GlobalStyle,
  AppWrap,
  HeaderDiv,
  HeaderContentDiv,
  ButtonHeader,
  SiteName,
  Cart,
  DarkButton,
};
