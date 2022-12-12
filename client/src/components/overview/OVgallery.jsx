import React, { useState, useEffect } from 'react';
import OVgallerySmall from './OVgallerySmall';
import {
  Gallery,
  GalleryBig,
  GalleryContainer,
  ImageBig,
  GalleryZoom,
  OVgalleryArrowRight,
  OVgalleryArrowLeft,
} from './Overview.style';

function OVgallery({
  styleSelected,
}) {
  const [mainImg, setMainImg] = useState('');
  const [photoIdx, setPhotoIdx] = useState(0);
  const [zoom, setZoom] = useState('none');
  const [arrLength, setArrLength] = useState(0);

  const onZoom = () => {
    setZoom('none');
  };

  const goZoom = () => {
    setZoom('absolute');
  };

  const galleryLeft = () => {
    if (photoIdx !== 0) {
      setPhotoIdx(photoIdx - 1);
    }
  };

  const galleryRight = () => {
    if (photoIdx !== arrLength - 1) {
      setPhotoIdx(photoIdx + 1);
    }
  };

  useEffect(() => {
    if (styleSelected.photos !== undefined) {
      setMainImg(styleSelected.photos[photoIdx].url);
      setArrLength(styleSelected.photos.length);
    }
  }, [styleSelected]);
  useEffect(() => {
    if (styleSelected.photos !== undefined) {
      setMainImg(styleSelected.photos[photoIdx].url);
    }
  }, [photoIdx]);

  return (
    <Gallery>
      <OVgallerySmall
        styleSelected={styleSelected}
        setMainImg={setMainImg}
        mainImg={mainImg}
      />

      <GalleryContainer>
        <OVgalleryArrowLeft display="flex" onClick={galleryLeft}>
          <img src="https://cdn-icons-png.flaticon.com/512/7185/7185277.png" height="30px" alt="" />
        </OVgalleryArrowLeft>

        <GalleryBig onClick={goZoom}>
          {styleSelected.photos !== undefined
            ? <ImageBig src={mainImg} alt="" /> : null}
        </GalleryBig>

        <OVgalleryArrowRight display="flex" onClick={galleryRight}>
          <img src="https://cdn-icons-png.flaticon.com/512/7185/7185281.png" height="30px" alt="" />
        </OVgalleryArrowRight>
      </GalleryContainer>

      <GalleryZoom display={zoom} onClick={onZoom}>
        <img src={mainImg} width="100%" alt="" />
      </GalleryZoom>
    </Gallery>
  );
}

export default OVgallery;
