import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../../config';
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
  Button,
  StyleImg,
  StyleImgPad,
  StyleHeader,
  StyleSelected,
  DropdownStyle,
  DropdownStyleSelect,
} from './Overview.style';

function Overview({ product }) {
  const [styleOpts, setStyleOpts] = useState([]);
  const [ready, setReady] = useState(false);
  const [styleSelected, setStyleSelected] = useState('');

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product.id}/styles`, { headers: { Authorization: API_KEY } })
      .then((response) => {
        setStyleOpts(response.data.results);
        setStyleSelected(response.data.results[0].name);
      })
      .catch((err) => console.log(err.message));
  }, []);
  useEffect(() => {
    if (product !== null) {
      setReady(true);
    }
  }, [product]);
  useEffect(() => { console.log('styleOpts: ', styleOpts); }, [styleOpts]);

  console.log('styleOpts: ', styleOpts[0]);

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

        <Purchase>
          <DropdownStyle>
            <DropdownStyleSelect value="volvo">VOLVO</DropdownStyleSelect>
            <DropdownStyleSelect value="saab">SAAB</DropdownStyleSelect>
            <DropdownStyleSelect value="mercedes">MERCEDES</DropdownStyleSelect>
            <DropdownStyleSelect value="audi">AUDI</DropdownStyleSelect>
          </DropdownStyle>
        </Purchase>
        {/* <Purchase>
          <Button>ADD TO CART</Button>
        </Purchase> */}
      </Details>
    </Ov>
  );
}

export default Overview;
