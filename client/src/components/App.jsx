import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ratings from './ratings/Ratings';
import Overview from './overview/Overview';
import QandA from './qAndA/QandA';
import RecommendedItems from './recommendedItems/RecommendedItems';
import API_KEY from '../../config'

function App() {
  
  useEffect(() => {
  axios.get(url, {headers: {Authorization : API_KEY}})
  },  []);
  
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
