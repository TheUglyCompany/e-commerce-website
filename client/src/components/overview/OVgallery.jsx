import React, { useState, useEffect } from 'react';
import OVgallerySmall from './OVgallerySmall';
import {
  Gallery,
  GalleryBig,
  GalleryContainer,
  ImageZoom,
  ImageBig,
  ImageZoomSpan,
  GalleryZoom,
  OVgalleryArrowRight,
  OVgalleryArrowLeft,
} from './Overview.style';

function OVgallery({
  styleSelected,
  dark,
}) {
  const [mainImg, setMainImg] = useState('');
  const [photoIdx, setPhotoIdx] = useState(0);
  const [zoom, setZoom] = useState('none');
  const [arrLength, setArrLength] = useState(0);
  const [galLeftArrow, setGalLeftArrow] = useState('none');
  const [galRightArrow, setGalRightArrow] = useState('flex');

  const onZoom = () => {
    setZoom('none');
  };

  const goZoom = () => {
    setZoom('flex');
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
      setGalLeftArrow('none');
      setGalRightArrow('flex');
      setPhotoIdx(0);
    }
  }, [styleSelected]);
  useEffect(() => {
    if (styleSelected.photos !== undefined) {
      setMainImg(styleSelected.photos[photoIdx].url);
    }
    if (photoIdx === 0) {
      setGalLeftArrow('none');
    }
    if (photoIdx !== 0) {
      setGalLeftArrow('flex');
    }
    if (photoIdx === arrLength - 1) {
      setGalRightArrow('none');
    }
    if (photoIdx !== arrLength - 1) {
      setGalRightArrow('flex');
    }
  }, [photoIdx]);

  return (
    <Gallery>
      <OVgallerySmall
        styleSelected={styleSelected}
        setMainImg={setMainImg}
        setPhotoIdx={setPhotoIdx}
        mainImg={mainImg}
        dark={dark}
      />

      <GalleryContainer>
        <OVgalleryArrowLeft display={galLeftArrow} onClick={galleryLeft}>
          <img src={dark ? 'https://i.imgur.com/EbWJrAK.png' : 'https://i.imgur.com/NuTyVPZ.png'} height="30px" alt="" />
        </OVgalleryArrowLeft>

        <GalleryBig onClick={goZoom}>
          {styleSelected.photos !== undefined
            ? <ImageBig src={mainImg} alt="" /> : null}
        </GalleryBig>

        <OVgalleryArrowRight display={galRightArrow} onClick={galleryRight}>
          <img src={dark ? 'https://i.imgur.com/YAMtrZW.png' : 'https://i.imgur.com/GYCaEcb.png'} height="30px" alt="" />
        </OVgalleryArrowRight>
      </GalleryContainer>

      <GalleryZoom display={zoom} dark={dark}>
        <OVgalleryArrowLeft display={galLeftArrow} onClick={galleryLeft}>
          <img src="https://cdn-icons-png.flaticon.com/512/7185/7185277.png" height="30px" alt="" />
        </OVgalleryArrowLeft>

        <ImageZoomSpan onClick={onZoom}>
          <ImageZoom src={mainImg} alt="" />
        </ImageZoomSpan>

        <OVgalleryArrowRight display={galRightArrow} onClick={galleryRight}>
          <img src="https://cdn-icons-png.flaticon.com/512/7185/7185281.png" height="30px" alt="" />
        </OVgalleryArrowRight>
      </GalleryZoom>
    </Gallery>
  );
}

export default OVgallery;
