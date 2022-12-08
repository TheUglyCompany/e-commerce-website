import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import QASearchBar from './QASearchBar';
import Question from './Question';
import Modal from './Modal';
import {
  OutermostLayer, StandardButton, StandardButtonSpan, NoQuestionsFoundStyle,
} from './QandA.style';

function QuestionsList({ productId, productName }) {
  const [questionList, setQuestionList] = useState([]);
  const [renderCount, setRenderCount] = useState(4);
  const [currQuestionList, setCurrQuestionList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState('');
  let count = 0;

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      headers: { Authorization: API_KEY },
      params: {
        product_id: productId,
        count: 200,
      },
    })
      .then((response) => {
        console.log('The Data: ', response.data);
        setQuestionList(response.data.results);
        setCurrQuestionList(response.data.results);
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
      <OutermostLayer>
        {currQuestionList?.length !== 0
          ? currQuestionList?.map((question, key) => {
            count += 1;
            if (count <= renderCount) {
              return (
                <Question
                  question={question}
                  key={key}
                  productName={productName}
                  setShowModal={setShowModal}
                />
              );
            }
            return null;
          }) : <NoQuestionsFoundStyle> No Questions Found </NoQuestionsFoundStyle>}
      </OutermostLayer>
      <StandardButtonSpan>
        {currQuestionList?.length > 2
          ? (
            <StandardButton
              type="button"
              onClick={() => { setRenderCount(renderCount + 2); }}
            >
              {' '}
              More Questions
              {' '}
            </StandardButton>
          )
          : null }
        <StandardButton
          type="button"
          onClick={() => {
            setShowModal(true);
            setLocation('question');
          }}
        >
          Add a Question
        </StandardButton>
        {showModal
          ? (
            <Modal
              setShowModal={setShowModal}
              productId={productId}
              productName={productName}
              location={location}
            />
          ) : null}
      </StandardButtonSpan>
    </div>
  );
}

export default QuestionsList;
