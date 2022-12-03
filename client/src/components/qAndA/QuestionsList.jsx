import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import Question from './Question';
import AnswerList from './AnswerList';

function QuestionsList({ productId }) {
  const [questionList, setQuestionList] = useState([]);
  const [currQuestionList, setCurrQuestionList] = useState([]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      headers: { Authorization: API_KEY },
      params: { product_id: productId },
    })
      .then((response) => {
        setQuestionList(response.data);
        setCurrQuestionList(response.data);
      })
      .catch((error) => {
        console.log('There is an error in QuestionsList: ', error);
      });
  }, []);
  if (questionList.length === 0) {
    return (
      <div>
        {currQuestionList.map((question) => (
          <div id="QuestionList">
            <Question question={question} />
            <AnswerList question={question} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      No Questions Found :c
      <div>
        <button type="button">Ask a Question</button>
      </div>
    </div>
  );
}

export default QuestionsList;
