import React, { useState, useEffect } from 'react';
import OVgallerySmall from './OVgallerySmall';
import {
  Gallery,
  GalleryBig,
  ImageBig,
  GalleryZoom,
} from './Overview.style';

function OVgallery({
  styleSelected,
}) {
  const [mainImg, setMainImg] = useState('');
  const [zoom, setZoom] = useState('none');

  const onZoom = () => {
    setZoom('none');
  };

  const goZoom = () => {
    setZoom('absolute');
  };

  useEffect(() => {
    if (styleSelected.photos !== undefined) {
      setMainImg(styleSelected.photos[0].url);
    }
  }, [styleSelected]);

  return (
    <Gallery>
      <OVgallerySmall styleSelected={styleSelected} setMainImg={setMainImg} />
      <GalleryBig onClick={goZoom}>
        {styleSelected.photos !== undefined
          ? <ImageBig src={mainImg} alt="" /> : null}
      </GalleryBig>
      <GalleryZoom display={zoom} onClick={onZoom}>
        <img src={mainImg} width="100%" alt="" />
      </GalleryZoom>
    </Gallery>
  );
}

export default OVgallery;
