import styled from 'styled-components';

const FitChart = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
width: 300px;
margin-top: 20%;
// border: solid;
margin-right: 20px;
`;

const FitChartContent = styled.div`
display: flex;
align-items: center;
`;

const AttributeStyle = styled.div`
width: 75%;
background-color: lightgray;
height: 7px;
`;

const DataStyle = styled.div`
display: flex;
align-items: center;
width: 20%;
margin-right: 5%;
height: 40px;
`;

const ArrowDown = styled.span`
  width: 0;
  height: 0;
  margin-left: ${(p) => (p.inputWidth ? p.inputWidth : '25%')};
  position: absolute;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #52489C;
`;

export {
  FitChart,
  FitChartContent,
  AttributeStyle,
  DataStyle,
  ArrowDown,
};
