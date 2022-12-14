import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import API_KEY from '../../../config';
import {
  UnderlineTextButton,
  HelpfulButton,
  AnswerImageStyle, YesStyle,
  AnswerImageZoom,
  ModalContainer,
} from './QandA.style';

function Answer({ answer, dark }) {
  const [zoom, setZoom] = useState(false);
  const [reported, setReported] = useState(false);
  const [helpful, setHelpful] = useState(false);
  const answerId = answer.answer_id;

  const { date } = answer;
  const formatDate = format(new Date(date), 'MMMM d, yyyy');
  function handleHelpfulAnswer() {
    const helpfulNum = answer.helpfulness + 1;
    if (helpful === false && localStorage[answerId] === undefined) {
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
      setHelpful(true);
      localStorage[answerId] = 'helpful';
    } else {
      window.alert('You\'ve already said this answer was helpful!');
    }
  }
  function handleAnswerReport() {
    const reportRequest = { reported: true };
    if (reported === false) {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer.answer_id}/report`, reportRequest, {
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
      setReported(true);
    } else {
      window.alert('You\'ve already reported this answer!');
    }
  }

  const zoomIn = () => {
    setZoom(true);
  };

  const zoomOut = () => {
    setZoom(false);
  };

  return (
    <div id="answer">
      <strong>A: </strong>
      {answer.body}
      <div>
        {answer.photos?.length !== 0
          ? answer.photos.map((photo, index) => (
            !zoom
              ? <AnswerImageStyle src={photo.url} alt="" onClick={zoomIn} key={index} dark={dark} />
              : (
                <ModalContainer>
                  <AnswerImageZoom src={photo.url} alt="" onClick={zoomOut} key={index} dark={dark} />
                </ModalContainer>
              )
          )) : null}
      </div>
      <YesStyle dark={dark}>
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
          onClick={() => handleHelpfulAnswer()}
          dark={dark}
        >
          Helpful?
        </HelpfulButton>
        &nbsp;
        <u>Yes</u>
        {' '}
        (
        {!helpful
          ? answer.helpfulness : answer.helpfulness + 1}
        )
        &nbsp;
        |
        &nbsp;
        &nbsp;
        {!reported
          ? (
            <UnderlineTextButton
              type="button"
              onClick={() => handleAnswerReport()}
              dark={dark}
            >
              Report
            </UnderlineTextButton>
          )
          : <YesStyle dark={dark}>Reported!</YesStyle>}
        <hr />
      </YesStyle>
    </div>
  );
}

export default Answer;
