import React from 'react';
import QuestionsList from './QuestionsList';
import { QandAStyle } from './QandA.style';

function QandA({
  product, dark,
}) {
  return (
    <QandAStyle>
      <QuestionsList
        productId={product.id}
        productName={product.name}
        dark={dark}
      />
    </QandAStyle>
  );
}

export default QandA;
