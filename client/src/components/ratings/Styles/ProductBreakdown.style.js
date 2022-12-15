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

const FitChartDescriptions = styled.div`
display: flex;
align-items: center;
margin-left: 25%;
font-size: 14px;
justify-content: space-between;
`;

const AttributeStyle = styled.div`
width: 75%;
background-color: lightgray;
height: 7px;
`;

const DataStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
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
  border-top: 12px solid;
  color: ${(props) => (props.dark ? '#14453D' : '#6e66ab')};
`;

export {
  FitChart,
  FitChartContent,
  AttributeStyle,
  DataStyle,
  ArrowDown,
  FitChartDescriptions,
};
