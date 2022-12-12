import styled from 'styled-components';

const StarChart = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 200px;
  width: 300px;
  // border: solid;
  margin-right: 20px;
`;

const RowFormat = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const StarButton = styled.button`
  display: flex;
  justify-content: flex-start;
  font-family: poppins;
  background: none;
  font-size: 16px;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
  width: 22%

`;

const ResetFilter = styled(StarButton)`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  width: 100%;
  // border: solid;
`;

const GreenBar = styled.div`
  box-sizing: border-box;
  background-color: #14453D;
  width: ${(p) => (p.inputWidth ? p.inputWidth : '25%')};
  margin-left: 5%;
  height: 20px;
`;

const AverageTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-right: 25px;
  // border: solid;
`;

const GrayBar = styled(GreenBar)`
  background-color: lightgray;
  margin-left: 0%;
`;

const Recommended = styled.div`
  font-size: 14px;
`;

const ReviewCount = styled.div`
  width: 8%;
  margin-left: 5px;
`;

export {
  GrayBar,
  GreenBar,
  StarChart,
  RowFormat,
  StarButton,
  ResetFilter,
  AverageTitle,
  Recommended,
  ReviewCount,
};
