import React, { useState } from 'react';
import { SearchBarStyle, SearchBarInput } from './QandA.style';

function QASearchBar({ setCurrQuestionList, questionList, currQuestionList }) {
  const [query, setQuery] = useState('');

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleSort(event) {
    event.preventDefault();
    if (query.length < 3) {
      setCurrQuestionList(questionList);
    } else {
      setCurrQuestionList(questionList.results.filter((question) => {
        if (question.question_body.includes(query)) {
          return question;
        }
      }));
    }
    console.log(currQuestionList);
  }

  return (
    <SearchBarStyle>
      <SearchBarInput
        placeholder="Have a question? Search for answers..."
        onChange={() => handleSearch}
      />
      <button
        type="submit"
        className="search-button"
        onClick={handleSort}
      >
        Search
      </button>
    </SearchBarStyle>
  );
}

export default QASearchBar;
