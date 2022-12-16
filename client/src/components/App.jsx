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
  const [metaData, setMetaData] = useState({});
  const [prodAvg, setProdAvg] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [styles, setStyles] = useState(null);

  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  const cardClicked = (productId) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        // console.log('response is', response);
        setReady(false);
        setProduct(response.data);
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
          headers: { Authorization: API_KEY },
          params: { product_id: response.data.id },
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
  };

  useEffect(() => {
    Promise.all([
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40346', { headers: { Authorization: API_KEY } }),
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', { headers: { Authorization: API_KEY }, params: { product_id: 40346 } }),
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40346/styles', { headers: { Authorization: API_KEY } })])
      .then((response) => {
        setProduct(response[0].data);
        setMetaData(response[1].data);
        const totalReviews = Number(response[1].data.ratings['1']) + Number(response[1].data.ratings['2']) + Number(response[1].data.ratings['3']) + Number(response[1].data.ratings['4']) + Number(response[1].data.ratings['5']);
        setReviewCount(totalReviews);
        setProdAvg((
          (Number(response[1].data.ratings['1'])
          + (Number(response[1].data.ratings['2']) * 2)
          + (Number(response[1].data.ratings['3']) * 3)
          + (Number(response[1].data.ratings['4']) * 4)
          + (Number(response[1].data.ratings['5']) * 5))
          / totalReviews
        ).toFixed(1));
        setStyles(response[2].data);
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
      <Overview dark={dark} product={product} prodAvg={prodAvg} reviewCount={reviewCount} />
      <RecommendedItems
        dark={dark}
        pageItemObj={{ ...product, ...{ percentage: `${prodAvg * 20}%`, totalReviews: reviewCount }, ...{ styles } }}
        cardClicked={cardClicked}
        productId={product.id}
      />
      <QATitle>Questions & Answers</QATitle>
      <QandA dark={dark} product={product} defer />
      <QATitle id="ratings">Ratings & Reviews </QATitle>
      <Ratings
        dark={dark}
        product={product}
        prodAvg={prodAvg}
        metaData={metaData}
        reviewCount={reviewCount}
        defer
      />
    </AppWrap>
  );
}

export default App;
