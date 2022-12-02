import React from 'react';
import Ratings from './ratings/Ratings';
import Overview from './overview/Overview';
import QandA from './qAndA/QandA';
import RecommendedItems from './recommendedItems/RecommendedItems';

function App() {
  return (
    <div>
      <h2>Taco Bell&apos;s FEC Project</h2>
      <h3>
        Wiliam Park, Charlie Um, Matthew Sigler, Jonathan Sindorf
      </h3>
      <Overview />
      <RecommendedItems />
      <QandA />
      <Ratings />
    </div>
  );
}

export default App;
