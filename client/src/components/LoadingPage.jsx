import React from 'react';
import styled from 'styled-components';

const LoadingStyles = styled.div`
  display: flex;
  justify-content: center;
  font-family: ROBOTO;
  vertical-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #14453D;
  border-bottom: 16px solid #8B7DD1;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

function LoadingPage() {
  return (
    <div>
      <LoadingStyles>
        <Spinner />
      </LoadingStyles>
    </div>
  );
}

export default LoadingPage;
