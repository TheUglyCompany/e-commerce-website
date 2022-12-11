import React, { useState } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList';
import Modal from './Modal';
import API_KEY from '../../../config';
import {
  UnderlineTextButton, HelpfulButton, QuestionStyle, ButtonSpan, QuestionBodySpan, YesStyle,
} from './QandA.style';

function Question({
  question, productName, currQuestionList, setCurrQuestionList,
}) {
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState('');
  const [reported, setReported] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const questionId = question.question_id;
  const currQuestionInfo = localStorage[questionId];

  function handleHelpfullQuestions() {
    const helpfulNum = question.question_helpfulness + 1;
    if (currQuestionInfo === undefined && helpful === false) {
      localStorage[questionId] = 'helpful';
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
      setHelpful(true);
    } else {
      window.alert('You\'ve already said the question was helpful!');
    }
  }
  function handleQuestionReport() {
    const reportRequest = { reported: true };
    if (currQuestionInfo === undefined && reported === false) {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/report`, reportRequest, {
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
      setReported(true);
    } else {
      window.alert('You\'ve already reported this question!');
    }
  }

  return (
    <QuestionStyle>
      {' '}
      <QuestionBodySpan>
        Q:
        &nbsp;
        {question.question_body}
      </QuestionBodySpan>
      <ButtonSpan>
        <HelpfulButton
          type="button"
          onClick={() => handleHelpfullQuestions()}
        >
          Helpful?

        </HelpfulButton>
        &nbsp;
        <YesStyle>
          <u>Yes</u>
          {' '}
          (
          {!helpful
            ? question.question_helpfulness
            : question.question_helpfulness + 1}
          )
          &nbsp;
          |
        </YesStyle>
        &nbsp;
        &nbsp;
        {reported
          ? <YesStyle>Reported!</YesStyle>
          : (
            <UnderlineTextButton
              type="button"
              onClick={() => handleQuestionReport()}
            >
              Report

            </UnderlineTextButton>
          )}
        &nbsp;
        &nbsp;
        <YesStyle>
          |
        </YesStyle>
        &nbsp;
        &nbsp;
        <UnderlineTextButton
          type="button"
          onClick={() => {
            setShowModal(true);
            setLocation('answer');
          }}
        >
          Add Answer
        </UnderlineTextButton>
      </ButtonSpan>
      {showModal
        ? (
          <Modal
            location={location}
            questionId={question.question_id}
            questionBody={question.question_body}
            productName={productName}
            setShowModal={setShowModal}
          />
        )
        : null}
      {' '}
      <div id="AnswerList">
        <AnswerList
          questionId={question.question_id}
          productName={productName}
          setShowModal={setShowModal}
          currQuestionList={currQuestionList}
          setCurrQuestionList={setCurrQuestionList}
        />
      </div>
    </QuestionStyle>
  );
}

export default Question;
