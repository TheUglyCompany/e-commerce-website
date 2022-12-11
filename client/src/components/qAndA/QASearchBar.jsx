import React, { useState } from 'react';
import { SearchBarStyle, SearchBarInput } from './QandA.style';

function QASearchBar({ setCurrQuestionList, questionList }) {
  const [query, setQuery] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    setQuery(event.target.value.toLowerCase());
    if (query.length < 3) {
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
        onChange={handleSearch}
      />
    </SearchBarStyle>
  );
}

export default QASearchBar;
