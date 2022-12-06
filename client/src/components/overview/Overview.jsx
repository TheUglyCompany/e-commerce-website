import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import OVquantity from './OVquantity';
import {
  Ov,
  Gallery,
  GalleryBig,
  Details,
  Category,
  Name,
  Price,
  Styles,
  Purchase,
  StyleImg,
  StyleImgPad,
  StyleHeader,
  StyleSelected,
  Dd,
  DdBttn,
  DdContent,
  DdItem,
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
        setStyleSelected(response.data.results[0].name);
        setSkuOptions(Object.values(response.data.results[0].skus));
        setCurrentSku(Object.values(response.data.results[0].skus)[0])
        // console.log('skuOptions: ', Object.values(response.data.results[0].skus)[0]);
      })
      .catch((err) => console.log(err.message));
  }, []);
  useEffect(() => {
    if (product !== null) {
      setReady(true);
    }
  }, [product]);
  useEffect(() => { console.log('styleOpts: ', styleOpts[0]); }, [styleOpts]);

  return !ready ? <>App is not ready</> : (
    <Ov>
      <Gallery>
        <GalleryBig>
          <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" height="500px" alt="" />
        </GalleryBig>
      </Gallery>
      <Details>
        <Category>{product.category.toUpperCase()}</Category>
        <Name>{product.name}</Name>
        <Price>
          $
          {product.default_price}
        </Price>
        <Styles>
          <StyleHeader>
            STYLE:&nbsp;
            <StyleSelected>
              {styleSelected && (
                <span>
                  {styleSelected.toUpperCase()}
                </span>
              )}
            </StyleSelected>
          </StyleHeader>
          <div>
            {styleOpts.map((styleOpt) => (
              <StyleImgPad>
                <StyleImg src={styleOpt.photos[0].thumbnail_url} />
              </StyleImgPad>
            ))}
          </div>
        </Styles>

        <Dd>
          <DdBttn onClick={(e) => {setBttnSizeActive(!bttnSizeActive)}}>
            {bttnSize}&nbsp;&nbsp;
            <span><img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" width="10px" /></span>
          </DdBttn>
            {bttnSizeActive && (
              <DdContent>
                {skuOptions.map((skuOption) => (
                  <DdItem onClick={(e) => {
                    console.log('inside: ', currentSku);
                    setBttnSize(e.target.textContent);
                    setBttnSizeActive(false);
                    setCurrentSku(skuOption);
                  }}>
                    {skuOption.size.toUpperCase()}
                  </DdItem>
                ))}
              </DdContent>
            )}
        </Dd>

        {currentSku && (
          <OVquantity
            currentSku={currentSku}
            bttnQntyActive={bttnQntyActive}
            setBttnQntyActive={setBttnQntyActive}
            bttnQnty={bttnQnty}
            setBttnQnty={setBttnQnty} />
        )}

      </Details>
    </Ov>
  );
}

export default Overview;
