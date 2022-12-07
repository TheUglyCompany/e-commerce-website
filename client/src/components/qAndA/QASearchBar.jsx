import React, { useState } from 'react';

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
    <div id="QuestionsSearchBar">
      <input
        type="text"
        placeholder="Have a question? Search for answers..."
        onChange={handleSearch}
      />
      <button
        type="submit"
        className="search-button"
        onClick={handleSort}
      >
        Search
      </button>
    </div>
  );
}

export default QASearchBar;
