import React from 'react';

function Answer({ answer }) {
  return (
    <div id="answer">
      <strong>A: </strong>
      {answer.body}
      <div id="signature">
        by
        {' '}
        {answer.answerer_name}
        ,
        {' '}
        {answer.date}
        {' '}
        | Helpful?
        {' '}
        <u>Yes</u>
        {' '}
        (
        {answer.helpfulness}
        ) | Report
      </div>
    </div>
  );
}

export default Answer;
