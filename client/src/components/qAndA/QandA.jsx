import React from 'react';
import QuestionsList from './QuestionsList';
import { QandAStyle } from './QandA.style';

function QandA({
  product, dark, showModal, setShowModal,
}) {
  return (
    <QandAStyle>
      <QuestionsList
        productId={product.id}
        productName={product.name}
        dark={dark}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </QandAStyle>
  );
}

export default QandA;
