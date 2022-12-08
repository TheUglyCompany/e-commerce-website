import React from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import API_KEY from '../../../config';
import {
  UnderlineTextButton,
  HelpfulButton,
  AnswerImageStyle, YesStyle,
} from './QandA.style';

function Answer({ answer }) {
  const { date } = answer;
  const formatDate = format(new Date(date), 'MMMM d, yyyy');
  function handleHelpfulAnswer() {
    const helpfulNum = answer.helpfulness + 1;
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer.answer_id}/helpful`, helpfulNum, {
      headers:
    {
      Authorization: API_KEY,
    },
    })
      .then((response) => {
        console.log('This is the response in handleHelpful: ', response);
      })
      .catch((error) => {
        console.log('There is an error in handleHelpful: ', error);
      });
  }
  function handleAnswerReport(event) {
    event.preventDefault();
    const reported = { reported: true };
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer.answer_id}/report`, reported, {
      headers:
    {
      Authorization: API_KEY,
    },
    })
      .then((response) => {
        console.log('This is the response in handleAnswerReport: ', response);
      })
      .catch((error) => {
        console.log('There is an error in handleAnswerReport: ', error);
      });
  }
  return (
    <div id="answer">
      <strong>A: </strong>
      {answer.body}
      <div>
        {answer.photos?.length !== 0
          ? answer.photos.map((photo) => (
            <AnswerImageStyle src={photo.url} alt="product" />
          )) : null}
      </div>
      <YesStyle>
        by
        {' '}
        {answer.answerer_name}
        ,
        {' '}
        {formatDate}
        &nbsp;
        &nbsp;
        |
        &nbsp;
        &nbsp;
        <HelpfulButton
          type="button"
          onClick={() => handleHelpfulAnswer}
        >
          Helpful?
        </HelpfulButton>
        &nbsp;
        <u>Yes</u>
        {' '}
        (
        {answer.helpfulness}
        )
        &nbsp;
        |
        &nbsp;
        &nbsp;
        <UnderlineTextButton
          type="button"
          onClick={() => handleAnswerReport}
        >
          Report
        </UnderlineTextButton>
        <hr />
      </YesStyle>
    </div>
  );
}

export default Answer;
