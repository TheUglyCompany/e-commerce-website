import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import Answer from './Answer';
import {
  LoadMoreButton, AnswerStyle, LoadMoreButtonSpan, NoAnswerStyle,
} from './QandA.style';

function AnswerList({
  questionId, productName, currQuestionList, dark, productId,
}) {
  const [answerList, setAnswerList] = useState([]);
  const [showMoreAnswers, setShowMoreAnswers] = useState(false);
  const [renderCount, setRenderCount] = useState(2);
  let count = 0;
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/answers`, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => {
        setAnswerList(response.data.results);
      })
      .catch((error) => {
        console.log('There is an error in AnswerList: ', error);
      });
  }, [currQuestionList]);

  return (
    <AnswerStyle dark={dark}>
      {answerList?.length !== 0
        ? answerList.map((answer, index) => {
          count += 1;
          console.log(answer);
          if (count <= renderCount) {
            return (
              <Answer
                answer={answer}
                key={index}
                productName={productName}
                dark={dark}
              />
            );
          }
          return null;
        }) : <NoAnswerStyle>No Answers Found</NoAnswerStyle>}
      <LoadMoreButtonSpan>
        {answerList.length >= 2 && count > renderCount
          ? (
            <LoadMoreButton
              type="button"
              onClick={() => {
                setRenderCount(renderCount + 2);
                setShowMoreAnswers(true);
              }}
              dark={dark}
            >
              LOAD MORE ANSWERS
            </LoadMoreButton>
          )
          : null}
        &nbsp;
        &nbsp;
        {showMoreAnswers ? (
          <LoadMoreButton
            type="button"
            onClick={() => {
              setRenderCount(2);
              setShowMoreAnswers(false);
            }}
            dark={dark}
          >
            HIDE MORE ANSWERS

          </LoadMoreButton>
        ) : null}
      </LoadMoreButtonSpan>
      &nbsp;
    </AnswerStyle>
  );
}

export default AnswerList;
