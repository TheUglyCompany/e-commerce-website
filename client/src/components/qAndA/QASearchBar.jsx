import React, { useState } from 'react';

function QASearchBar() {
  const [query, setQuery] = useState('');

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  return (
    <div id="QuestionsSearchBar">
      <input
        type="text"
        placeholder="Have a question? Search for answers..."
        onChange={handleSearch}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </div>
  );
}

export default QASearchBar;
