import styled from 'styled-components';

const Reviews = styled.div`
display: flex;
flex-direction: column;
width: 70%;
align-items: flex-start;
max-height: 100vh;
overflow: auto;
`;

const ShowMore = styled.button`
display: flex;
flex-direction: row;
`;

export {
  Reviews,
  ShowMore,
};
