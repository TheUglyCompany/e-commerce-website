import React from 'react';
import { format } from 'date-fns';

function Answer({ answer }) {
  const { date } = answer;
  const formatDate = format( new Date(date), 'MMMM d, yyyy');
  return (
    <div id="answer">
      <br />
      <strong>A: </strong>
      {answer.body}
      <br />
      <br />
      <div id="signature">
        by
        {' '}
        {answer.answerer_name}
        ,
        {' '}
        {formatDate}
        {' '}
        | Helpful?
        {' '}
        <u>Yes</u>
        {' '}
        (
        {answer.helpfulness}
        ) | Report
        <br />
        <br />
      </div>
    </div>
  );
}

export default Answer;
