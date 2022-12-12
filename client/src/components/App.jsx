import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Ratings from './ratings/Ratings';
import Overview from './overview/Overview';
import QandA from './qAndA/QandA';
import RecommendedItems from './recommendedItems/RecommendedItems';
import API_KEY from '../../config';
import { QATitle } from './qAndA/QandA.style';
import {
  AppWrap,
} from './Header.style';

function App() {
  const [product, setProduct] = useState(null);
  const [ready, setReady] = useState(false);
  const [dark, setDark] = useState(false);

  const cardClicked = (productId) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        setReady(false);
        setProduct(response.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/', { headers: { Authorization: API_KEY } })
      .then((response) => { setProduct(response.data[0]); })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (product !== null) {
      setReady(true);
    }
  }, [product]);

  return !ready ? <div data-testid="app">App is not ready</div> : (
    <AppWrap dark={dark} data-testid="app">
      <Header dark={dark} setDark={setDark} />
      <Overview product={product} />
      <RecommendedItems product={product} cardClicked={cardClicked} />
      <QATitle>Questions & Answers</QATitle>
      <QandA product={product} />
      <Ratings product={product} />
    </AppWrap>
  );
}

export default App;
