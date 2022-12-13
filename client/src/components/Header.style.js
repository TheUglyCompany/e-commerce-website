import styled from 'styled-components';

const AppWrap = styled.div`
  width: 100%,
  height: 100%
  border: 1px solid;
  margin: 0px;
  /* padding: 0px */
  background: ${(props) => (props.dark ? 'grey' : 'white')};
  color: ${(props) => (props.dark ? 'white' : 'black')};
`;

const HeaderDiv = styled.div`
  overflow: visible;
  display: block;
  width: 80%;
  margin: 10px auto;
  font-family: Roboto;
  font-size: 50px;
  font-weight: Bold;
  vertical-align: top;
  /* border: 1px solid; */
`;

const Title = styled.span`
  font-family: Roboto;
  font-size: 30px;
  font-weight: Bold;
  vertical-align: top;
`;

const Cart = styled.span`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 200;
  float: right;
`;

const DarkButton = styled.button`
  border-radius: 1px;
  border: 1px solid;
  color: black;
  padding: 5px;
  width: 100px;
  cursor: pointer;
  font-family: Roboto;
  font-weight: bold;
  font-size: 10px;
  text-transform: uppercase;
`;

export {
  AppWrap,
  HeaderDiv,
  Title,
  Cart,
  DarkButton,
};
