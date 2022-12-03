import React from 'react';
import {
  StyleOption,
  StylePreview,
  StyleContent,
  StyleImg,
} from './Overview.style';

function StylesComp({ styleOpt }) {
  return (
    <StylePreview>
      <StyleOption src={styleOpt.photos[0].thumbnail_url}> </StyleOption>
      <StyleContent>{styleOpt.name.toUpperCase()}</StyleContent>
      {/* <StyleImg src={styleOpt.photos[0].thumbnail_url} /> */}
    </StylePreview>
  );
}

export default StylesComp;
