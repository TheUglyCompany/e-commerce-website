import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import OVgallery from './OVgallery';
import OVratings from './OVratings';
import OVprodDetails from './OVprodDetails';
import OVsocial from './OVsocial';
import OVstyles from './OVstyles';
import OVorderDetails from './OVorderDetails';
import {
  Ov,
  Details,
  Button,
  FavButton,
} from './Overview.style';

function Overview({
  product,
  revAvg,
  revCount,
  dark,
}) {
  const [styleOpts, setStyleOpts] = useState([]);
  const [ready, setReady] = useState(false);
  const [styleSelected, setStyleSelected] = useState('');
  const [skuOptions, setSkuOptions] = useState([]);
  const [currentSku, setCurrentSku] = useState({});
  const [bttnSizeActive, setBttnSizeActive] = useState(false);
  const [bttnSize, setBttnSize] = useState('SELECT SIZE');
  const [bttnQntyActive, setBttnQntyActive] = useState(false);
  const [bttnQnty, setBttnQnty] = useState('QUANTITY');

  const addToCart = () => {
    axios.post(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart/',
      {
        sku_id: styleSelected.style_id,
        // count: bttnQnty,
      },
      { headers: { Authorization: API_KEY } },
    )
      .then(() => {
        console.log('Add to cart SUCCESS!');
      })
      .catch((error) => {
        console.log('There is an error adding to cart: ', error);
      });
  };

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product.id}/styles`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        setStyleOpts(response.data.results);
        setStyleSelected(response.data.results[0]); // removed .name
        setSkuOptions(Object.values(response.data.results[0].skus));
        setCurrentSku(Object.values(response.data.results[0].skus)[0]);
      })
      .catch((err) => console.log(err.message));
  }, []);
  useEffect(() => {
    if (product !== null) {
      setReady(true);
    }
  }, [product]);
  useEffect(() => {}, [styleOpts]);

  return !ready ? <>App is not ready</> : (

    <Ov>
      <OVgallery styleSelected={styleSelected} dark={dark} />

      <Details>
        <OVratings dark={dark} revAvg={revAvg} revCount={revCount} />
        <OVprodDetails product={product} styleSelected={styleSelected} />
        <OVstyles
          styleSelected={styleSelected}
          styleOpts={styleOpts}
          setSkuOptions={setSkuOptions}
          setStyleSelected={setStyleSelected}
          dark={dark}
        />
        <OVorderDetails
          skuOptions={skuOptions}
          currentSku={currentSku}
          setCurrentSku={setCurrentSku}
          bttnSizeActive={bttnSizeActive}
          setBttnSizeActive={setBttnSizeActive}
          bttnSize={bttnSize}
          setBttnSize={setBttnSize}
          bttnQntyActive={bttnQntyActive}
          setBttnQntyActive={setBttnQntyActive}
          bttnQnty={bttnQnty}
          setBttnQnty={setBttnQnty}
          dark={dark}
        />

        <Button dark={dark} onClick={addToCart}>
          ADD TO CART
        </Button>
        <FavButton dark={dark}>
          <img src={dark ? 'https://i.imgur.com/c7ntcX2.png' : 'https://i.imgur.com/NVBo2k2.png'} width="15px" alt="" />
        </FavButton>
        <OVsocial dark={dark} />
      </Details>
    </Ov>
  );
}

export default Overview;
