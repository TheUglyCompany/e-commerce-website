import React, { useState } from 'react';

function QASearchBar({ setCurrQuestionList, questionList }) {
  const [query, setQuery] = useState('');

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleSort() {
    setCurrQuestionList(questionList.filter((question) => {
      if (question.includes(query)) {
        return question;
      }
    }));
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
