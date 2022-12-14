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
  GlobalStyle,
} from './Header.style';

function App() {
  const [product, setProduct] = useState(null);
  const [ready, setReady] = useState(false);
  const [dark, setDark] = useState(false);
  const [prodAvg, setProdAvg] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [metaData, setMetaData] = useState({});

  const cardClicked = (productId) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        // console.log('response is', response);
        setReady(false);
        setProduct(response.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/', { headers: { Authorization: API_KEY } })
      .then((response) => {
        setProduct(response.data[0]);
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
          headers: { Authorization: API_KEY },
          params: { product_id: response.data[0].id },
        }).then((metaDataResponse) => {
          const totalReviews = Number(metaDataResponse.data.ratings['1']) + Number(metaDataResponse.data.ratings['2']) + Number(metaDataResponse.data.ratings['3']) + Number(metaDataResponse.data.ratings['4']) + Number(metaDataResponse.data.ratings['5']);
          setMetaData(metaDataResponse.data);
          setReviewCount(totalReviews);
          setProdAvg((
            (Number(metaDataResponse.data.ratings['1'])
            + (Number(metaDataResponse.data.ratings['2']) * 2)
            + (Number(metaDataResponse.data.ratings['3']) * 3)
            + (Number(metaDataResponse.data.ratings['4']) * 4)
            + (Number(metaDataResponse.data.ratings['5']) * 5))
            / totalReviews
          ).toFixed(1));
        });
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (product !== null) {
      setReady(true);
    }
  }, [product]);

  return !ready ? <div>App is not ready</div> : (
    <AppWrap dark={dark} data-testid="app">
      <GlobalStyle />
      <Header dark={dark} setDark={setDark} />
      {/* <Overview dark={dark} product={product} prodAvg={prodAvg} reviewCount={reviewCount} />
      <RecommendedItems dark={dark} product={product} cardClicked={cardClicked} />
      <QATitle>Questions & Answers</QATitle>
      <QandA dark={dark} product={product} />
      <QATitle id="ratings">Ratings & Reviews </QATitle> */}
      <Ratings
        dark={dark}
        product={product}
        prodAvg={prodAvg}
        metaData={metaData}
        reviewCount={reviewCount}
      />
    </AppWrap>
  );
}

export default App;
