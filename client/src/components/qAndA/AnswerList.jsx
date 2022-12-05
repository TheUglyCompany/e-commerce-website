import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import Answer from './Answer';

function AnswerList({ questionId }) {
  const [answerList, setAnswerList] = useState([]);
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
      {answerList.map((answer) => (
        <Answer answer={answer} />
      ))}
      <button type="button">More Answered Questions</button>
      <button type="button">Add a Question</button>
    </div>
  );
}

export default AnswerList;
