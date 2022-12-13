import React from 'react';
import {
  StyleImg,
  StyleImgPad,
  Check,
} from './Overview.style';

function OVstyleImg({
  styleOpts,
  styleOpt,
  index,
  setSkuOptions,
  setStyleSelected,
  styleSelected,
  dark,
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
        ? <Check dark={dark}><img src="https://i.imgur.com/5bqYJip.png" width="10px" alt="" /></Check>
        : null}
    </StyleImgPad>
  );
}

export default OVstyleImg;
