import React from 'react';
import {
  StyleImg,
  StyleImgPad,
  Check,
} from './Overview.style';

function OVstyleImg({
  styleOpts, styleOpt, index, setSkuOptions, setStyleSelected, styleSelected,
}) {
  return (
    <StyleImgPad>
      <StyleImg
        index={index}
        src={styleOpt.photos[0].thumbnail_url}
        onClick={() => {
          setStyleSelected(styleOpt);
          setSkuOptions(Object.values(styleOpts[index].skus));
        }}
      />
      {styleSelected.name === styleOpt.name
        ? <Check><img src="https://cdn-icons-png.flaticon.com/512/1055/1055183.png" width="10px" alt="" /></Check>
        : null}
    </StyleImgPad>
  );
}

export default OVstyleImg;
