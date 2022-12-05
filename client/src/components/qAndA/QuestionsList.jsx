import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import QASearchBar from './QASearchBar';
import Question from './Question';

function QuestionsList({ productId }) {
  const [questionList, setQuestionList] = useState([]);
  const [currQuestionList, setCurrQuestionList] = useState([]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      headers: { Authorization: API_KEY },
      params: { product_id: productId },
    })
      .then((response) => {
        console.log('Response in QuestionList: ', response);
        setQuestionList(response.data);
        setCurrQuestionList(response.data);
      })
      .catch((error) => {
        console.log('There is an error in QuestionsList: ', error);
      });
  }, []);
  return (
    <div id="QuestionsList">
      <QASearchBar
        setCurrQuestionList={setCurrQuestionList}
        questionList={questionList}
      />
      {
        currQuestionList.results !== undefined && currQuestionList.results.length !== 0
          ? currQuestionList.results.map((question) => (
            <div id="QuestionList">
              <Question question={question} />
            </div>
          ))
          : (
            <div>
              No Questions Found
              <div>
                <button type="button">Ask a Question</button>
              </div>
            </div>
          )
      }
    </div>
  );
}

export default QuestionsList;
