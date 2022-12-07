import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import QASearchBar from './QASearchBar';
import Question from './Question';
import Modal from './Modal';
import { OutermostLayer } from './QandA.style';

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
        currQuestionList={currQuestionList}
        questionList={questionList}
      />
      <OutermostLayer>
        {currQuestionList.results?.length !== 0
          ? currQuestionList.results?.map((question, key) => {
            count += 1;
            if (count <= renderCount) {
              return (
                <Question question={question} key={key} />
              );
            }
            return null;
          }) : <div> No Questions Found </div>}
      </OutermostLayer>
      {currQuestionList.results?.length > 2
        ? (
          <button
            type="button"
            onClick={() => { setRenderCount(renderCount + 2); }}
          >
            {' '}
            More Questions
            {' '}
          </button>
        )
        : null }
      <button
        type="button"
        onClick={() => {
          setShowModal(true);
          setLocation('question');
        }}
      >
        Add a Question
      </button>
      {showModal
        ? (
          <Modal
            setShowModal={setShowModal}
            productId={productId}
            productName={productName}
            location={location}
          />
        ) : null}
    </div>
  );
}

export default QuestionsList;
