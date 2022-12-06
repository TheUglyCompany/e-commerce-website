import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';

function CardImage({ productId }) {
  const [styles, setStyles] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`, { headers: { Authorization: API_KEY } })
      .then((response) => setStyles(response.data.results))
      .catch((err) => console.log('error in fetching image for card'));
  }, []);

  useEffect(() => {
    if (styles !== null) {
      setReady(true);
    }
  }, [styles]);

  return !ready ? null : (
    <img src={styles[0].photos[0].url} />
  )
}

export default CardImage;
