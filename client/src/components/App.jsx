import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ratings from './ratings/Ratings';
import Overview from './overview/Overview';
import QandA from './qAndA/QandA';
import RecommendedItems from './recommendedItems/RecommendedItems';
import API_KEY from '../../config';

function App() {
  const [product, setProduct] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/', { headers: { Authorization: API_KEY } })
      .then((response) => { setProduct(response.data[1]); })
      .catch((err) => console.log(err.message));
  }, []);
  useEffect(() => {
    if (product !== null) {
      setReady(true);
    }
  }, [product]);

  return !ready ? <div data-testid="app">App is not ready</div> : (
    <div data-testid="app">
      <h2>Taco Bell&apos;s FEC Project</h2>
      <h3>
        Wiliam Park, Charlie Um, Matthew Sigler, Jonathan Sindorf
      </h3>
      {/* <Overview product={product} />
      <RecommendedItems />
      <QandA product={product} /> */}
      <h4> Ratings & Reviews </h4>
      <Ratings product={product} />
    </div>
  );
}

export default App;
