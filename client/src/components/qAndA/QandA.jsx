import React from 'react';
import QuestionsList from './QuestionsList';

function QandA({ productId }) {
  return (
    <div>
      <QuestionsList productId={productId} />
    </div>
  );
}

export default QandA;
