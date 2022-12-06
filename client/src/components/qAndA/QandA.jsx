import React from 'react';
import QuestionsList from './QuestionsList';

function QandA({ product }) {
  return (
    <div>
      <QuestionsList productId={product.id} productName={product.name} />
    </div>
  );
}

export default QandA;
