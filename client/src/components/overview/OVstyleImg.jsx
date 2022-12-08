import React from 'react';
import {
  StyleImg,
  StyleImgPad,
} from './Overview.style';

function OVstyleImg({
  styleOpts, styleOpt, index, setSkuOptions, setStyleSelected,
}) {
  return (
    <StyleImgPad>
      <StyleImg
        key={index}
        src={styleOpt.photos[0].thumbnail_url}
        onClick={() => {
          setStyleSelected(styleOpt);
          setSkuOptions(Object.values(styleOpts[index].skus));
        }}
      />
    </StyleImgPad>
  );
}

export default OVstyleImg;
