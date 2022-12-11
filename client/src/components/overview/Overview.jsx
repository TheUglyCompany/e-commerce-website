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

function Overview({ product }) {
  const [styleOpts, setStyleOpts] = useState([]);
  const [ready, setReady] = useState(false);
  const [styleSelected, setStyleSelected] = useState('');
  const [skuOptions, setSkuOptions] = useState([]);
  const [currentSku, setCurrentSku] = useState({});
  const [bttnSizeActive, setBttnSizeActive] = useState(false);
  const [bttnSize, setBttnSize] = useState('SELECT SIZE');
  const [bttnQntyActive, setBttnQntyActive] = useState(false);
  const [bttnQnty, setBttnQnty] = useState('QUANTITY');

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

  console.log('styleSelected: ', styleSelected);

  return !ready ? <>App is not ready</> : (

    <Ov>
      <OVgallery styleSelected={styleSelected} />

      <Details>
        <OVratings />
        <OVprodDetails product={product} styleSelected={styleSelected} />
        <OVstyles
          styleSelected={styleSelected}
          styleOpts={styleOpts}
          setSkuOptions={setSkuOptions}
          setStyleSelected={setStyleSelected}
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
        />

        <Button>
          ADD TO CART
        </Button>
        <FavButton>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" width="15px" alt="" />
        </FavButton>
        <OVsocial />
      </Details>
    </Ov>
  );
}

export default Overview;
