import styled from 'styled-components';

const Reviews = styled.div`
diplay: inline-flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 80%;
max-height: 100vh;
overflow: auto;
`;

const ShowMore = styled.button`
flex-direction: row;
`;

export {
  Reviews,
  ShowMore,
};
