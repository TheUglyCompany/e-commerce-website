import React from 'react';
import { SearchBarStyle, SearchBarInput } from './QandA.style';

function QASearchBar({ setCurrQuestionList, questionList, dark }) {
  function handleSearch(event) {
    event.preventDefault();
    const query = event.target.value.toLowerCase().trim();
    if (query.length < 3 || query === '') {
      setCurrQuestionList(questionList);
    } else {
      setCurrQuestionList(questionList.filter((question) => {
        const questionBody = question.question_body.toLowerCase();
        if (questionBody.includes(query)) {
          return question;
        }
        return null;
      }));
    }
  }

  return (
    <SearchBarStyle>
      <SearchBarInput
        placeholder="Have a question? Search for answers..."
        onChange={(event) => handleSearch(event)}
        dark={dark}
      />
    </SearchBarStyle>
  );
}

export default QASearchBar;
