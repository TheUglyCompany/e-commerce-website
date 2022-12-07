import styled from 'styled-components';

const StarChart = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 200px;
  width: 300px;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
  width: 20%
`;

const GreenBar = styled.div`
  box-sizing: border-box;
  background-color: green;
  width: ${(p) => (p.inputWidth ? p.inputWidth : '25%')};
  margin-left: 5%;
  height: 20px;
`;

const GrayBar = styled(GreenBar)`
  background-color: gray;
  margin-left: 0%;
`;
export {
  GrayBar,
  GreenBar,
  StarChart,
  BarContainer,
  StarButton,
};
