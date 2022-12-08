import React from 'react';
import QuestionsList from './QuestionsList';
import { QandAStyle } from './QandA.style';

function QandA({ product }) {
  return (
    <QandAStyle>
      {/* <div>
        <h3>Questions & Answers</h3>
      </div> */}
      <div>
        <QuestionsList productId={product.id} productName={product.name} />
      </div>
    </QandAStyle>
  );
}

export default QandA;
