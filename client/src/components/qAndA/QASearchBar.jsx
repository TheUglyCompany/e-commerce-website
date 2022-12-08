import React, { useState } from 'react';
import { SearchBarStyle, SearchBarInput, StandardButton } from './QandA.style';

function QASearchBar({ setCurrQuestionList, questionList }) {
  const [query, setQuery] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  function handleSort(event) {
    event.preventDefault();
    if (query.length < 3) {
      setCurrQuestionList(questionList);
    } else {
      setCurrQuestionList(questionList.filter((question) => {
        if (question.question_body.includes(query)) {
          return question;
        }
      }));
    }
  }

  return (
    <SearchBarStyle>
      <SearchBarInput
        placeholder="Have a question? Search for answers..."
        onChange={handleSearch}
      />
      <StandardButton
        type="submit"
        onClick={handleSort}
      >
        Search
      </StandardButton>
    </SearchBarStyle>
  );
}

export default QASearchBar;
