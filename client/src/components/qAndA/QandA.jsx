import React from 'react';
import QuestionsList from './QuestionsList';

function QandA({ product }) {
  return (
    <div>
      <h3>Questions & Answers</h3>
      <QuestionsList productId={product.id} productName={product.name} />
    </div>
  );
}

export default QandA;
