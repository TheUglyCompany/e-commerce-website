import React from 'react';
import AnswerList from './AnswerList';

function Question({ question }) {
  console.log('Question: ', question);
  return (
    <div id="Question">
      {' '}
      <strong>
        Q:
        {' '}
        {question.question_body}
      </strong>
      {' '}
      Helpful?
      {' '}
      <u>Yes</u>
      {' '}
      (
      {question.question_helpfulness}
      )
      {' '}
      | Report
      {' '}
      <div id="AnswerList">
        <AnswerList questionId={question.question_id} />
      </div>
    </div>
  );
}

export default Question;
