import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
import OVquantity from './OVquantity';
import OVstyleImg from './OVstyleImg';
import OVsocial from './OVsocial';
import {
  Ov,
  Gallery,
  GalleryBig,
  ImageBig,
  Details,
  Category,
  Name,
  Price,
  SalePrice,
  Desc,
  Styles,
  StyleHeader,
  StyleSelected,
  Dd,
  DdBttn,
  DdContent,
  DdItem,
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

  // console.log('OV > styleSelected: ', styleSelected.photos);

  return !ready ? <>App is not ready</> : (

    <Ov>
      <Gallery>
        <GalleryBig>
          {styleSelected.photos !== undefined
            ? <ImageBig src={styleSelected?.photos[0].url} alt="" /> : null}
        </GalleryBig>
      </Gallery>
      <Details>
        <Category>{product.category.toUpperCase()}</Category>
        <Name>{product.name}</Name>
        <Price>
          $
          {styleSelected.sale_price
            ? (
              <span>
                <strike>{styleSelected.original_price}</strike>
                &nbsp;
                <SalePrice>{styleSelected.sale_price}</SalePrice>
              </span>
            )
            : styleSelected.original_price}
        </Price>
        <Desc>
          <em>
            &quot;
            {product.slogan}
            &quot;
          </em>
        </Desc>
        <Desc>
          {product.description}
        </Desc>
        <Styles>
          <StyleHeader>
            STYLE:&nbsp;
            <StyleSelected>
              {styleSelected && (
                <span>
                  {styleSelected.name?.toUpperCase()}
                </span>
              )}
            </StyleSelected>
          </StyleHeader>
          <div>
            {styleOpts.map((styleOpt, index) => (
              <OVstyleImg
                styleOpts={styleOpts}
                styleOpt={styleOpt}
                index={index}
                setSkuOptions={setSkuOptions}
                setStyleSelected={setStyleSelected}
              />
            ))}
          </div>
        </Styles>

        <div>
          <Dd>
            <DdBttn onClick={() => { setBttnSizeActive(!bttnSizeActive); }}>
              {bttnSize}
              &nbsp;&nbsp;
              <span>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" width="10px" alt="" />
              </span>
            </DdBttn>
            {bttnSizeActive && (
              <DdContent>
                {skuOptions.map((skuOption) => (
                  <DdItem onClick={(e) => {
                    setBttnSize(e.target.textContent);
                    setBttnSizeActive(false);
                    setCurrentSku(skuOption);
                  }}
                  >
                    {skuOption.size}
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
              setBttnQnty={setBttnQnty}
            />
          )}
        </div>
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
