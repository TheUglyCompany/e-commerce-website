import React, { useState } from 'react';
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
  StyleImg,
  StyleImgPad,
  StyleHeader,
  StyleSelected,
  Dd,
  DdBttn,
  DdContent,
  DdItem,
} from './Overview.style';

function OVquantity({
  currentSku,
  bttnQntyActive,
  setBttnQntyActive,
  bttnQnty,
  setBttnQnty
}) {
  const changeQntyArr = (num) => {
    let result = [];

    if (num > 15) {
      num = 15;
    }

    for (var i = 0; i < num; i++) {
      result.push(i+1);
    }

    return result;
  }

  const qntyArr = changeQntyArr(currentSku.quantity);

  return(
    <Dd>
      <DdBttn onClick={(e) => {setBttnQntyActive(!bttnQntyActive)}}>
        {bttnQnty}&nbsp;&nbsp;
        <span><img src="https://cdn-icons-png.flaticon.com/512/25/25243.png" width="10px" /></span>
      </DdBttn>
        {bttnQntyActive && (
          <DdContent>
            {qntyArr.map((qntyNum) => (
              <DdItem onClick={(e) => {
                setBttnQnty(e.target.textContent);
                setBttnQntyActive(false);
              }}>
                {qntyNum}
              </DdItem>
            ))}
          </DdContent>
        )}
    </Dd>
  );
}

export default OVquantity;