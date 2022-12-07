import React, { useState } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList';
import Modal from './Modal';
import API_KEY from '../../../config';
import { UnderlineTextButton, HelpfulButton, QuestionStyle } from './QandA.style';

function Question({ question, productName }) {
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState('');

  function handleHelpfullQuestions() {
    const helpfulNum = question.question_helpfulness + 1;
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/helpful`, helpfulNum, {
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
  function handleQuestionReport() {
    const reported = { reported: true };
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/report`, reported, {
      headers:
    {
      Authorization: API_KEY,
    },
    })
      .then((response) => {
        console.log('This is the response in handleQuestionReport: ', response);
      })
      .catch((error) => {
        console.log('There is an error in handleQuestionReport: ', error);
      });
  }

  return (
    <QuestionStyle>
      {' '}
      <strong>
        Q:
        {' '}
        {question.question_body}
      </strong>
      {' '}
      <HelpfulButton
        type="button"
        onClick={() => handleHelpfullQuestions}
      >
        Helpful?

      </HelpfulButton>
      {' '}
      <u>Yes</u>
      {' '}
      (
      {question.question_helpfulness}
      )
      {' '}
      |
      {' '}
      <UnderlineTextButton
        type="button"
        onClick={() => handleQuestionReport}
      >
        Report

      </UnderlineTextButton>
      {' '}
      |
      {' '}
      <UnderlineTextButton
        type="button"
        onClick={() => {
          setShowModal(true);
          setLocation('answer');
        }}
      >
        Add Answer
      </UnderlineTextButton>
      {showModal
        ? (
          <Modal
            location={location}
            questionId={question.question_id}
            questionBody={question.question_body}
            productName={productName}
          />
        )
        : null}
      {' '}
      <div id="AnswerList">
        <AnswerList questionId={question.question_id} />
      </div>
    </QuestionStyle>
  );
}

export default Question;
