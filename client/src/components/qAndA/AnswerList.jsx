import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import Answer from './Answer';
import { LoadMoreButton } from './QandA.style';

function AnswerList({ questionId }) {
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
  }, []);

  return (
    <div>
      {answerList.map((answer) => {
        count += 1;
        if (count <= renderCount) {
          return (
            <Answer answer={answer} />
          );
        }
      })}
      {answerList.length >= 2 && count > renderCount
        ? (
          <LoadMoreButton
            type="button"
            onClick={() => {
              setRenderCount(renderCount + 2);
              setShowMoreAnswers(true);
            }}
          >
            LOAD MORE ANSWERS
          </LoadMoreButton>
        )
        : null}
      <br />
      {showMoreAnswers ? (
        <LoadMoreButton
          type="button"
          onClick={() => {
            setRenderCount(2);
            setShowMoreAnswers(false);
          }}
        >
          HIDE MORE ANSWERS

        </LoadMoreButton>
      ) : null}
      <br />
    </div>
  );
}

export default AnswerList;
