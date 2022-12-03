import React from 'react';
import QASearchBar from './QASearchBar';
import QuestionsList from './QuestionsList';

function QandA({ productId }) {
  return (
    <div>
      <QASearchBar />
      <QuestionsList productId={productId} />
    </div>
  );
}

export default QandA;
