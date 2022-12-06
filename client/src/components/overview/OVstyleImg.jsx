import React, { useState } from 'react';
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
  StyleImgThumb,
  StyleHeader,
  StyleSelected,
  Dd,
  DdBttn,
  DdContent,
  DdItem,
} from './Overview.style';

function OVstyleImg({ styleOpts, styleOpt, index, setSkuOptions, setStyleSelected }) {
  return(
    <StyleImgPad>
        <StyleImg key={index} src={styleOpt.photos[0].thumbnail_url} onClick={() => {
          setStyleSelected(styleOpt.name);
          setSkuOptions(Object.values(styleOpts[index].skus));
        }} />
    </StyleImgPad>
  );
}

export default OVstyleImg;
